<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex flex-row justify-between bg-white py-4 px-6 w-full shadow-sm">
    <section id="title" class="flex flex-row items-center space-x-2">
      <img src="../assets/headshot.ico" alt="Pixelated headshot" class="rounded h-12 w-12 object-cover">
      <h1 class="text-2xl font-bold text-black">8BitsMakeABray</h1>
    </section>
    <nav class="flex flex-row items-center text-black space-x-6">
      <RouterLink id="home-link" to="/" class="hover:underline hover:decoration-orange-500" activeClass="underline">Home</RouterLink>
      <RouterLink id="about-link" to="/about" activeClass="underline">About</RouterLink>
      <RouterLink id="projects-link" to="/projects" activeClass="underline">Projects</RouterLink>
    </nav>
  </header>
</template>
