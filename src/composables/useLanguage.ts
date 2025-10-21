import { ref, computed, provide, inject } from 'vue';
import { translations } from '../../lib/translations.js';

// Crie uma chave de injeção para o contexto do idioma
const LanguageKey = Symbol();

// O tipo para o nosso contexto de idioma
interface LanguageContext {
  language: import('vue').Ref<keyof typeof translations>;
  translations: import('vue').ComputedRef<typeof translations['en'] | typeof translations['pt']>;
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
    language,
    translations: t,
    toggleLanguage,
  });

  return { language, translations: t, toggleLanguage };
}

// Função que consome o estado do idioma
export function useLanguage(): LanguageContext {
  const context = inject<LanguageContext>(LanguageKey);
  if (!context) {
    throw new Error('useLanguage must be used within a component that has provided the language context');
  }
  return context;
}
