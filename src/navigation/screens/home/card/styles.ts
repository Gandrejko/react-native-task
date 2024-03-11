import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  card: {
    backgroundColor: '$background',
    borderRadius: 20,
    width: 250,
    padding: 20,
    marginLeft: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: '$secondary',
    borderRadius: 50,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: '$primary',
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    color: '$text',
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  steps: {
    color: '$text',
  },
});

export default styles;
