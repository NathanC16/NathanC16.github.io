<template>
  <div class="flex items-center space-x-2">
    <span :class="{ 'text-green-400': language === 'en' }" class="cursor-pointer" @click="setLanguage('en')">EN</span>
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" :checked="language === 'pt'" @change="toggleLanguage" class="sr-only peer">
      <div class="w-11 h-6 bg-gray-700 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
    </label>
    <span :class="{ 'text-green-400': language === 'pt' }" class="cursor-pointer" @click="setLanguage('pt')">PT</span>
  </div>
</template>

<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';

const { language, toggleLanguage } = useLanguage();

const setLanguage = (lang: 'en' | 'pt') => {
  if (language.value !== lang) {
    toggleLanguage();
  }
};
</script>
