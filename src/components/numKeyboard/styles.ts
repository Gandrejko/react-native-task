import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  keyboard: {
    marginHorizontal: 'auto',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '$secondary',
    paddingVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    rowGap: 20,
  },
  button: {
    flexBasis: '33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '$textLight',
  },
});

export default styles;
