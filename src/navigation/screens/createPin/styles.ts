import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '$background',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    marginTop: 20,
    width: 50,
    height: 50,
    backgroundColor: '$secondary',
    borderRadius: 50,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: '$primary',
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 30,
    color: '$textLight',
  },
  button: {
    margin: 15,
  },
});

export default styles;
