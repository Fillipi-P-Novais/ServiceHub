<script setup>
import { Link, usePage } from '@inertiajs/vue3'

defineProps({
  title: {
    type: String,
    default: '',
  },
})

const page = usePage()
const user = page.props.auth?.user

</script>

<template>
  <div class="min-h-screen" :style="{ backgroundColor:'#000000'}">
    <header class="border-b" :style="{ backgroundColor:'#000000'}">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div class="font-bold text-lg">
          ServiceHub
        </div>

        <div v-if="user" class="flex items-center gap-4">
          <span class="text-sm text-gray-700">{{ user.name }}</span>

          <Link
            method="post"
            as="button"
            href="/logout"
            class="text-sm text-red-600 hover:underline"
          >
            Logout
          </Link>
        </div>

        <div v-else class="text-sm text-gray-600">
          Não autenticado
        </div>
      </div>
    </header>

    <main class="py-8">
      <div class="max-w-7xl mx-auto px-6">
        <h1 v-if="title" class="text-2xl font-bold mb-6">{{ title }}</h1>
        <slot />
      </div>
    </main>
  </div>
</template>
