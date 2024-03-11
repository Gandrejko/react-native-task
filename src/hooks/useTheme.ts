import {darkTheme, lightTheme} from '@constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {Appearance, useColorScheme} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const useTheme = () => {
  const colorScheme = useColorScheme();
  useEffect(() => {
    (async () => {
      try {
        const theme = await AsyncStorage.getItem('theme');
        if (theme && (theme === 'light' || theme === 'dark')) {
          Appearance.setColorScheme(theme);
        }
      } catch (error) {
        console.log('err', error);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        EStyleSheet.build(colorScheme === 'dark' ? darkTheme : lightTheme);
        if (typeof colorScheme === 'string') {
          await AsyncStorage.setItem('theme', colorScheme);
        }
      } catch (error) {
        console.log('err', error);
      }
    })();
  }, [colorScheme]);
};

export default useTheme;
