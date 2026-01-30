# Detalhes do projeto da aplicação ServiceHub
_Exported on 1/28/2026 at 18:51:42 GMT-3 from Cursor (2.4.21)_

---

**User**

Objetivo do desafio
Construir uma aplicação chamada “ServiceHub” para gestão de ordens de serviço de clientes:
•	Domínio: 
o	Company (empresa) possui N Projects (1:N).
o	Cada Project possui N Tickets (1:N).
o	Cada Ticket tem um detalhe técnico único (TicketDetail) (1:1).
o	Usuários autenticados (User) interagem com Tickets; e cada User tem um perfil (UserProfile) (1:1) com dados adicionais (ex.: telefone, cargo).

•	Fluxo: 
o	Criação de Ticket via UI (Inertia+Vue).
o	Upload opcional de anexo (ex.: JSON/Texto).
o	Processamento assíncrono em fila: um Job lê o anexo, enriquece dados do TicketDetail e notifica o responsável.

•	Requisitos técnicos:
o	Autenticação padrão Laravel.
o	Relacionamentos 1:1 e 1:N implementados e testados.

•	Atividades opcionais:
o	Fila (Queue) com driver à escolha (database/redis) e um Job funcional.
o	Testes com Pest (ou PHPUnit) cobrindo modelos, serviços, jobs e rotas.
o	Docker para desenvolvimento local.

---

**Cursor**

# ServiceHub - Guia de Arquitetura e Implementação

Vou explicar como estruturar essa aplicação Laravel com todos os requisitos mencionados.

## 1. Estrutura de Domínio e Relacionamentos

### Migrations

```php
// Ordem de criação das migrations:

// 1. companies
Schema::create('companies', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('cnpj')->unique();
    $table->timestamps();
});

// 2. projects
Schema::create('projects', function (Blueprint $table) {
    $table->id();
    $table->foreignId('company_id')->constrained()->cascadeOnDelete();
    $table->string('name');
    $table->text('description')->nullable();
    $table->timestamps();
});

// 3. tickets
Schema::create('tickets', function (Blueprint $table) {
    $table->id();
    $table->foreignId('project_id')->constrained()->cascadeOnDelete();
    $table->foreignId('user_id')->constrained(); // criador do ticket
    $table->string('title');
    $table->text('description');
    $table->enum('status', ['open', 'in_progress', 'resolved', 'closed'])->default('open');
    $table->string('attachment_path')->nullable();
    $table->timestamps();
});

// 4. ticket_details (1:1 com tickets)
Schema::create('ticket_details', function (Blueprint $table) {
    $table->id();
    $table->foreignId('ticket_id')->unique()->constrained()->cascadeOnDelete();
    $table->json('technical_data')->nullable();
    $table->text('resolution_notes')->nullable();
    $table->timestamp('processed_at')->nullable();
    $table->timestamps();
});

// 5. user_profiles (1:1 com users)
Schema::create('user_profiles', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->unique()->constrained()->cascadeOnDelete();
    $table->string('phone')->nullable();
    $table->string('position')->nullable(); // cargo
    $table->string('department')->nullable();
    $table->timestamps();
});
```

### Models com Relacionamentos

```php
// app/Models/Company.php
class Company extends Model
{
    protected $fillable = ['name', 'cnpj'];

    // 1:N - Uma empresa tem muitos projetos
    public function projects(): HasMany
    {
        return $this->hasMany(Project::class);
    }
}

// app/Models/Project.php
class Project extends Model
{
    protected $fillable = ['company_id', 'name', 'description'];

    // N:1 - Projeto pertence a uma empresa
    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    // 1:N - Projeto tem muitos tickets
    public function tickets(): HasMany
    {
        return $this->hasMany(Ticket::class);
    }
}

// app/Models/Ticket.php
class Ticket extends Model
{
    protected $fillable = ['project_id', 'user_id', 'title', 'description', 'status', 'attachment_path'];

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // 1:1 - Ticket tem um detalhe técnico
    public function detail(): HasOne
    {
        return $this->hasOne(TicketDetail::class);
    }
}

// app/Models/TicketDetail.php
class TicketDetail extends Model
{
    protected $fillable = ['ticket_id', 'technical_data', 'resolution_notes', 'processed_at'];

    protected $casts = [
        'technical_data' => 'array',
        'processed_at' => 'datetime',
    ];

    // 1:1 inverso
    public function ticket(): BelongsTo
    {
        return $this->belongsTo(Ticket::class);
    }
}

// app/Models/User.php (adicionar ao existente)
class User extends Authenticatable
{
    // 1:1 - Usuário tem um perfil
    public function profile(): HasOne
    {
        return $this->hasOne(UserProfile::class);
    }

    public function tickets(): HasMany
    {
        return $this->hasMany(Ticket::class);
    }
}

// app/Models/UserProfile.php
class UserProfile extends Model
{
    protected $fillable = ['user_id', 'phone', 'position', 'department'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
```

