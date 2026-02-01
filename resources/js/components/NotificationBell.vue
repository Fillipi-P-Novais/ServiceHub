<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Bell } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { router } from '@inertiajs/vue3'

interface Notification {
    id: string
    type: string
    data: {
        ticket_id: number
        title: string
        message: string
        url: string
    }
    created_at: string
}

const notifications = ref<Notification[]>([])
const unreadCount = ref(0)
const isLoading = ref(false)
let pollInterval: ReturnType<typeof setInterval> | null = null

const fetchNotifications = async () => {
    try {
        const response = await fetch('/notifications', {
            headers: {
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: 'same-origin',
        })

        if (response.ok) {
            const data = await response.json()
            notifications.value = data.notifications
            unreadCount.value = data.unread_count
        }
    } catch (error) {
        console.error('Erro ao buscar notificações:', error)
    }
}

const markAsRead = async (notification: Notification) => {
    try {
        await fetch(`/notifications/${notification.id}/read`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
            },
            credentials: 'same-origin',
        })

        // Navega para o ticket
        if (notification.data.url) {
            router.visit(notification.data.url)
        }

        // Atualiza a lista
        await fetchNotifications()
    } catch (error) {
        console.error('Erro ao marcar como lida:', error)
    }
}

const markAllAsRead = async () => {
    try {
        await fetch('/notifications/read-all', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
            },
            credentials: 'same-origin',
        })

        await fetchNotifications()
    } catch (error) {
        console.error('Erro ao marcar todas como lidas:', error)
    }
}

onMounted(() => {
    // Busca inicial
    fetchNotifications()

    // Polling a cada 10 segundos
    pollInterval = setInterval(fetchNotifications, 10000)
})

onUnmounted(() => {
    if (pollInterval) {
        clearInterval(pollInterval)
    }
})
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="ghost" size="icon" class="relative h-9 w-9">
                <Bell class="h-5 w-5" />
                <span
                    v-if="unreadCount > 0"
                    class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white"
                >
                    {{ unreadCount > 9 ? '9+' : unreadCount }}
                </span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="w-80">
            <div class="flex items-center justify-between px-3 py-2">
                <span class="font-semibold">Notificações</span>
                <button
                    v-if="unreadCount > 0"
                    @click="markAllAsRead"
                    class="text-xs text-blue-600 hover:underline"
                >
                    Marcar todas como lidas
                </button>
            </div>
            <DropdownMenuSeparator />

            <div v-if="notifications.length === 0" class="px-3 py-6 text-center text-sm text-gray-500">
                Nenhuma notificação
            </div>

            <div v-else class="max-h-80 overflow-y-auto">
                <DropdownMenuItem
                    v-for="notification in notifications"
                    :key="notification.id"
                    @click="markAsRead(notification)"
                    class="cursor-pointer flex-col items-start gap-1 px-3 py-3"
                >
                    <div class="font-medium text-sm">
                        {{ notification.data.title }}
                    </div>
                    <div class="text-xs text-gray-500">
                        {{ notification.data.message }}
                    </div>
                    <div class="text-xs text-gray-400 mt-1">
                        {{ notification.created_at }}
                    </div>
                </DropdownMenuItem>
            </div>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
