import AppStatusBar from '@components/appStatusBar';
import {Post} from '@navigation/screens/home';
import {useQueryClient} from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const Search = () => {
  const {t} = useTranslation();
  const [search, setSearch] = useState<string>('');
  const queryClient = useQueryClient();
  const posts = queryClient.getQueryData<Post[]>(['posts']);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts || []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilteredPosts(
        posts?.filter(({title, body}) => {
          return title.includes(search) || body.includes(search);
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
          <Icon name="magnify" size={32} />
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
