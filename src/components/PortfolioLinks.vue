<template>
  <div class="mt-8">
    <h2 class="text-xl text-green-400 mb-4">> ls -l ./portfolio_sites</h2>

    <div v-if="portfolioSites.length > 0">
      <div v-for="site in portfolioSites" :key="site.name" class="mb-4 p-4 border border-blue-700 rounded-md bg-gray-900">
        <a :href="site.url" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline text-lg font-bold">{{ site.name }}</a>
        <p class="text-gray-400 text-sm">{{ site.description }}</p>
      </div>
    </div>
    <div v-else>
      <p class="text-gray-500">Nenhum site de portfólio adicionado manualmente ainda.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface PortfolioSite {
  name: string;
  url: string;
  description: string;
}

const portfolioSites = ref<PortfolioSite[]>([
  // Exemplo de links de portfólio (o usuário pode adicionar mais aqui)
  // {
  //   name: "Meu Site Pessoal",
  //   url: "https://meusite.com",
  //   description: "Meu portfólio pessoal com projetos e informações de contato."
  // },
  // {
  //   name: "Blog de Tecnologia",
  //   url: "https://meublog.dev",
  //   description: "Artigos sobre desenvolvimento web e novas tecnologias."
  // }
]);
</script>
