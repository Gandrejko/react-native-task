import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '$secondary',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
  grow: {
    flexGrow: 1,
    gap: 20,
    flexDirection: 'row',
  },
  column: {
    flexGrow: 1,
    rowGap: 20,
  },
  block: {
    height: 130,
    backgroundColor: '$primary',
    borderRadius: 20,
  },
  section: {
    height: 130,
    backgroundColor: '$background',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 16,
    color: '$text',
    marginTop: 10,
  },
  middle: {
    zIndex: 1,
    marginHorizontal: -15,
  },
});

export default styles;
