<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex flex-row justify-between bg-blue-950 p-4 w-full">
    <section id="title">
      <h1 class="text-2xl font-bold text-white">8BitsMakeABray</h1>
    </section>
    <nav class="text-white space-x-4">
      <RouterLink id="home-link" to="/" activeClass="underline">Home</RouterLink>
      <RouterLink id="about-link" to="/about" activeClass="underline">About</RouterLink>
      <RouterLink id="projects-link" to="/projects" activeClass="underline">Projects</RouterLink>
    </nav>
  </header>
</template>
