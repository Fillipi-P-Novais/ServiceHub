<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { useForm, Link } from '@inertiajs/vue3'
import { ArrowLeft, Building2 } from 'lucide-vue-next'

const form = useForm({
    nome_fantasia: '',
    cnpj: '',
})

const submit = () => {
    form.post('/companies')
}

const maskCnpj = (e) => {
    let value = e.target.value.replace(/\D/g, '');

    value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
    value = value.replace(/(\d{4})(\d)/, '$1-$2');

    form.cnpj = value;
};

</script>


<template>
    <AppLayout>
        <div class="p-6">
            <div class="max-w-2xl mx-auto">
                <div class="mb-6">
                    <Link href="/companies" class="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                        <ArrowLeft class="w-4 h-4" />
                        Voltar para empresas
                    </Link>
                </div>

                <div class="flex items-center gap-4 mb-8">
                    <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center">
                        <Building2 class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold">Nova Empresa</h1>
                        <p class="text-gray-500 dark:text-gray-400">Cadastre uma nova empresa no sistema</p>
                    </div>
                </div>

                <form @submit.prevent="submit" class="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 p-6">
                    <div class="space-y-6">
                        <div>
                            <label class="block text-sm font-medium mb-2">Nome da Empresa</label>
                            <input
                                v-model="form.nome_fantasia"
                                type="text"
                                class="w-full px-4 py-2.5 border dark:border-neutral-600 dark:bg-neutral-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                placeholder="Ex: Empresa ABC Ltda"
                            />
                            <p v-if="form.errors.nome_fantasia" class="text-red-500 text-sm mt-1">{{ form.errors.nome_fantasia }}</p>
                        </div>

                        <div>
                            <label class="block text-sm font-medium mb-2">CNPJ</label>

                            <input
                                v-model="form.cnpj"
                                type="text"
                                maxlength="18"
                                @input="maskCnpj"
                                class="w-full px-4 py-2.5 border dark:border-neutral-600 dark:bg-neutral-900 rounded-lg
                                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                placeholder="00.000.000/0000-00"
                            />

                            <p v-if="form.errors.cnpj" class="text-red-500 text-sm mt-1">
                                {{ form.errors.cnpj }}
                            </p>
                        </div>

                    </div>

                    <div class="flex items-center gap-3 mt-8 pt-6 border-t dark:border-neutral-700">
                        <button
                            type="submit"
                            :disabled="form.processing"
                            class="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
                        >
                            {{ form.processing ? 'Salvando...' : 'Criar Empresa' }}
                        </button>
                        <Link
                            href="/companies"
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
