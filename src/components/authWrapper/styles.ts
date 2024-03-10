import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ccc',
    position: 'relative',
  },
  bg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  form: {
    padding: 15,
    backgroundColor: '$background',
    flexGrow: 1,
    marginTop: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 50,
    maxHeight: 70,
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: '$secondary',
    borderRadius: 50,
    marginRight: 10,
    color: '$primary',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: '$textLight',
  },
  divider: {
    height: 1,
    backgroundColor: '$secondary',
    marginVertical: 20,
  },
  inputs: {
    marginBottom: 40,
  },
});

export default styles;
