<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Menu } from 'lucide-vue-next'
import { ref } from 'vue'

const showNavBar = ref(false)
const toggleNavBarVisiblity = () => {
  showNavBar.value = !showNavBar.value
}
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

    <!-- TODO: Font, spacing, colouring. Hide when on smaller resolutions -->
    <section id="rotating-titles" class="rotating-titles">
      <span class="rotating-title">Athletic Therapist</span>
      <span class="rotating-title">Registered Massage Therapist</span>
      <span class="rotating-title">Movement Specialist</span>
    </section>

    <section id="navigation">
      <nav class="xs:hidden sm:flex sm:items-center sm:space-x-4 text-black h-full">
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

      <section id="navigation-menu" class="h-full">
        <button
          class="sm:hidden xs:flex xs:items-center text-black h-full"
          @click="toggleNavBarVisiblity()"
        >
          <Menu class="w-6 h-6" />
        </button>
        <div>
          <nav v-if="showNavBar">
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
        </div>
      </section>
    </section>
  </header>
</template>

<!--TODO: Font, Spacing, colouring.-->
<style>
.rotating-titles {
  display: flex;
  align-items: center;
  justify-items: center;
}

.rotating-title {
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-family: 'Raleway', sans-serif;
  color: #ff5a13;
  animation: rotateText 15s linear infinite;
  opacity: 0;
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
