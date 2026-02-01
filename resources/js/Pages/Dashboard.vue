<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import { Building2, FolderKanban, Plus } from 'lucide-vue-next';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex h-full flex-1 flex-col gap-6 p-6">
            <div>
                <h1 class="text-2xl font-bold">Bem-vindo ao ServiceHub</h1>
                <p class="text-gray-600 dark:text-gray-400 mt-1">
                    Sistema de gestão de ordens de serviço
                </p>
            </div>

            <div class="grid gap-4 md:grid-cols-3">
                <Link
                    href="/companies"
                    class="flex items-center gap-4 p-6 bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                >
                    <div class="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <Building2 class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                        <h2 class="font-semibold">Empresas</h2>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Gerenciar empresas</p>
                    </div>
                </Link>

                <Link
                    href="/projects"
                    class="flex items-center gap-4 p-6 bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 hover:border-green-500 dark:hover:border-green-500 transition-colors"
                >
                    <div class="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                        <FolderKanban class="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                        <h2 class="font-semibold">Projetos</h2>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Gerenciar projetos</p>
                    </div>
                </Link>

                <Link
                    href="/projects/create"
                    class="flex items-center gap-4 p-6 bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 hover:border-purple-500 dark:hover:border-purple-500 transition-colors"
                >
                    <div class="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                        <Plus class="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                        <h2 class="font-semibold">Novo Projeto</h2>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Criar um projeto</p>
                    </div>
                </Link>
            </div>

            <div class="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 p-6">
                <h2 class="text-lg font-semibold mb-4">Como usar o ServiceHub</h2>
                <ol class="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Cadastre uma <strong>Empresa</strong> (cliente)</li>
                    <li>Crie um <strong>Projeto</strong> vinculado à empresa</li>
                    <li>Abra <strong>Tickets</strong> para registrar ordens de serviço</li>
                    <li>Anexe arquivos JSON/TXT para processamento automático</li>
                    <li>Acompanhe as <strong>notificações</strong> no sino</li>
                </ol>
            </div>
        </div>
    </AppLayout>
</template>
