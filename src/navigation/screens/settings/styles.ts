import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '$background',
  },
  content: {
    padding: 20,
    paddingTop: 30,
  },
  title: {
    color: '$text',
    fontSize: 24,
    fontWeight: 'bold',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 2,
    borderColor: '$secondary',
    padding: 20,
    borderRadius: 15,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '$secondary',
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  name: {
    color: '$text',
    fontSize: 18,
  },
  section: {
    marginTop: 30,
  },
  label: {
    color: '$textLight',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default styles;
