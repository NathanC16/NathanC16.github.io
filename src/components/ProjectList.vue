<template>
  <main class="p-4">
    <h2 class="text-lg text-gray-400 mb-4">{{ t.projectsTitle }}</h2>
    <div v-if="projects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
    <div v-else>
      <p class="text-gray-500">{{ t.emptyProjectList }}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ProjectCard from './ProjectCard.vue';
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();

const projects = ref<any[]>([]);

onMounted(async () => {
  try {
    const response = await fetch('projects.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    projects.value = data;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
  }
});
</script>
