import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '$secondary',
  },
  content: {
    padding: 20,
  },
  banner: {
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '$background',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 30,
    color: '$text',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  imageContainer: {
    width: '100%',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  section: {
    paddingTop: 40,
  },
  label: {
    fontSize: 16,
    color: '$textLight',
    marginBottom: 10,
  },
  about: {
    backgroundColor: '$background',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 15,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 30,
    color: '$text',
  },
  commentsList: {
    gap: 15,
  },
  comment: {
    backgroundColor: '$background',
    padding: 20,
    borderRadius: 15,
  },
  commentName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '$text',
  },
  commentEmail: {
    fontSize: 16,
    color: '$textLight',
    marginBottom: 10,
  },
  commentBody: {
    fontSize: 16,
    color: '$text',
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: '$background',
  },
});

export default styles;
