import AppStatusBar from '@components/appStatusBar';
import Button from '@components/button';
import React from 'react';
import {SubmitHandler} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {Image} from 'expo-image';

type AuthWrapperProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  onSubmit: SubmitHandler<any>;
  iconName: string;
};
const AuthWrapper = ({
  children,
  title,
  subtitle,
  onSubmit,
  iconName,
}: AuthWrapperProps) => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.screen}>
      <AppStatusBar />
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
        <Image style={styles.bg} source={require('@assets/bg.png')} />
        <View style={styles.form}>
          <View style={styles.header}>
            <View style={styles.icon}>
              <Icon name={iconName} color={styles.icon.color} size={32} />
            </View>
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
          </View>
          <View style={styles.divider}></View>
          <ScrollView style={styles.inputs}>{children}</ScrollView>
          <Button text={t('auth.continue')} onPress={onSubmit} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AuthWrapper;
