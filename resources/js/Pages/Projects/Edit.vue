<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { useForm, Link, router } from '@inertiajs/vue3'

const props = defineProps({
    project: Object,
    companies: Array,
})

const form = useForm({
    company_id: props.project.company_id,
    name: props.project.name,
    description: props.project.description || '',
})

const submit = () => {
    form.put(`/projects/${props.project.id}`)
}

const destroy = () => {
    if (confirm('Tem certeza que deseja excluir este projeto? Todos os tickets serão excluídos.')) {
        router.delete(`/projects/${props.project.id}`)
    }
}
</script>

<template>
    <AppLayout>
        <div class="max-w-2xl mx-auto p-6">
            <div class="mb-6">
                <Link :href="`/projects/${project.id}`" class="text-blue-600 hover:underline">
                    &larr; Voltar para {{ project.name }}
                </Link>
            </div>

            <h1 class="text-2xl font-bold mb-6">Editar Projeto</h1>

            <form @submit.prevent="submit" class="bg-white dark:bg-neutral-800 rounded border dark:border-neutral-700 p-6">
                <div class="mb-4">
                    <label class="block font-medium mb-1">Empresa</label>
                    <select
                        v-model="form.company_id"
                        class="w-full border dark:border-neutral-600 dark:bg-neutral-900 rounded px-3 py-2"
                    >
                        <option value="">Selecione uma empresa...</option>
                        <option v-for="company in companies" :key="company.id" :value="company.id">
                            {{ company.name }}
                        </option>
                    </select>
                    <span v-if="form.errors.company_id" class="text-red-500 text-sm">
                        {{ form.errors.company_id }}
                    </span>
                </div>

                <div class="mb-4">
                    <label class="block font-medium mb-1">Nome do Projeto</label>
                    <input
                        v-model="form.name"
                        type="text"
                        class="w-full border dark:border-neutral-600 dark:bg-neutral-900 rounded px-3 py-2"
                    />
                    <span v-if="form.errors.name" class="text-red-500 text-sm">
                        {{ form.errors.name }}
                    </span>
                </div>

                <div class="mb-6">
                    <label class="block font-medium mb-1">Descrição (opcional)</label>
                    <textarea
                        v-model="form.description"
                        rows="3"
                        class="w-full border dark:border-neutral-600 dark:bg-neutral-900 rounded px-3 py-2"
                    ></textarea>
                    <span v-if="form.errors.description" class="text-red-500 text-sm">
                        {{ form.errors.description }}
                    </span>
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
                            :href="`/projects/${project.id}`"
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
                        Excluir Projeto
                    </button>
                </div>
            </form>
        </div>
    </AppLayout>
</template>
