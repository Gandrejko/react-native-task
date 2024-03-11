import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  dots: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  dot: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: '$secondary',
  },
  dotActive: {
    backgroundColor: '$primary',
  },
});

export default styles;
