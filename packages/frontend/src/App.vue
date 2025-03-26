<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Button } from './components/ui/button';
import { ScrollArea } from './components/ui/scroll-area'
</script>

<template>
  <div class="h-screen flex flex-col">
    <header class="grid bg-accent-foreground w-full place-content-center h-16">
      <nav class="flex gap-3 items-center">
        <RouterLink to="/wk"><Button>Work</Button></RouterLink>
        <RouterLink to="/db"><Button>Data</Button></RouterLink>
        <RouterLink to="/db"><Button>Profile</Button></RouterLink>
        <RouterLink to="/sb"><Button>Sandbox</Button></RouterLink>
      </nav>
    </header>

    <main class="flex-1 bg-background overflow-auto scroll-smooth overscroll-none">
      <div class="flex items-center justify-center min-h-full">
        <div class="min-w-[720px] max-w-[1080px]">
          <RouterView />
        </div>
      </div>
    </main>
    <footer class="h-10 text-accent bg-accent-foreground grid place-content-center">
      <p>
        Monorepo Template 🙀
      </p>
    </footer>
  </div>
</template>

<style scoped></style>
