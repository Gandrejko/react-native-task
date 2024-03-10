import AppStatusBar from '@components/appStatusBar';
import {HomeStackProps} from '@navigation/navigationUtils';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {IPost} from '@types';
import axios from 'axios';
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

const Home = () => {
  const {data: posts} = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const {data} = await axios.get<IPost[]>(
        'https://jsonplaceholder.typicode.com/posts',
      );
      return data;
    },
    select: data => data.slice(0, 3),
  });
  const navigation = useNavigation<HomeStackProps['navigation']>();
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.screen}>
      <AppStatusBar />
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
            {posts?.map(({id, title, body}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Post', {postId: id})}
                key={id}
                style={styles.post}>
                <Text style={styles.postTitle}>{title}</Text>
                <Text style={styles.postBody}>{body}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