---

## 2. Job para Processamento Assíncrono

```php
// app/Jobs/ProcessTicketAttachment.php
class ProcessTicketAttachment implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public Ticket $ticket
    ) {}

    public function handle(): void
    {
        if (!$this->ticket->attachment_path) {
            return;
        }

        // Lê o anexo
        $content = Storage::get($this->ticket->attachment_path);
        $data = json_decode($content, true) ?? ['raw_content' => $content];

        // Enriquece o TicketDetail
        $detail = $this->ticket->detail ?? $this->ticket->detail()->create();
        
        $detail->update([
            'technical_data' => array_merge(
                $detail->technical_data ?? [],
                $data,
                ['processed_by' => 'system', 'source' => 'attachment']
            ),
            'processed_at' => now(),
        ]);

        // Notifica o responsável
        $this->ticket->user->notify(new TicketProcessedNotification($this->ticket));
    }
}
```

---

## 3. Controller com Inertia

```php
// app/Http/Controllers/TicketController.php
class TicketController extends Controller
{
    public function index(Project $project)
    {
        return Inertia::render('Tickets/Index', [
            'project' => $project->load('company'),
            'tickets' => $project->tickets()
                ->with(['user', 'detail'])
                ->latest()
                ->paginate(15),
        ]);
    }

    public function create(Project $project)
    {
        return Inertia::render('Tickets/Create', [
            'project' => $project,
        ]);
    }

    public function store(StoreTicketRequest $request, Project $project)
    {
        $ticket = $project->tickets()->create([
            'user_id' => auth()->id(),
            'title' => $request->title,
            'description' => $request->description,
        ]);

        // Cria o TicketDetail vazio (1:1)
        $ticket->detail()->create();

        // Upload de anexo
        if ($request->hasFile('attachment')) {
            $path = $request->file('attachment')->store("tickets/{$ticket->id}");
            $ticket->update(['attachment_path' => $path]);

            // Dispara o Job para processamento assíncrono
            ProcessTicketAttachment::dispatch($ticket);
        }

        return redirect()->route('projects.tickets.show', [$project, $ticket])
            ->with('success', 'Ticket criado com sucesso!');
    }
}
```

---

## 4. Componente Vue (Inertia)

```vue
<!-- resources/js/Pages/Tickets/Create.vue -->
<script setup>
import { useForm } from '@inertiajs/vue3'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'

const props = defineProps({ project: Object })

const form = useForm({
    title: '',
    description: '',
    attachment: null,
})

const submit = () => {
    form.post(route('projects.tickets.store', props.project.id), {
        forceFormData: true,
    })
}
</script>

<template>
    <AuthenticatedLayout>
        <form @submit.prevent="submit" class="max-w-2xl mx-auto p-6">
            <h1 class="text-2xl font-bold mb-6">
                Novo Ticket - {{ project.name }}
            </h1>

            <div class="mb-4">
                <label class="block font-medium mb-1">Título</label>
                <input v-model="form.title" type="text" class="w-full border rounded px-3 py-2" />
                <span v-if="form.errors.title" class="text-red-500 text-sm">{{ form.errors.title }}</span>
            </div>

            <div class="mb-4">
                <label class="block font-medium mb-1">Descrição</label>
                <textarea v-model="form.description" rows="5" class="w-full border rounded px-3 py-2"></textarea>
            </div>

            <div class="mb-4">
                <label class="block font-medium mb-1">Anexo (opcional)</label>
                <input type="file" @change="form.attachment = $event.target.files[0]" accept=".json,.txt" />
            </div>

            <button type="submit" :disabled="form.processing" class="bg-blue-600 text-white px-6 py-2 rounded">
                {{ form.processing ? 'Criando...' : 'Criar Ticket' }}
            </button>
        </form>
    </AuthenticatedLayout>
</template>
```

