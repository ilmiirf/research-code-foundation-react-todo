import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18next.use(initReactI18next).use(HttpApi).init({
  debug: true,
  fallbackLng: 'en',
  defaultNS: 'translation',
});

export default i18next;
