<template>
  <div class="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50">
    <div class="text-left font-mono max-w-xl w-full px-4">
      <p class="text-green-400">{{ t.newProjectsTitle }}</p>
      <p class="text-green-400">{{ t.newProjectsDescription }}</p>
      <div class="flex items-center">
        <p class="text-green-400 mr-2">{{ t.newProjectsStatus }}</p>
        <div class="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p v-if="showError" class="text-red-500">{{ t.newProjectsError }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();

const showError = ref(false);

onMounted(() => {
  setTimeout(() => {
    showError.value = true;
  }, 2000); // Show error after 2 seconds, replicating original logic
});
</script>

<style scoped>
/* You can add additional styles here if needed */
</style>
