<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { useForm, Link, router } from '@inertiajs/vue3'

const props = defineProps({
    project: Object,
    ticket: Object,
})

const form = useForm({
    title: props.ticket.title,
    description: props.ticket.description,
    status: props.ticket.status,
    attachment: null,
})

const submit = () => {
    form.post(`/projects/${props.project.id}/tickets/${props.ticket.id}`, {
        _method: 'PUT',
        forceFormData: true,
    })
}

const destroy = () => {
    if (confirm('Tem certeza que deseja excluir este ticket?')) {
        router.delete(`/projects/${props.project.id}/tickets/${props.ticket.id}`)
    }
}

const statusOptions = [
    { value: 'open', label: 'Aberto' },
    { value: 'in_progress', label: 'Em Progresso' },
    { value: 'resolved', label: 'Resolvido' },
    { value: 'closed', label: 'Fechado' },
]
</script>

<template>
    <AppLayout>
        <div class="max-w-2xl mx-auto p-6">
            <div class="mb-6">
                <Link
                    :href="`/projects/${project.id}/tickets/${ticket.id}`"
                    class="text-blue-600 hover:underline"
                >
                    &larr; Voltar para o ticket
                </Link>
            </div>

            <h1 class="text-2xl font-bold mb-6">Editar Ticket</h1>

            <form @submit.prevent="submit" class="bg-white dark:bg-neutral-800 rounded border dark:border-neutral-700 p-6">
                <div class="mb-4">
                    <label class="block font-medium mb-1">Título</label>
                    <input
                        v-model="form.title"
                        type="text"
                        class="w-full border dark:border-neutral-600 dark:bg-neutral-900 rounded px-3 py-2"
                    />
                    <span v-if="form.errors.title" class="text-red-500 text-sm">
                        {{ form.errors.title }}
                    </span>
                </div>

                <div class="mb-4">
                    <label class="block font-medium mb-1">Descrição</label>
                    <textarea
                        v-model="form.description"
                        rows="5"
                        class="w-full border dark:border-neutral-600 dark:bg-neutral-900 rounded px-3 py-2"
                    ></textarea>
                    <span v-if="form.errors.description" class="text-red-500 text-sm">
                        {{ form.errors.description }}
                    </span>
                </div>

                <div class="mb-4">
                    <label class="block font-medium mb-1">Status</label>
                    <select
                        v-model="form.status"
                        class="w-full border dark:border-neutral-600 dark:bg-neutral-900 rounded px-3 py-2"
                    >
                        <option v-for="option in statusOptions" :key="option.value" :value="option.value">
                            {{ option.label }}
                        </option>
                    </select>
                    <span v-if="form.errors.status" class="text-red-500 text-sm">
                        {{ form.errors.status }}
                    </span>
                </div>

                <div class="mb-4">
                    <label class="block font-medium mb-1">Anexo atual</label>
                    <div v-if="ticket.attachment_path" class="text-sm text-gray-600 dark:text-gray-400">
                        {{ ticket.attachment_path }}
                    </div>
                    <div v-else class="text-sm text-gray-500">
                        Nenhum anexo
                    </div>
                </div>

                <div class="mb-6">
                    <label class="block font-medium mb-1">Novo Anexo (opcional)</label>
                    <input
                        type="file"
                        @change="form.attachment = $event.target.files[0]"
                        accept=".json,.txt"
                        class="w-full"
                    />
                    <span v-if="form.errors.attachment" class="text-red-500 text-sm">
                        {{ form.errors.attachment }}
                    </span>
                    <p class="text-sm text-gray-500 mt-1">
                        Enviar um novo anexo substituirá o atual e reprocessará os dados.
                    </p>
                </div>

                <div class="flex justify-between">
                    <div class="flex gap-2">
                        <button
                            type="submit"
                            :disabled="form.processing"
                            class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                        >
                            {{ form.processing ? 'Salvando...' : 'Salvar Alterações' }}
                        </button>
                        <Link
                            :href="`/projects/${project.id}/tickets/${ticket.id}`"
                            class="px-6 py-2 border rounded hover:bg-gray-50 dark:hover:bg-neutral-700"
                        >
                            Cancelar
                        </Link>
                    </div>

                    <button
                        type="button"
                        @click="destroy"
                        class="text-red-600 hover:underline"
                    >
                        Excluir Ticket
                    </button>
                </div>
            </form>
        </div>
    </AppLayout>
</template>
