<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { useForm, Link } from '@inertiajs/vue3'
import { ArrowLeft, FolderKanban } from 'lucide-vue-next'
import { onMounted } from 'vue'

const props = defineProps({
    companies: Array,
})

const form = useForm({
    company_id: null,
    name: '',
    description: '',
})

onMounted(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const companyId = urlParams.get('company_id')
    if (companyId) {
        form.company_id = companyId
    }
})

const submit = () => {
    form.post('/projects')
}
</script>

<template>
    <AppLayout>
        <div class="p-6">
            <div class="max-w-2xl mx-auto">
                <div class="mb-6">
                    <Link href="/projects" class="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                        <ArrowLeft class="w-4 h-4" />
                        Voltar para projetos
                    </Link>
                </div>

                <div class="flex items-center gap-4 mb-8">
                    <div class="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center">
                        <FolderKanban class="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold">Novo Projeto</h1>
                        <p class="text-gray-500 dark:text-gray-400">Crie um novo projeto para uma empresa</p>
                    </div>
                </div>

                <form @submit.prevent="submit" class="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 p-6">
                    <div class="space-y-6">
                        <div>
                            <label class="block text-sm font-medium mb-2">Empresa</label>
                            <select
                                v-model="form.company_id"
                                class="w-full px-4 py-2.5 border dark:border-neutral-600 dark:bg-neutral-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            >
                                <option value="">Selecione uma empresa...</option>
                                <option v-for="company in companies" :key="company.id" :value="company.id">
                                    {{ company.nome_fantasia }}
                                </option>
                            </select>
                            <p v-if="form.errors.company_id" class="text-red-500 text-sm mt-1">{{ form.errors.company.id }}</p>
                        </div>

                        <div>
                            <label class="block text-sm font-medium mb-2">Nome do Projeto</label>
                            <input
                                v-model="form.name"
                                type="text"
                                class="w-full px-4 py-2.5 border dark:border-neutral-600 dark:bg-neutral-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                placeholder="Ex: Sistema de Vendas"
                            />
                            <p v-if="form.errors.name" class="text-red-500 text-sm mt-1">{{ form.errors.name }}</p>
                        </div>

                        <div>
                            <label class="block text-sm font-medium mb-2">Descrição (opcional)</label>
                            <textarea
                                v-model="form.description"
                                rows="3"
                                class="w-full px-4 py-2.5 border dark:border-neutral-600 dark:bg-neutral-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                                placeholder="Descreva brevemente o projeto..."
                            ></textarea>
                            <p v-if="form.errors.description" class="text-red-500 text-sm mt-1">{{ form.errors.description }}</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-3 mt-8 pt-6 border-t dark:border-neutral-700">
                        <button
                            type="submit"
                            :disabled="form.processing"
                            class="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
                        >
                            {{ form.processing ? 'Salvando...' : 'Criar Projeto' }}
                        </button>
                        <Link
                            href="/projects"
                            class="px-6 py-2.5 border dark:border-neutral-600 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
                        >
                            Cancelar
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </AppLayout>
</template>
