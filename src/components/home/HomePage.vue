<script setup>
import AppHeader from './AppHeader/AppHeader.vue'
import CategoryBar from './CategoryBar/CategoryBar.vue'
import MainContent from './MainContent/MainContent.vue'
</script>

<template>
  <div class="home-page">
    <AppHeader />
    <CategoryBar />
    <MainContent />
  </div>
</template>

<style lang="scss">
@import '@/styles/home-layout.scss';
</style>
