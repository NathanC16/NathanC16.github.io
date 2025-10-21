<template>
  <div class="mt-8">
    <h2 class="text-xl text-green-400 mb-4">> ls -l ./github_projects</h2>

    <div v-if="loading" class="text-blue-400">Carregando projetos do GitHub...</div>
    <div v-else-if="error" class="text-red-500">Erro ao carregar projetos: {{ error }}</div>
    <div v-else>
      <div v-for="project in projects" :key="project.id" class="mb-4 p-4 border border-green-700 rounded-md bg-gray-900">
        <a :href="project.html_url" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline text-lg font-bold">{{ project.name }}</a>
        <p class="text-gray-400 text-sm">{{ project.description || 'Sem descrição.' }}</p>
        <div class="flex items-center text-gray-500 text-xs mt-2">
          <span v-if="project.language" class="mr-3">Linguagem: {{ project.language }}</span>
          <span class="mr-3">Estrelas: {{ project.stargazers_count }}</span>
          <span>Forks: {{ project.forks_count }}</span>
        </div>
      </div>
      <p v-if="projects.length === 0" class="text-gray-500">Nenhum projeto público encontrado no GitHub.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGitHubProjects } from '../composables/useGitHubProjects';

const githubUsername = 'NathanC16'; // Seu nome de usuário do GitHub
const { projects, loading, error } = useGitHubProjects(githubUsername);
</script>
