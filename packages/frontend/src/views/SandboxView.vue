<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <div class="grid place-content-center h-full bg-background">
    <div class="flex flex-col gap-4">
      <Card class="w-[350px]">
        <CardHeader>
          <CardTitle>测试组件A</CardTitle>
          <CardDescription>这是一个 Shadcn/vue + Tailwind 的 Card</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">Shadcn + TailwindCSS 运行正常 🎉</p>
        </CardContent>
      </Card>
      <Card class="w-[350px]">
        <CardHeader>
          <CardTitle>测试组件B</CardTitle>
          <CardDescription>这是一个 Shadcn/vue + Tailwind 的 Card</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">Shadcn + TailwindCSS 运行正常 🎉</p>
        </CardContent>
      </Card>
      <Card class="w-[350px]">
        <CardHeader>
          <CardTitle>测试组件C</CardTitle>
          <CardDescription>这是一个 Shadcn/vue + Tailwind 的 Card</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">Shadcn + TailwindCSS 运行正常 🎉</p>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
