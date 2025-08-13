import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detecta o idioma do usuário
  .use(LanguageDetector)
  // passa a instância do i18n para o react-i18next
  .use(initReactI18next)
  // inicializa o i18next
  .init({
    debug: true,
    fallbackLng: 'pt-br', // idioma padrão caso o idioma detectado não seja suportado
    interpolation: {
      escapeValue: false, // não é necessário para React, pois o React já escapa os valores por padrão
    },
    resources: {
      en: {
        translation: {
          'welcome_message': 'Welcome to my app!',
          'greeting': 'Hello, {{name}}!',
        },
      },
      pt: {
        translation: {
          'welcome_message': 'Bem-vindo(a) ao meu app!',
          'greeting': 'Olá, {{name}}!',
        },
      },
    },
  });

export default i18n;