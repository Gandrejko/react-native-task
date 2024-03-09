import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#secondary',
  },
  banner: {
    height: 250,
    backgroundColor: '$primary',
    color: '$background',
    paddingTop: 80,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  subtitle: {
    color: '$background',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '$background',
  },
  card: {
    padding: 10,
    backgroundColor: '$background',
    borderRadius: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  image: {
    width: 130,
    height: 130,
    backgroundColor: '$primary',
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '$textLight',
  },
  cardButton: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardButtonText: {
    color: '$primary',
    fontWeight: 'bold',
    fontSize: 18,
  },
  cards: {
    overflow: 'hidden',
    flexDirection: 'row',
  },
  lastCard: {
    marginRight: 20,
  },
  sectionTitle: {
    fontSize: 14,
    marginLeft: 20,
    marginVertical: 10,
    color: '$textLight',
  },
  postsContainer: {
    marginTop: 20,
  },
  posts: {
    marginHorizontal: 20,
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
});

export default styles;
