<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { Link } from '@inertiajs/vue3'
import { Building2, Plus, ChevronRight } from 'lucide-vue-next'

const props = defineProps({
    companies: Object,
})
</script>

<template>
    <AppLayout>
        <div class="p-6">
            <div class="max-w-6xl mx-auto">
                <div class="flex items-center justify-between mb-8">
                    <div>
                        <h1 class="text-2xl font-bold">Empresas</h1>
                        <p class="text-gray-500 dark:text-gray-400 mt-1">
                            Gerencie as empresas cadastradas no sistema
                        </p>
                    </div>
                    <Link
                        href="/companies/create"
                        class="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                        <Plus class="w-5 h-5" />
                        Nova Empresa
                    </Link>
                </div>

                <div class="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 overflow-hidden">
                    <div v-if="companies.data.length === 0" class="p-12 text-center">
                        <Building2 class="w-12 h-12 mx-auto text-gray-400 mb-4" />
                        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Nenhuma empresa cadastrada</h3>
                        <p class="text-gray-500 dark:text-gray-400 mt-1 mb-4">Comece cadastrando sua primeira empresa</p>
                        <Link
                            href="/companies/create"
                            class="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium"
                        >
                            <Plus class="w-4 h-4" />
                            Criar empresa
                        </Link>
                    </div>

                    <div v-else>
                        <Link
                            v-for="company in companies.data"
                            :key="company.id"
                            :href="`/companies/${company.id}`"
                            class="flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-neutral-700/50 transition-colors border-b dark:border-neutral-700 last:border-b-0"
                        >
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center">
                                    <Building2 class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-900 dark:text-gray-100">{{ company.nome_fantasia }}</h3>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        CNPJ: {{ company.cnpj }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="text-right">
                                    <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300">
                                        {{ company.projects_count }} projeto(s)
                                    </span>
                                </div>
                                <ChevronRight class="w-5 h-5 text-gray-400" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div v-if="companies.links && companies.data.length > 0" class="mt-6 flex justify-center gap-1">
                    <Link
                        v-for="(link, i) in companies.links"
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
