import AppStatusBar from '@components/appStatusBar';
import Button from '@components/button';
import {AppStackProps} from '@navigation/navigationUtils';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'expo-image';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';

const Welcome = () => {
  const navigation = useNavigation<AppStackProps['navigation']>();
  return (
    <SafeAreaView style={styles.screen}>
      <AppStatusBar />
      <View style={styles.content}>
        <Image style={styles.bg} source={require('@assets/bg.png')} />
        <View style={styles.grow}></View>
        <Button
          onPress={() => navigation.navigate('AuthStack', {screen: 'Login'})}
          text="Sign in"
          variant="outlined"
        />
        <Button
          onPress={() => navigation.navigate('AuthStack', {screen: 'Register'})}
          text="Sign up"
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
