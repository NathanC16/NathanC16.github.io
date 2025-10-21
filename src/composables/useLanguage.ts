import { ref, computed, provide, inject, readonly } from 'vue';
import { translations } from '../../lib/translations.ts';

// A chave de injeção para o contexto do idioma
const LanguageKey = Symbol('LanguageContext');

// O tipo para o nosso contexto de idioma, inferido a partir dos dados
type LanguageContextType = {
  language: import('vue').Ref<keyof typeof translations>;
  t: import('vue').ComputedRef<typeof translations['en']>;
  toggleLanguage: () => void;
}

// Função que provê o estado do idioma
export function provideLanguage() {
  const language = ref<keyof typeof translations>('en');

  const toggleLanguage = () => {
    language.value = language.value === 'en' ? 'pt' : 'en';
  };

  const t = computed(() => translations[language.value]);

  provide(LanguageKey, {
    language: readonly(language),
    t,
    toggleLanguage,
  });
}

// Função que consome o estado do idioma
export function useLanguage() {
  const context = inject<LanguageContextType>(LanguageKey);
  if (!context) {
    throw new Error('useLanguage() must be used within a component that has a language provider.');
  }
  return context;
}