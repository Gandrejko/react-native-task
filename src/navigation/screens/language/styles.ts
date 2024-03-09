import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '$background',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    color: '$text',
    fontSize: 24,
    fontWeight: 'bold',
  },
  list: {
    marginTop: 20,
    gap: 20,
  },
  language: {
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
  label: {
    color: '$text',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default styles;
