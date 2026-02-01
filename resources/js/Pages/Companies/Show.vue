<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { Link } from '@inertiajs/vue3'
import { Building2, FolderKanban, Plus, ChevronRight, Pencil, ArrowLeft, Ticket } from 'lucide-vue-next'

const props = defineProps({
    company: Object,
})
</script>

<template>
    <AppLayout>
        <div class="p-6">
            <div class="max-w-6xl mx-auto">
                <div class="mb-6">
                    <Link href="/companies" class="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                        <ArrowLeft class="w-4 h-4" />
                        Voltar para empresas
                    </Link>
                </div>

                <div class="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 p-6 mb-6">
                    <div class="flex items-start justify-between">
                        <div class="flex items-center gap-4">
                            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center">
                                <Building2 class="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100">{{ company.nome_fantasia }}</h1>
                                <p class="text-gray-500 dark:text-gray-400 mt-1">CNPJ: {{ company.cnpj }}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <Link
                                :href="`/companies/${company.id}/edit`"
                                class="inline-flex items-center gap-2 px-4 py-2 border dark:border-neutral-600 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
                            >
                                <Pencil class="w-4 h-4" />
                                Editar
                            </Link>
                            <Link
                                :href="`/projects/create?company_id=${company.id}`"
                                class="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                            >
                                <Plus class="w-4 h-4" />
                                Novo Projeto
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 overflow-hidden">
                    <div class="px-6 py-4 border-b dark:border-neutral-700">
                        <h2 class="text-lg font-semibold flex items-center gap-2">
                            <FolderKanban class="w-5 h-5 text-gray-500" />
                            Projetos
                            <span class="text-sm font-normal text-gray-500">({{ company.projects?.length || 0 }})</span>
                        </h2>
                    </div>

                    <div v-if="!company.projects || company.projects.length === 0" class="p-12 text-center">
                        <FolderKanban class="w-12 h-12 mx-auto text-gray-400 mb-4" />
                        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Nenhum projeto</h3>
                        <p class="text-gray-500 dark:text-gray-400 mt-1 mb-4">Esta empresa ainda não possui projetos</p>
                        <Link
                            :href="`/projects/create?company_id=${company.id}`"
                            class="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium"
                        >
                            <Plus class="w-4 h-4" />
                            Criar projeto
                        </Link>
                    </div>

                    <div v-else>
                        <Link
                            v-for="project in company.projects"
                            :key="project.id"
                            :href="`/projects/${project.id}`"
                            class="flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-neutral-700/50 transition-colors border-b dark:border-neutral-700 last:border-b-0"
                        >
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                                    <FolderKanban class="w-5 h-5 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-900 dark:text-gray-100">{{ project.name }}</h3>
                                    <p v-if="project.description" class="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                                        {{ project.description }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300">
                                    <Ticket class="w-3 h-3" />
                                    {{ project.tickets_count }} ticket(s)
                                </span>
                                <ChevronRight class="w-5 h-5 text-gray-400" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
