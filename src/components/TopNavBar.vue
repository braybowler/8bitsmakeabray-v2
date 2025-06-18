<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex flex-row justify-between bg-blue-950 p-4">
    <section id="title">
      <h1 class="text-white">8BitsMakeABray</h1>
    </section>
    <nav class="text-white space-x-4">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
    </nav>
  </header>
</template>
