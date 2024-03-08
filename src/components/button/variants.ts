import EStyleSheet from 'react-native-extended-stylesheet';

export const contained = EStyleSheet.create({
  btn: {
    backgroundColor: '$primary',
  },
  text: {
    color: '$background',
  },
});

export const outlined = EStyleSheet.create({
  btn: {
    backgroundColor: '$background',
  },
  text: {
    color: '$primary',
  },
});
