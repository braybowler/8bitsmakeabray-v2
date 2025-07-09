<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const started = new Date('2023-05-01');

const diff = ref({
  years: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

const diffStringArray = computed(() => {
return Object.fromEntries(
  Object.entries(diff.value).map(([key, val]) => [
    key,
    String(Math.abs(val)).split('')
  ])
)
});

function updateDiff() {
  const now  = new Date();

  let years = now.getFullYear() - started.getFullYear();
  const thisAnniversary = new Date(started);
  thisAnniversary.setFullYear(started.getFullYear() + years);
  if (now < thisAnniversary) {
    years--;
    thisAnniversary.setFullYear(started.getFullYear() + years);
  }

  let remaining = Math.floor((now.getTime() - thisAnniversary.getTime()) / 1000);

  const days = Math.floor(remaining / 86400);
  remaining -= days * 86400;
  const hours = Math.floor(remaining / 3600);
  remaining -= hours * 3600;
  const minutes = Math.floor(remaining / 60);
  remaining -= minutes * 60;
  const seconds = remaining;

  diff.value = { years, days, hours, minutes, seconds}
}

let timer: number
onMounted(() => {
  updateDiff();
  timer = window.setInterval(updateDiff, 1000);
})
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="flex flex-row gap-4">
    <div class="flex flex-col justify-center items-center">
      <div class="flex flex-row gap-1">
        <span
          v-for="character in diffStringArray.years"
          class="flex h-12 w-8 text-2xl bg-[#ff5a13] text-white rounded-md justify-center items-center shadow-md"
        >
          {{character}}
        </span>
      </div>
      <p>Years</p>
    </div>

    <div class="flex flex-col justify-center items-center">
      <div class="flex flex-row gap-1">
        <span
          v-for="character in diffStringArray.days"
          class="flex h-12 w-8 text-2xl bg-[#ff5a13] text-white rounded-md justify-center items-center shadow-md"
        >
          {{character}}
        </span>
      </div>
      <p>Days</p>
    </div>

    <div class="flex flex-col justify-center items-center">
      <div class="flex flex-row gap-1">
        <span
          v-for="character in diffStringArray.hours"
          class="flex h-12 w-8 text-2xl bg-[#ff5a13] text-white rounded-md justify-center items-center shadow-md"
        >
          {{character}}
        </span>
      </div>
      <p>Hours</p>
    </div>

    <div class="flex flex-col justify-center items-center">
      <div class="flex flex-row gap-1">
        <span
          v-for="character in diffStringArray.minutes"
          class="flex h-12 w-8 text-2xl bg-[#ff5a13] text-white rounded-md justify-center items-center shadow-md"
        >
          {{character}}
        </span>
      </div>
      <p>Minutes</p>
    </div>

    <div class="flex flex-col justify-center items-center">
      <div class="flex flex-row gap-1">
        <span
          v-for="character in diffStringArray.seconds"
          class="flex h-12 w-8 text-2xl bg-[#ff5a13] text-white rounded-md justify-center items-center shadow-md"
        >
          {{character}}
        </span>
      </div>
      <p>Seconds</p>
    </div>
  </div>
</template>
