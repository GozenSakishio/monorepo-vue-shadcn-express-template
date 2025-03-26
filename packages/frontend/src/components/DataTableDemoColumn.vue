<!-- src/components/your-folder/DataTableDemoColumn.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MoreHorizontal } from 'lucide-vue-next'

defineProps<{
  payment: {
    id: string
    email: string
    amount: number
    status: string
  }
  onExpand?: () => void
}>()

const copyPaymentId = (id: string) => {
  navigator.clipboard.writeText(id)
}

</script>

<template>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" class="h-8 w-8 p-0">
          <span class="sr-only">Open menu</span>
          <MoreHorizontal class="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem @click="copyPaymentId(payment.id)">
          Copy payment ID
        </DropdownMenuItem>
        <DropdownMenuItem @click="onExpand?.()">
          Toggle details
        </DropdownMenuItem>
        <DropdownMenuItem @click="console.log('Delete', payment.id)">
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
</template>
