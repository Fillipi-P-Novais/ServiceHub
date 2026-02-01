<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { Link } from '@inertiajs/vue3'
import { FolderKanban, Ticket, Plus, ChevronRight, Pencil, ArrowLeft, Building2, Clock, User, CheckCircle } from 'lucide-vue-next'

const props = defineProps({
    project: Object,
    tickets: Object,
})

const statusConfig = {
    open: {
        label: 'Aberto',
        class: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
    },
    in_progress: {
        label: 'Em Progresso',
        class: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300',
    },
    resolved: {
        label: 'Resolvido',
        class: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
    },
    closed: {
        label: 'Fechado',
        class: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    },
}
</script>

<template>
    <AppLayout>
        <div class="p-6">
            <div class="max-w-6xl mx-auto">
                <div class="mb-6">
                    <Link href="/projects" class="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                        <ArrowLeft class="w-4 h-4" />
                        Voltar para projetos
                    </Link>
                </div>

                <div class="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 p-6 mb-6">
                    <div class="flex items-start justify-between">
                        <div class="flex items-center gap-4">
                            <div class="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center">
                                <FolderKanban class="w-8 h-8 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100">{{ project.name }}</h1>
                                <div class="flex items-center gap-2 mt-1">
                                    <Building2 class="w-4 h-4 text-gray-400" />
                                    <span class="text-gray-500 dark:text-gray-400">{{ project.company?.name }}</span>
                                </div>
                                <p v-if="project.description" class="text-gray-500 dark:text-gray-400 mt-2">
                                    {{ project.description }}
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <Link
                                :href="`/projects/${project.id}/edit`"
                                class="inline-flex items-center gap-2 px-4 py-2 border dark:border-neutral-600 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
                            >
                                <Pencil class="w-4 h-4" />
                                Editar
                            </Link>
                            <Link
                                :href="`/projects/${project.id}/tickets/create`"
                                class="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                            >
                                <Plus class="w-4 h-4" />
                                Novo Ticket
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 overflow-hidden">
                    <div class="px-6 py-4 border-b dark:border-neutral-700">
                        <h2 class="text-lg font-semibold flex items-center gap-2">
                            <Ticket class="w-5 h-5 text-gray-500" />
                            Tickets
                            <span class="text-sm font-normal text-gray-500">({{ tickets.data?.length || 0 }})</span>
                        </h2>
                    </div>

                    <div v-if="tickets.data.length === 0" class="p-12 text-center">
                        <Ticket class="w-12 h-12 mx-auto text-gray-400 mb-4" />
                        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Nenhum ticket</h3>
                        <p class="text-gray-500 dark:text-gray-400 mt-1 mb-4">Este projeto ainda não possui tickets</p>
                        <Link
                            :href="`/projects/${project.id}/tickets/create`"
                            class="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium"
                        >
                            <Plus class="w-4 h-4" />
                            Criar ticket
                        </Link>
                    </div>

                    <div v-else>
                        <Link
                            v-for="ticket in tickets.data"
                            :key="ticket.id"
                            :href="`/projects/${project.id}/tickets/${ticket.id}`"
                            class="flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-neutral-700/50 transition-colors border-b dark:border-neutral-700 last:border-b-0"
                        >
                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mt-0.5">
                                    <Ticket class="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                    <div class="flex items-center gap-2">
                                        <h3 class="font-semibold text-gray-900 dark:text-gray-100">{{ ticket.title }}</h3>
                                        <span
                                            class="px-2 py-0.5 rounded text-xs font-medium"
                                            :class="statusConfig[ticket.status]?.class"
                                        >
                                            {{ statusConfig[ticket.status]?.label }}
                                        </span>
                                    </div>
                                    <div class="flex items-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span class="flex items-center gap-1">
                                            <User class="w-3.5 h-3.5" />
                                            {{ ticket.user?.name }}
                                        </span>
                                        <span v-if="ticket.detail?.processed_at" class="flex items-center gap-1 text-green-600 dark:text-green-400">
                                            <CheckCircle class="w-3.5 h-3.5" />
                                            Processado
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <ChevronRight class="w-5 h-5 text-gray-400" />
                        </Link>
                    </div>
                </div>

                <div v-if="tickets.links && tickets.data.length > 0" class="mt-6 flex justify-center gap-1">
                    <Link
                        v-for="(link, i) in tickets.links"
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
