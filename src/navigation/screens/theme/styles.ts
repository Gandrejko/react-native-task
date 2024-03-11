import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '$background',
  },
  content: {
    padding: 20,
    paddingTop: 50,
  },
  title: {
    color: '$text',
    fontSize: 24,
    fontWeight: 'bold',
  },
  themeList: {
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
  colors: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-evenly',
  },
  item: {
    width: 50,
    height: 50,
    borderRadius: 15,
    color: '$background',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
