import {colors} from '@constants/theme';
import React from 'react';
import {StatusBar, StatusBarProps, useColorScheme} from 'react-native';

const AppStatusBar = (props: StatusBarProps) => {
  const colorScheme = useColorScheme();
  return (
    <StatusBar
      backgroundColor={colors.background.color}
      barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      {...props}
    />
  );
};

export default AppStatusBar;
