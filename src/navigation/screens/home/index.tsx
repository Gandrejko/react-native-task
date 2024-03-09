import Card from './card';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

type Post = {
  id: number;
  title: string;
  body: string;
};

const mockPosts = Array(10)
  .fill({
    title: 'How to take shower?',
    body: "The weather outside is lovely today, isn't it? I can't wait to take a stroll through the park.",
  })
  .map((post, index) => ({...post, id: index}));
const Home = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView>
        <View style={styles.banner}>
          <Text style={styles.subtitle}>{t('home.your_name')}</Text>
          <Text style={styles.name}>John Doe</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{t('home.personal_advisor')}</Text>
            <Text style={styles.cardSubtitle}>Muhammed Salim</Text>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>{t('home.schedule')}</Text>
              <Icon
                name={'chevron-right'}
                color={styles.cardButtonText.color}
                size={32}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.image}></View>
        </View>
        <View>
          <Text style={styles.sectionTitle}>{t('home.before')}</Text>
          <ScrollView
            horizontal
            style={styles.cards}
            showsHorizontalScrollIndicator={false}>
            <Card title={t('home.link_bank')} stepsCount={2} />
            <Card
              title={t('home.add_wallet')}
              stepsCount={3}
              cardStyle={styles.lastCard}
            />
          </ScrollView>
        </View>
        <View style={styles.postsContainer}>
          <Text style={styles.sectionTitle}>{t('home.posts')}</Text>
          <View style={styles.posts}>
            {mockPosts.map(({id, title, body}) => (
              <View key={id} style={styles.post}>
                <Text style={styles.postTitle}>{title}</Text>
                <Text style={styles.postBody}>{body}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
