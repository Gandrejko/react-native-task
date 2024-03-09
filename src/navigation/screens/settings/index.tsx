import SettingButton from '@components/settingButton';
import {SettingsStackProps} from '@navigation/navigationUtils';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import styles from './styles';
const Settings = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<SettingsStackProps['navigation']>();
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle={'light-content'} />
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
        <SettingButton title={t('settings.logout')} iconName="logout" />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
