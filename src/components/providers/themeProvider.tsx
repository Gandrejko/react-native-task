import {darkTheme, lightTheme} from '@constants/theme';
import {useAppDispatch, useAppSelector} from '@hooks/redux';
import {setTheme} from '@store/settingsSlice';
import React from 'react';
import {useEffect} from 'react';
import {Appearance, useColorScheme} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

type ThemeProviderProps = {
  children: React.ReactNode;
};
const ThemeProvider = ({children}: ThemeProviderProps) => {
  const colorScheme = useColorScheme();
  const {theme, primaryColor} = useAppSelector(state => state.settings);
  const dispatch = useAppDispatch();
  useEffect(() => {
    Appearance.setColorScheme(theme);
    const result = theme === 'dark' ? darkTheme : lightTheme;
    EStyleSheet.build({...result, $primary: primaryColor});
  }, []);
  useEffect(() => {
    if (typeof colorScheme === 'string') {
      dispatch(setTheme(colorScheme));
    }
  }, [colorScheme, primaryColor]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default ThemeProvider;
