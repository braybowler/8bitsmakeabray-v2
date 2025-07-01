<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Menu } from 'lucide-vue-next'
import { ref } from 'vue'
import { useMediaQuery } from '@vueuse/core'

const isMobile = useMediaQuery('(max-width: 767px)')
const showDropDownMenu = ref(false)
const toggleDropDownVisiblity = () => {
  showDropDownMenu.value = !showDropDownMenu.value
}
</script>

<template>
  <div
    v-if="showDropDownMenu"
    class="fixed inset-0 bg-black opacity-30 z-5"
    @click="toggleDropDownVisiblity"
  ></div>
  <header
    class="flex flex-row justify-between bg-white xs:py-2 xs:px-4 sm:py-3 sm:px-6 w-full shadow-sm"
  >
    <section id="title" class="flex flex-row items-center space-x-2">
      <img
        src="../assets/headshot.ico"
        alt="Pixelated headshot"
        class="rounded xs:h-8 xs:w-8 sm:h-12 sm:w-12 object-cover"
      />
      <h1 class="xs:text-lg sm:text-2xl font-bold text-black">8BitsMakeABray</h1>
    </section>

    <div v-if="!isMobile" id="rotating-titles" class="rotating-titles">
      <span class="rotating-title">Entrepreneur</span>
      <span class="rotating-title">Founder</span>
      <span class="rotating-title">Developer</span>
    </div>

    <section id="navigation">
      <nav id="navigation-links" v-if="!isMobile" class="xs:hidden sm:flex sm:items-center sm:space-x-4 text-black h-full">
        <RouterLink id="home-link" to="/" class="hover:underline" activeClass="font-bold"
          >Home</RouterLink
        >
        <RouterLink id="about-link" to="/about" class="hover:underline" activeClass="font-bold"
          >About</RouterLink
        >
        <RouterLink
          id="projects-link"
          to="/projects"
          class="hover:underline"
          activeClass="font-bold"
          >Projects</RouterLink
        >
      </nav>

      <section v-if="isMobile" id="navigation-menu" class="h-full">
        <button
          class="sm:hidden xs:flex xs:items-center text-black h-full"
          @click="toggleDropDownVisiblity()"
        >
          <Menu class="w-6 h-6" />
        </button>
        <nav
          v-if="showDropDownMenu"
          class="fixed xs:top-15 xs:right-4 bg-gray-100 flex flex-col text-black border border-black rounded-lg shadow-lg p-2 z-10"
        >
          <RouterLink
            id="home-link"
            to="/"
            class="hover:underline"
            activeClass="font-bold"
            @click="toggleDropDownVisiblity"
            >Home</RouterLink
          >
          <RouterLink
            id="about-link"
            to="/about"
            class="hover:underline"
            activeClass="font-bold"
            @click="toggleDropDownVisiblity"
            >About</RouterLink
          >
          <RouterLink
            id="projects-link"
            to="/projects"
            class="hover:underline"
            activeClass="font-bold"
            @click="toggleDropDownVisiblity"
            >Projects</RouterLink
          >
        </nav>
      </section>
    </section>
  </header>
</template>

<style>
.rotating-titles {
  display: grid;
  align-items: center;
  justify-items: center;
}

.rotating-title {
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  font-family: 'Raleway', sans-serif;
  color: #ff5a13;
  animation: rotateText 15s linear infinite;
  opacity: 0;
  text-wrap: nowrap;
}

.rotating-title:nth-child(1) {
  animation-delay: 0s;
}

.rotating-title:nth-child(2) {
  animation-delay: 5s;
}

.rotating-title:nth-child(3) {
  animation-delay: 10s;
}

@keyframes rotateText {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  5%,
  25% {
    opacity: 1;
    transform: translateY(0);
  }
  30% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
}
</style>
