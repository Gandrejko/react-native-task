import SettingButton from '@components/settingButton';
import {useAppDispatch} from '@hooks/redux';
import {AppStackProps, SettingsStackProps} from '@navigation/navigationUtils';
import {useNavigation} from '@react-navigation/native';
import {resetProfile} from '@store/profileSlice';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import styles from './styles';
const Settings = () => {
  const dispatch = useAppDispatch();
  const {t} = useTranslation();
  const navigation = useNavigation<SettingsStackProps['navigation']>();
  const globalNavigation = useNavigation<AppStackProps['navigation']>();

  const logOut = async () => {
    dispatch(resetProfile());
    globalNavigation.replace('AuthStack', {screen: 'Welcome'});
  };
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.content}>
        <Text style={styles.title}>{t('settings.settings')}</Text>
        <View style={styles.user}>
          <View style={styles.icon}></View>
          <Text style={styles.name}>John Doe</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>{t('settings.basic')}</Text>
          <SettingButton
            onPress={() => navigation.navigate('Language')}
            title={t('settings.language')}
            iconName="web"
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>{t('settings.other')}</Text>
          <SettingButton
            onPress={logOut}
            title={t('settings.logout')}
            iconName="logout"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
