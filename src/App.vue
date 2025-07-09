<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopNavBar from '@/components/TopNavBar.vue'
</script>

<template>
  <TopNavBar />

  <RouterView class="h-dvh w-full xs:py-2 xs:px-4 sm:py-4 sm:px-8" />
</template>
