import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';

const useLanguage = () => {
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
};

export default useLanguage;
