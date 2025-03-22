<template>
  <div class="p-4">
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle>测试组件</CardTitle>
        <CardDescription>这是一个 Shadcn/vue + Tailwind 的 Card</CardDescription>
      </CardHeader>
      <CardContent>
        <p class="text-sm text-muted-foreground">Shadcn + TailwindCSS 运行正常 🎉</p>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>
