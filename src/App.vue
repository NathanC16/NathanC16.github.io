<template>
  <Preloader v-if="isLoading" />
  <div v-else class="bg-gray-900 text-white min-h-screen font-mono">
    <div class="container mx-auto px-4">
      <Header />
      <ProjectList />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { provideLanguage } from './composables/useLanguage';
import Preloader from './components/Preloader.vue';
import Header from './components/Header.vue';
import ProjectList from './components/ProjectList.vue';
import Footer from './components/Footer.vue';

// Provide the language context to all child components
provideLanguage();

const isLoading = ref(true);

onMounted(() => {
  // Simulate loading time
  setTimeout(() => {
    isLoading.value = false;
  }, 4000); // Hide preloader after 4 seconds
});

</script>

<style>
/* Global styles can go here if needed, but we are using Tailwind */
</style>