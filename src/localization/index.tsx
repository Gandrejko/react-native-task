import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './translations/en.json';
import ar from './translations/ar.json';

const resources = {
  en,
  ar,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
