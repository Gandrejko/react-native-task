import AppStatusBar from '@components/appStatusBar';
import Button from '@components/button';
import {goBack, HomeStackParamList} from '@navigation/navigationUtils';
import {StackScreenProps} from '@react-navigation/stack';
import {useQueryClient} from '@tanstack/react-query';
import {useQuery} from '@tanstack/react-query';
import {IPost, IComment} from '@types';
import axios from 'axios/index';
import {Image} from 'expo-image';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './styles';

const Post = ({route}: StackScreenProps<HomeStackParamList, 'Post'>) => {
  const {postId} = route.params || {};
  const {t} = useTranslation();
  const queryClient = useQueryClient();
  const post = queryClient
    .getQueryData<IPost[]>(['posts'])
    ?.find(p => p.id === postId);
  const {data: comments} = useQuery({
    queryKey: ['comments', postId],
    queryFn: async () => {
      const {data} = await axios.get<IComment[]>(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
      );
      return data;
    },
  });
  return (
    <SafeAreaView style={styles.screen}>
      <AppStatusBar />
      <ScrollView>
        <View style={styles.banner}>
          <Text style={styles.title}>{post?.title}</Text>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('@assets/post.png')} />
          </View>
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.label}>{t('post.about')}</Text>
            <View style={styles.about}>
              <Text style={styles.aboutText}>{post?.body}</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>{t('post.comments')}</Text>
            <View style={styles.commentsList}>
              {comments?.map(comment => (
                <View style={styles.comment} key={comment.id}>
                  <Text style={styles.commentName}>{comment.name}</Text>
                  <Text style={styles.commentEmail}>{comment.email}</Text>
                  <Text style={styles.commentBody}>{comment.body}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button text={t('post.back')} onPress={goBack} />
      </View>
    </SafeAreaView>
  );
};

export default Post;
