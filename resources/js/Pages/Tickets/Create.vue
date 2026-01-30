<script setup>
import { useForm } from '@inertiajs/vue3'
import AuthLayout from '@/Layouts/AuthLayout.vue'

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
  <AuthLayout>
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
        <span v-if="form.errors.description" class="text-red-500 text-sm">{{ form.errors.description }}</span>
      </div>

      <div class="mb-4">
        <label class="block font-medium mb-1">Anexo (opcional)</label>
        <input type="file" @change="form.attachment = $event.target.files[0]" accept=".json,.txt" />
        <span v-if="form.errors.attachment" class="text-red-500 text-sm">{{ form.errors.attachment }}</span>
      </div>

      <button type="submit" :disabled="form.processing" class="bg-blue-600 text-white px-6 py-2 rounded">
        {{ form.processing ? 'Criando...' : 'Criar Ticket' }}
      </button>
    </form>
  </AuthLayout>
</template>
