import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '$secondary',
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '$textLight',
  },
  input: {
    color: '$text',
    fontSize: 18,
    marginLeft: 10,
  },
  placeholder: {
    color: '$textLight',
  },
  posts: {
    marginTop: 20,
  },
  post: {
    backgroundColor: '$background',
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postBody: {
    fontSize: 16,
    color: '$textLight',
  },
});

export default styles;
