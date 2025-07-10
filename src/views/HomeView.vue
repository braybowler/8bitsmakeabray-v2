<script setup lang="ts">
import Link from '@/components/Link.vue'

const BKG_SOFTWARE_LINK = "https://bkgsoftware.com/";
const WEDGE_MATRIX_LINK = "https://apps.apple.com/ca/app/wedge-matrix/id6744891049";
const VEHIKL_LINK = "https://vehikl.com";

</script>

<template>
  <main class="xs:flex xs:flex-col xs:gap-2 sm:gap-4 sm:flex sm:flex-row">
    <section class="xs:w-full xs:h-1/2 sm:w-1/2 sm:h-full">
      <h2 class="xs:text-base xs:mb-1 sm:text-xl sm:mb-2 font-extrabold text-[#ff5a13]">Hi, I'm Brayden...</h2>

      <h3 class="xs:text-sm xs:mb-1 sm:text-lg sm:mb-2 font-bold text-neutral-400">
        I'm an enthusiastic full-stack developer with a fresh perspective on software development.
      </h3>
      <h3 class="xs:text-sm xs:mb-1 sm:text-lg sm:mb-2 font-bold text-neutral-400">
        I grew up watching the Internet evolve. Now, I'm lucky to help contribute to that evolution on a daily basis.
      </h3>

      <p>
        Founding member of <Link :href="BKG_SOFTWARE_LINK">BKG Software</Link>.
      </p>
      <p>
        Creator of <Link :href="WEDGE_MATRIX_LINK">Wedge Matrix</Link>.
      </p>
      <p>
        Full-time developer at <Link :href="VEHIKL_LINK">Vehikl</Link>.
      </p>
    </section>
<!--    <section class="xs:w-full xs:h-1/2 sm:w-1/2 sm:h-full flex items-baseline">-->
<!--      <ElapsedClock />-->
<!--    </section>-->
  </main>
</template>
