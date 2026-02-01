<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { Link } from '@inertiajs/vue3'
import { Ticket, ArrowLeft, Pencil, User, FileText, Clock, CheckCircle, Code } from 'lucide-vue-next'

const props = defineProps({
    project: Object,
    ticket: Object,
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
            <div class="max-w-4xl mx-auto">
                <div class="mb-6">
                    <Link :href="`/projects/${project.id}`" class="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                        <ArrowLeft class="w-4 h-4" />
                        Voltar para {{ project.name }}
                    </Link>
                </div>

                <div class="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 p-6 mb-6">
                    <div class="flex items-start justify-between">
                        <div class="flex items-start gap-4">
                            <div class="w-14 h-14 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center">
                                <Ticket class="w-7 h-7 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <div class="flex items-center gap-3">
                                    <h1 class="text-xl font-bold text-gray-900 dark:text-gray-100">{{ ticket.title }}</h1>
                                    <span
                                        class="px-2.5 py-1 rounded-full text-xs font-medium"
                                        :class="statusConfig[ticket.status]?.class"
                                    >
                                        {{ statusConfig[ticket.status]?.label }}
                                    </span>
                                </div>
                                <div class="flex items-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span class="flex items-center gap-1.5">
                                        <span class="text-gray-400">#{{ ticket.id }}</span>
                                    </span>
                                    <span class="flex items-center gap-1.5">
                                        <User class="w-4 h-4" />
                                        {{ ticket.user?.name }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Link
                            :href="`/projects/${project.id}/tickets/${ticket.id}/edit`"
                            class="inline-flex items-center gap-2 px-4 py-2 border dark:border-neutral-600 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
                        >
                            <Pencil class="w-4 h-4" />
                            Editar
                        </Link>
                    </div>
                </div>

                <div class="space-y-6">
                    <div class="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 overflow-hidden">
                        <div class="px-6 py-4 border-b dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800">
                            <h2 class="font-semibold flex items-center gap-2">
                                <FileText class="w-4 h-4 text-gray-500" />
                                Descrição
                            </h2>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">{{ ticket.description }}</p>
                        </div>
                    </div>

                    <div v-if="ticket.attachment_path" class="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 overflow-hidden">
                        <div class="px-6 py-4 border-b dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800">
                            <h2 class="font-semibold flex items-center gap-2">
                                <FileText class="w-4 h-4 text-gray-500" />
                                Anexo
                            </h2>
                        </div>
                        <div class="p-6">
                            <p class="text-sm text-gray-600 dark:text-gray-400 font-mono break-all">
                                {{ ticket.attachment_path }}
                            </p>
                        </div>
                    </div>

                    <div v-if="ticket.detail" class="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 overflow-hidden">
                        <div class="px-6 py-4 border-b dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800">
                            <h2 class="font-semibold flex items-center gap-2">
                                <Code class="w-4 h-4 text-gray-500" />
                                Detalhes Técnicos
                            </h2>
                        </div>
                        <div class="p-6">
                            <div v-if="ticket.detail.processed_at" class="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                                <div class="flex items-center gap-2 text-green-700 dark:text-green-400">
                                    <CheckCircle class="w-5 h-5" />
                                    <span class="font-medium">Anexo processado com sucesso</span>
                                </div>
                                <p class="text-sm text-green-600 dark:text-green-500 mt-1 flex items-center gap-1">
                                    <Clock class="w-3.5 h-3.5" />
                                    {{ ticket.detail.processed_at }}
                                </p>
                            </div>

                            <div v-if="ticket.detail.technical_data" class="overflow-hidden">
                                <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Dados Extraídos:</h3>
                                <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto max-w-full whitespace-pre-wrap break-words font-mono">{{ JSON.stringify(ticket.detail.technical_data, null, 2) }}</pre>
                            </div>

                            <div v-if="ticket.detail.resolution_notes" class="mt-6 pt-6 border-t dark:border-neutral-700">
                                <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Notas de Resolução:</h3>
                                <p class="text-gray-700 dark:text-gray-300">{{ ticket.detail.resolution_notes }}</p>
                            </div>

                            <div v-if="!ticket.detail.processed_at && !ticket.detail.technical_data && !ticket.detail.resolution_notes" class="text-center py-8">
                                <Code class="w-10 h-10 mx-auto text-gray-400 mb-3" />
                                <p class="text-gray-500 dark:text-gray-400">Nenhum detalhe técnico disponível</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
