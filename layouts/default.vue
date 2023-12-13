<template>
  <div class="overflow-hidden">
    <header-sec></header-sec>
    <slot></slot>
    <footer-sec></footer-sec>
  </div>
</template>

<script setup>
provide('api', 'http://localhost:8000')
</script>

<style lang="scss" scoped></style>
