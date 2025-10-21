<template>
  <header class="flex justify-between items-center p-4 border-b border-gray-700">
    <h1 class="text-2xl font-bold text-green-400">{{ t.portfolioTitle }}</h1>
    <LanguageSwitcher />
  </header>
</template>

<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue';
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();
</script>
