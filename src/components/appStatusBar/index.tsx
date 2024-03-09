import React from 'react';
import {StatusBar, StatusBarProps} from 'react-native';

const AppStatusBar = (props: StatusBarProps) => {
  return (
    <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} {...props} />
  );
};

export default AppStatusBar;
