<script setup lang="ts">

interface Props {
  linkText?: string
}

const props = withDefaults(defineProps<Props>(), {
  linkText: '',
})

</script>

<template>
  <a
    :href="props.linkText"
    class="font-bold underline decoration-[#ff5a13]"
  >
    <slot></slot>
  </a>
</template>

<style>
</style>
