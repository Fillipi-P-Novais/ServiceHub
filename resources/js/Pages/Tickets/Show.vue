<script setup>
import AuthLayout from '@/Layouts/AuthLayout.vue'

defineProps({
  project: Object,
  ticket: Object,
})
</script>

<template>
  <AuthLayout>
    <div class="max-w-5xl mx-auto p-6">
      <h1 class="text-2xl font-bold mb-4">
        Ticket #{{ ticket.id }} — {{ ticket.title }}
      </h1>

      <div class="bg-white border rounded p-4">
        <div class="text-gray-700"><b>Status:</b> {{ ticket.status }}</div>
        <div class="text-gray-700"><b>Criado por:</b> {{ ticket.user?.name }}</div>
        <div class="text-gray-700" v-if="ticket.detail?.ai_summary">
          <b>Resumo:</b> {{ ticket.detail.ai_summary }}
        </div>
      </div>
    </div>
  </AuthLayout>
</template>
