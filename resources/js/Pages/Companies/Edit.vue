<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { useForm, Link, router } from '@inertiajs/vue3'

const props = defineProps({
    company: Object,
})

const form = useForm({
    nome_fantasia: props.company.nome_fantasia,
    cnpj: props.company.cnpj,
})

const submit = () => {
    form.put(`/companies/${props.company.id}`)
}

const destroy = () => {
    if (confirm('Tem certeza que deseja excluir esta empresa? Todos os projetos e tickets serão excluídos.')) {
        router.delete(`/companies/${props.company.id}`)
    }
}
</script>

<template>
    <AppLayout>
        <div class="max-w-2xl mx-auto p-6">
            <div class="mb-6">
                <Link :href="`/companies/${company.id}`" class="text-blue-600 hover:underline">
                    &larr; Voltar para {{ company.name }}
                </Link>
            </div>

            <h1 class="text-2xl font-bold mb-6">Editar Empresa</h1>

            <form @submit.prevent="submit" class="bg-white dark:bg-neutral-800 rounded border dark:border-neutral-700 p-6">
                <div class="mb-4">
                    <label class="block font-medium mb-1">Nome da Empresa</label>
                    <input
                        v-model="form.nome_fantasia"
                        type="text"
                        class="w-full border dark:border-neutral-600 dark:bg-neutral-900 rounded px-3 py-2"
                    />
                    <span v-if="form.errors.nome_fantasia" class="text-red-500 text-sm">
                        {{ form.errors.nome_fantasia }}
                    </span>
                </div>

                <div class="mb-6">
                    <label class="block font-medium mb-1">CNPJ</label>
                    <input
                        v-model="form.cnpj"
                        type="text"
                        class="w-full border dark:border-neutral-600 dark:bg-neutral-900 rounded px-3 py-2"
                    />
                    <span v-if="form.errors.cnpj" class="text-red-500 text-sm">
                        {{ form.errors.cnpj }}
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
                            :href="`/companies/${company.id}`"
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
                        Excluir Empresa
                    </button>
                </div>
            </form>
        </div>
    </AppLayout>
</template>
