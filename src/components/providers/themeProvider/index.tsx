import {darkTheme, lightTheme} from '@constants/theme';
import {useAppSelector} from '@hooks/redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {useEffect} from 'react';
import {Appearance, useColorScheme, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

type ThemeProviderProps = {
  children: React.ReactNode;
};
const ThemeProvider = ({children}: ThemeProviderProps) => {
  const colorScheme = useColorScheme();
  const primaryColor = useAppSelector(state => state.settings.primaryColor);
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
        const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
        EStyleSheet.build({...theme, $primary: primaryColor});
        if (typeof colorScheme === 'string') {
          await AsyncStorage.setItem('theme', colorScheme);
        }
      } catch (error) {
        console.log('err', error);
      }
    })();
  }, [colorScheme, primaryColor]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default ThemeProvider;
