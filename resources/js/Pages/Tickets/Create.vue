<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { useForm, Link } from '@inertiajs/vue3'
import { ArrowLeft, Ticket, Upload } from 'lucide-vue-next'

const props = defineProps({
    project: Object,
})

const form = useForm({
    title: '',
    description: '',
    attachment: null,
})

const submit = () => {
    form.post(`/projects/${props.project.id}/tickets`, {
        forceFormData: true,
    })
}
</script>

<template>
    <AppLayout>
        <div class="p-6">
            <div class="max-w-2xl mx-auto">
                <div class="mb-6">
                    <Link :href="`/projects/${project.id}`" class="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                        <ArrowLeft class="w-4 h-4" />
                        Voltar para {{ project.name }}
                    </Link>
                </div>

                <div class="flex items-center gap-4 mb-8">
                    <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center">
                        <Ticket class="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold">Novo Ticket</h1>
                        <p class="text-gray-500 dark:text-gray-400">Abra uma ordem de serviço para {{ project.name }}</p>
                    </div>
                </div>

                <form @submit.prevent="submit" class="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 p-6">
                    <div class="space-y-6">
                        <div>
                            <label class="block text-sm font-medium mb-2">Título</label>
                            <input
                                v-model="form.title"
                                type="text"
                                class="w-full px-4 py-2.5 border dark:border-neutral-600 dark:bg-neutral-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                placeholder="Ex: Erro ao processar pagamento"
                            />
                            <p v-if="form.errors.title" class="text-red-500 text-sm mt-1">{{ form.errors.title }}</p>
                        </div>

                        <div>
                            <label class="block text-sm font-medium mb-2">Descrição</label>
                            <textarea
                                v-model="form.description"
                                rows="5"
                                class="w-full px-4 py-2.5 border dark:border-neutral-600 dark:bg-neutral-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                                placeholder="Descreva o problema em detalhes..."
                            ></textarea>
                            <p v-if="form.errors.description" class="text-red-500 text-sm mt-1">{{ form.errors.description }}</p>
                        </div>

                        <div>
                            <label class="block text-sm font-medium mb-2">Anexo (opcional)</label>
                            <div class="border-2 border-dashed dark:border-neutral-600 rounded-lg p-6 text-center">
                                <Upload class="w-8 h-8 mx-auto text-gray-400 mb-2" />
                                <input
                                    type="file"
                                    @change="form.attachment = $event.target.files[0]"
                                    accept=".json,.txt"
                                    class="w-full text-sm text-gray-500"
                                />
                                <p class="text-xs text-gray-500 mt-2">
                                    Aceita arquivos JSON ou TXT (máx. 2MB)
                                </p>
                            </div>
                            <p v-if="form.errors.attachment" class="text-red-500 text-sm mt-1">{{ form.errors.attachment }}</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-3 mt-8 pt-6 border-t dark:border-neutral-700">
                        <button
                            type="submit"
                            :disabled="form.processing"
                            class="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
                        >
                            {{ form.processing ? 'Criando...' : 'Criar Ticket' }}
                        </button>
                        <Link
                            :href="`/projects/${project.id}`"
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
