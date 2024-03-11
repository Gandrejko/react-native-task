import EStyleSheet from 'react-native-extended-stylesheet';

export const lightTheme = {
  $theme: 'light',
  $background: '#fff',
  $primary: '#04997b',
  $secondary: '#EBEFF5',
  $text: '#06070A',
  $textLight: '#606773',
};

export const darkTheme = {
  $theme: 'dark',
  $background: '#06070A',
  $primary: '#04997b',
  $secondary: '#212121',
  $text: '#fff',
  $textLight: '#9b9b9b',
};

export const primaryColors = ['#04997b', '#b8281d', '#ad9e1a', '#1a6db0'];

export const colors = EStyleSheet.create({
  background: {
    color: '$background',
  },
  primary: {
    color: '$primary',
  },
  secondary: {
    color: '$secondary',
  },
  text: {
    color: '$text',
  },
  textLight: {
    color: '$textLight',
  },
});
