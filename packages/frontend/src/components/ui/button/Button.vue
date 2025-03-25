<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { type ButtonVariants, buttonVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  disableInvert?: boolean // Renamed to be clearer and avoid confusion with HTML attributes
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  disableInvert: false, // Default is to have inversion enabled
})

const getButtonClass = () => {
  const baseClasses = buttonVariants({ variant: props.variant, size: props.size })
  
  if (!props.disableInvert) {
    // Apply hover inversion classes based on variant
    const variant = props.variant || 'default'
    
    const hoverClasses = {
      'default': 'hover:bg-primary-foreground hover:text-primary',
      'destructive': 'hover:bg-destructive-foreground hover:text-destructive',
      'outline': 'hover:bg-background hover:text-foreground',
      'secondary': 'hover:bg-secondary-foreground hover:text-secondary',
      'ghost': 'hover:bg-foreground hover:text-background',
      'link': ''
    }[variant] || ''
    
    return cn(baseClasses, hoverClasses, props.class)
  }
  
  return cn(baseClasses, props.class)
}
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="getButtonClass()"
  >
    <slot />
  </Primitive>
</template>