---

## 5. Testes com Pest

```php
// tests/Feature/TicketTest.php
use App\Models\{User, Company, Project, Ticket};
use App\Jobs\ProcessTicketAttachment;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Queue;

beforeEach(function () {
    $this->user = User::factory()->create();
    $this->company = Company::factory()->create();
    $this->project = Project::factory()->for($this->company)->create();
});

// Teste de relacionamentos
it('ticket belongs to project and has detail', function () {
    $ticket = Ticket::factory()
        ->for($this->project)
        ->for($this->user)
        ->hasDetail()
        ->create();

    expect($ticket->project)->toBeInstanceOf(Project::class)
        ->and($ticket->detail)->not->toBeNull()
        ->and($ticket->user->id)->toBe($this->user->id);
});

// Teste de criação via controller
it('creates ticket with attachment and dispatches job', function () {
    Queue::fake();
    Storage::fake();

    $response = $this->actingAs($this->user)
        ->post(route('projects.tickets.store', $this->project), [
            'title' => 'Problema no sistema',
            'description' => 'Descrição detalhada...',
            'attachment' => UploadedFile::fake()->create('data.json', 100),
        ]);

    $response->assertRedirect();

    $ticket = Ticket::first();
    expect($ticket->title)->toBe('Problema no sistema')
        ->and($ticket->attachment_path)->not->toBeNull();

    Queue::assertPushed(ProcessTicketAttachment::class);
});

// Teste do Job
it('processes attachment and updates ticket detail', function () {
    Storage::fake();
    Storage::put('tickets/1/data.json', json_encode(['error_code' => 500]));

    $ticket = Ticket::factory()
        ->for($this->project)
        ->for($this->user)
        ->hasDetail()
        ->create(['attachment_path' => 'tickets/1/data.json']);

    (new ProcessTicketAttachment($ticket))->handle();

    $ticket->refresh();
    expect($ticket->detail->technical_data)->toHaveKey('error_code')
        ->and($ticket->detail->processed_at)->not->toBeNull();
});
```

---

## 6. Docker Compose

```yaml
# docker-compose.yml
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - .:/var/www/html
    ports:
      - "8000:8000"
    depends_on:
      - mysql
      - redis
    environment:
      - DB_HOST=mysql
      - REDIS_HOST=redis
      - QUEUE_CONNECTION=redis

  mysql:
    image: mysql:8.0
    environment:
      MYSQL_DATABASE: servicehub
      MYSQL_ROOT_PASSWORD: secret
    volumes:
      - mysql_data:/var/lib/mysql
    ports:
      - "3306:3306"

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

  queue:
    build:
      context: .
      dockerfile: Dockerfile
    command: php artisan queue:work --tries=3
    volumes:
      - .:/var/www/html
    depends_on:
      - mysql
      - redis
    environment:
      - DB_HOST=mysql
      - REDIS_HOST=redis
      - QUEUE_CONNECTION=redis

volumes:
  mysql_data:
```

---

## 7. Resumo da Arquitetura

| Entidade | Relacionamento | Descrição |
|----------|----------------|-----------|
| Company → Project | 1:N | `hasMany` / `belongsTo` |
| Project → Ticket | 1:N | `hasMany` / `belongsTo` |
| Ticket → TicketDetail | 1:1 | `hasOne` / `belongsTo` |
| User → UserProfile | 1:1 | `hasOne` / `belongsTo` |
| User → Ticket | 1:N | `hasMany` / `belongsTo` |

### Fluxo do Sistema:
1. Usuário cria ticket via formulário Vue/Inertia
2. Controller salva ticket + cria TicketDetail vazio
3. Se houver anexo, faz upload e dispara `ProcessTicketAttachment`
4. Job lê anexo, enriquece `technical_data` no TicketDetail
5. Notificação é enviada ao criador do ticket

---

Se precisar que eu implemente algo específico, é só mudar para o **Agent mode**. Posso criar toda a estrutura do projeto para você!

