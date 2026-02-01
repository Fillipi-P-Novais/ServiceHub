<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { Link } from '@inertiajs/vue3'
import { FolderKanban, Plus, ChevronRight, Building2, Ticket } from 'lucide-vue-next'

const props = defineProps({
    projects: Object,
})
</script>

<template>
    <AppLayout>
        <div class="p-6">
            <div class="max-w-6xl mx-auto">
                <div class="flex items-center justify-between mb-8">
                    <div>
                        <h1 class="text-2xl font-bold">Projetos</h1>
                        <p class="text-gray-500 dark:text-gray-400 mt-1">
                            Gerencie os projetos e suas ordens de serviço
                        </p>
                    </div>
                    <Link
                        href="/projects/create"
                        class="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                        <Plus class="w-5 h-5" />
                        Novo Projeto
                    </Link>
                </div>

                <div class="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 overflow-hidden">
                    <div v-if="projects.data.length === 0" class="p-12 text-center">
                        <FolderKanban class="w-12 h-12 mx-auto text-gray-400 mb-4" />
                        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Nenhum projeto cadastrado</h3>
                        <p class="text-gray-500 dark:text-gray-400 mt-1 mb-4">Comece criando seu primeiro projeto</p>
                        <Link
                            href="/projects/create"
                            class="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium"
                        >
                            <Plus class="w-4 h-4" />
                            Criar projeto
                        </Link>
                    </div>

                    <div v-else>
                        <Link
                            v-for="project in projects.data"
                            :key="project.id"
                            :href="`/projects/${project.id}`"
                            class="flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-neutral-700/50 transition-colors border-b dark:border-neutral-700 last:border-b-0"
                        >
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center">
                                    <FolderKanban class="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-900 dark:text-gray-100">{{ project.name }}</h3>
                                    <div class="flex items-center gap-2 mt-1">
                                        <Building2 class="w-3.5 h-3.5 text-gray-400" />
                                        <span class="text-sm text-gray-500 dark:text-gray-400">{{ project.company?.nome_fantasia }}</span>
                                    </div>
                                    <p v-if="project.description" class="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">
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

                <div v-if="projects.links && projects.data.length > 0" class="mt-6 flex justify-center gap-1">
                    <Link
                        v-for="(link, i) in projects.links"
                        :key="i"
                        :href="link.url ?? '#'"
                        class="px-4 py-2 text-sm rounded-lg border dark:border-neutral-600 transition-colors"
                        :class="{
                            'bg-blue-600 text-white border-blue-600': link.active,
                            'hover:bg-gray-100 dark:hover:bg-neutral-700': !link.active && link.url,
                            'opacity-50 cursor-not-allowed': !link.url
                        }"
                        v-html="link.label"
                    />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
