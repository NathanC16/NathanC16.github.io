<template>
  <div class="fixed inset-0 bg-black flex items-center justify-center z-50">
    <div class="text-green-400 font-mono text-xl text-center">
      <p class="typing-effect">Iniciando sistema...</p>
      <p class="mt-2 blink">_</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script setup necessário para esta versão simples do preloader
</script>

<style scoped>
.typing-effect {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 2s steps(20, end) forwards;
  width: 0;
}

.blink {
  animation: blink-caret .75s step-end infinite;
}

/* Animação de digitação */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* Animação do cursor piscando */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: currentColor }
}
</style>
