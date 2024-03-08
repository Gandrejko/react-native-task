import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  phoneView: {
    borderColor: '#0f0f0f',
    borderWidth: 1,
    borderRadius: 5,
  },
  codeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    background: 'transparent',
    borderRightWidth: 1,
    borderColor: '#0f0f0f',
    minWidth: 60,
  },
  input: {
    height: 'auto',
    paddingVertical: 0,
    paddingHorizontal: 10,
    flex: 1,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
  },
  error: {
    borderColor: 'red',
    color: 'red',
    minHeight: 20,
  },
});

export default styles;
