<template>
  <footer class="text-center p-4 border-t border-gray-700 mt-8">
    <p class="text-gray-500">{{ t.footerProcessComplete }}</p>
  </footer>
</template>

<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';

const { translations: t } = useLanguage();
</script>
