<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopNavBar from '@/components/TopNavBar.vue'
</script>

<template>
  <TopNavBar />

  <RouterView class="h-dvh w-full py-4 px-6"/>
</template>
