import AppStatusBar from '@components/appStatusBar';
import {colors} from '@constants/theme';
import {newShade} from '@helpers/newShade';
import {useAppSelector} from '@hooks/redux';
import {HomeStackProps} from '@navigation/navigationUtils';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {IPost} from '@types';
import axios from 'axios';
import {LinearGradient} from 'expo-linear-gradient';
import Card from './card';
import React, {useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image} from 'expo-image';
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
  const {firstName, lastName} = useAppSelector(state => state.profile);
  const navigation = useNavigation<HomeStackProps['navigation']>();
  const {t} = useTranslation();

  const postsNode = useMemo(
    () =>
      posts?.map(({id, title, body}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Post', {postId: id})}
          key={id}
          style={styles.post}>
          <Text style={styles.postTitle}>{title}</Text>
          <Text style={styles.postBody}>{body}</Text>
        </TouchableOpacity>
      )),
    [posts],
  );
  const primaryColor = colors.primary.color;
  const secondColor = newShade(primaryColor, 30);
  return (
    <SafeAreaView style={styles.screen}>
      <AppStatusBar backgroundColor={secondColor} />
      <ScrollView>
        <LinearGradient
          colors={[secondColor, primaryColor]}
          style={styles.banner}>
          <Text style={styles.subtitle}>{t('home.your_name')}</Text>
          <Text style={styles.name}>
            {firstName} {lastName}
          </Text>
        </LinearGradient>
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
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('@assets/personal.png')}
            />
          </View>
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
        {posts && (
          <View style={styles.postsContainer}>
            <Text style={styles.sectionTitle}>{t('home.posts')}</Text>
            <View style={styles.posts}>{postsNode}</View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
