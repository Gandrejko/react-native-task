import AppStatusBar from '@components/appStatusBar';
import {colors} from '@constants/theme';
import {useQuery} from '@tanstack/react-query';
import {IPost} from '@types';
import axios from 'axios/index';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const Search = () => {
  const {t} = useTranslation();
  const [search, setSearch] = useState<string>('');
  const {data: posts} = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const {data} = await axios.get<IPost[]>(
        'https://jsonplaceholder.typicode.com/posts',
      );
      return data;
    },
  });
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>(posts || []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilteredPosts(
        posts?.filter(({title, body}) => {
          return (
            title.toLowerCase().includes(search.toLowerCase()) ||
            body.toLowerCase().includes(search.toLowerCase())
          );
        }) || [],
      );
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <SafeAreaView style={styles.screen}>
      <AppStatusBar />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>{t('search.search')}</Text>
        <View style={styles.inputContainer}>
          <Icon name="magnify" color={colors.text.color} size={32} />
          <TextInput
            placeholder={t('search.search_products')}
            placeholderTextColor={styles.placeholder.color}
            value={search}
            onChangeText={newText => setSearch(newText)}
            style={styles.input}
          />
        </View>
        <View style={styles.posts}>
          {filteredPosts?.map(({id, title}) => (
            <View key={id} style={styles.post}>
              <Text style={styles.postTitle}>
                {t('search.id')}: {id}
              </Text>
              <Text style={styles.postBody}>
                {t('search.name')}: {title}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
