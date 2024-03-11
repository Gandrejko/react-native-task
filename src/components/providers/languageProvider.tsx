import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';

type LanguageProviderProps = {
  children: React.ReactNode;
};
const LanguageProvider = ({children}: LanguageProviderProps) => {
  const {i18n} = useTranslation();
  useEffect(() => {
    (async () => {
      try {
        const language = await AsyncStorage.getItem('language');
        if (language) {
          await i18n.changeLanguage(language);
        }
      } catch (error) {
        console.log('err', error);
      }
    })();
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default LanguageProvider;
