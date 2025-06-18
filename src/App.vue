<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopNavBar from '@/components/TopNavBar.vue'
</script>

<template>
  <TopNavBar />

  <RouterView class="bg-slate-300 h-dvh w-dvw" />
</template>
