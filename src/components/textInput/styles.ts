import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '$secondary',
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '$text',
  },
  error: {
    borderColor: 'red',
  },
  errorMessage: {
    fontSize: 14,
    color: 'red',
    lineHeight: 18,
    marginTop: 5,
    marginLeft: 20,
  },
  placeholder: {
    color: '$textLight',
  },
  label: {
    fontSize: 16,
    color: '$textLight',
    marginBottom: 10,
    marginLeft: 15,
  },
});
