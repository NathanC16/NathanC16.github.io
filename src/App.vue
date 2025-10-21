<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Preloader from './components/Preloader.vue';
import GitHubProjects from './components/GitHubProjects.vue';
import PortfolioLinks from './components/PortfolioLinks.vue';

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3000); // Mostra o preloader por 3 segundos
});
</script>

<template>
  <Preloader v-if="isLoading" />
  <div v-else class="min-h-screen bg-black text-green-400 font-mono p-4">
    <h1 class="text-2xl text-green-400 mb-4">./PORTFOLIO</h1>
    <GitHubProjects />
    <PortfolioLinks />
  </div>
</template>

<style scoped>
/* Estilos globais serão definidos em src/assets/main.css via Tailwind */
</style>
