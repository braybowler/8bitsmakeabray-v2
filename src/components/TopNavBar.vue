<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header
    class="flex flex-row justify-between bg-white xs:py-2 xs:px-4 sm:py-6 sm:px-10 w-full shadow-sm"
  >
    <section id="title" class="flex flex-row items-center space-x-2">
      <img
        src="../assets/headshot.ico"
        alt="Pixelated headshot"
        class="rounded xs:h-8 xs:w-8 sm:h-12 sm:w-12 object-cover"
      />
      <h1 class="xs:text-lg sm:text-2xl font-bold text-black">8BitsMakeABray</h1>
    </section>
    <!-- TODO: For xs breakpoint, collapse into hamburger menu -->
    <nav class="flex flex-row items-center text-black space-x-4">
      <RouterLink id="home-link" to="/" class="hover:underline" activeClass="font-bold"
        >Home</RouterLink
      >
      <RouterLink id="about-link" to="/about" class="hover:underline" activeClass="font-bold"
        >About</RouterLink
      >
      <RouterLink id="projects-link" to="/projects" class="hover:underline" activeClass="font-bold"
        >Projects</RouterLink
      >
    </nav>
  </header>
</template>
