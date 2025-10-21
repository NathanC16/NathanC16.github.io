<template>
  <div class="bg-gray-800 rounded-lg p-6 flex flex-col justify-between h-full transform hover:-translate-y-2 transition-transform duration-300">
    <div>
      <div class="flex justify-between items-start mb-4">
        <FolderIcon />
        <div class="flex space-x-4">
          <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
          <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer">
            <LinkIcon />
          </a>
        </div>
      </div>
      <h3 class="text-xl font-bold text-green-400 mb-2">{{ projectName }}</h3>
      <p class="text-gray-400 text-sm">{{ projectDescription }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import FolderIcon from './icons/FolderIcon.vue';
import GithubIcon from './icons/GithubIcon.vue';
import LinkIcon from './icons/LinkIcon.vue';
import { useLanguage } from '../composables/useLanguage';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const { language } = useLanguage();

const projectName = computed(() => {
  return language.value === 'pt' ? props.project.name_pt : props.project.name_en;
});

const projectDescription = computed(() => {
  return language.value === 'pt' ? props.project.description_pt : props.project.description_en;
});

</script>
