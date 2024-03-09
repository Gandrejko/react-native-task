import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: '$secondary',
    borderRadius: 15,
    justifyContent: 'space-between',
  },
  icon: {
    color: '$primary',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '$text',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default styles;
