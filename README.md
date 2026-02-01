# ServiceHub — Desafio Técnico (Ticket System)

Este projeto foi desenvolvido como **case de desafio técnico**, com o objetivo de demonstrar domínio prático em **Laravel**, **arquitetura limpa**, **processamento assíncrono** e **testes automatizados**.

O foco principal está na clareza de responsabilidades, segurança de dados, escalabilidade e qualidade de código — refletindo cenários reais de aplicações corporativas.

---

## 🎯 Objetivo do Desafio

Construir um sistema de **gerenciamento de tickets** que permita:

- Criação de tickets associados a projetos
- Upload opcional de anexo no ticket
- Processamento assíncrono do anexo
- Persistência de dados técnicos derivados do anexo
- Cobertura de testes automatizados em múltiplas camadas

---

## 🧰 Stack Tecnológica

- **Backend:** Laravel 12 • PHP 8.3  
- **Frontend:** Inertia.js + Vue 3  
- **Banco de Dados:** MySQL  
- **Fila (Queue):** Database  
- **Testes:** Pest  
- **Autenticação:** Laravel Breeze / Fortify  

---

## 🏗️ Arquitetura da Solução

### Ticket
Entidade principal do sistema, associada a:
- um **Project**
- um **User**
- um **TicketDetail** (relação 1:1)

### TicketDetail
Responsável por armazenar:
- dados técnicos extraídos do anexo
- data de processamento
- observações de resolução

A integridade da relação 1:1 é garantida por **constraint UNIQUE** no banco de dados.

---

## 🗃️ Upload e Processamento Assíncrono

### Fluxo técnico:
1. O ticket é criado via rota protegida (`auth`)
2. O anexo (opcional) é armazenado em `storage/app`
3. Um **Job** (`ProcessTicketAttachment`) é despachado
4. O Job delega o processamento para um **Service**
5. O Service interpreta o conteúdo do arquivo e atualiza o `TicketDetail`

### Observações:
- Jobs são **idempotentes**
- Uso de `firstOrCreate()` evita duplicidade de dados
- Falhas não quebram a consistência do sistema

### Executar o worker da fila:
```bash
php artisan queue:work
```

---

## 🧠 Decisões Técnicas

### ✔️ Separação Service + Job
- O **Service** concentra a regra de negócio
- O **Job** atua apenas como orquestrador
- Facilita testes unitários e manutenção

### ✔️ Segurança de Dados
- Relacionamentos com constraints no banco
- Validações centralizadas em `FormRequest`
- Proteção contra duplicidade em cenários assíncronos

### ✔️ Inertia.js
- Renderização SPA sem abrir mão das rotas do Laravel
- Middleware de autenticação aplicado
- Páginas testadas via `assertInertia`

---

## 🧪 Testes Automatizados

### Ambiente de Teste
- Banco dedicado (`servicehub_testing`)
- `.env.testing`
- Mesmo driver de produção (MySQL)

### Cobertura de Testes

- **Models:** relacionamentos e integridade
- **Routes / Controllers:** GET e POST + Inertia
- **Requests:** regras de validação
- **Jobs:** dispatch e execução
- **Services:** processamento isolado
- **Storage & Queue:** fakes (`Storage::fake`, `Queue::fake`)

### Executar os testes do desafio:
```bash
php artisan test --filter=Ticket
```

Ou individualmente:
```bash
php artisan test --filter=TicketTest
php artisan test --filter=TicketValidationTest
php artisan test --filter=TicketRoutesTest
php artisan test --filter=TicketAttachmentProcessorTest
php artisan test --filter=ProjectTest
php artisan test --filter=DashboardTest
php artisan test --filter=CompanyTest
```

---

## ⚙️ Setup do Projeto

```bash
git clone <repo>
cd ServiceHub
composer install
npm install
npm run dev
php artisan key:generate
php artisan migrate
php artisan serve
```

---

## ✅ Conclusão

Este desafio demonstra:
- aplicação prática de boas práticas em Laravel
- arquitetura orientada a manutenção e testes
- uso correto de filas e processamento assíncrono
- capacidade de estruturar código escalável e testável

O projeto foi desenvolvido simulando um cenário real de produção.
