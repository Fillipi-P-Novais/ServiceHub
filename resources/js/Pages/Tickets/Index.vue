<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { Link } from '@inertiajs/vue3'

const props = defineProps({
    project: Object,
    tickets: Object,
})
</script>

<template>
    <AppLayout>
    <div class="max-w-5xl mx-auto p-6">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-bold">
          Tickets — {{ project.name }}
        </h1>

        <Link
          class="bg-blue-600 text-white px-4 py-2 rounded"
          :href="`/projects/${project.id}/tickets/create`"
        >
          Novo Ticket
        </Link>
      </div>

      <div class="bg-white rounded border">
        <div v-if="tickets.data.length === 0" class="p-6 text-gray-600">
          Nenhum ticket ainda.
        </div>

        <div v-else class="divide-y">
          <div v-for="t in tickets.data" :key="t.id" class="p-4 flex items-start justify-between">
            <div>
              <div class="font-semibold">{{ t.title }}</div>
              <div class="text-sm text-gray-600">
                Criado por: {{ t.user?.name }} • Status: {{ t.status }}
              </div>
              <div class="text-sm text-gray-500" v-if="t.detail?.processed_at">
                Processado em: {{ t.detail.processed_at }}
              </div>
            </div>

            <Link
              class="text-blue-600"
              :href="`/projects/${project.id}/tickets/${t.id}`"
            >
              Ver
            </Link>
          </div>
        </div>
      </div>

      <div class="mt-6 flex gap-2 flex-wrap">
        <Link
          v-for="(link, i) in tickets.links"
          :key="i"
          :href="link.url ?? '#'"
          class="px-3 py-1 border rounded"
          :class="{ 'bg-gray-200': link.active, 'opacity-50 pointer-events-none': !link.url }"
          v-html="link.label"
        />
      </div>
    </div>
    </AppLayout>
</template>
