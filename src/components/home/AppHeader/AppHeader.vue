<script setup>
import HeaderNav from './HeaderNav.vue'
import HeaderOverlays from './HeaderOverlays.vue'
</script>

<template>
  <div class="header">
    <HeaderNav />
    <div class="logo"></div>
    <HeaderOverlays />
  </div>
</template>

<!-- 非 scoped：样式需作用于 HeaderNav / HeaderOverlays 子组件内的 DOM -->
<style lang="scss">
@import './styles/header.scss';
</style>
