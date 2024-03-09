import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const languages = [
  {value: 'en', label: 'English'},
  {value: 'ar', label: 'Arabic'},
];

const Language = () => {
  const {t, i18n} = useTranslation();
  const language = i18n.language;
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle={'light-content'} />
      <Text style={styles.title}>{t('settings.language')}</Text>
      <View style={styles.list}>
        {languages.map(({value, label}) => (
          <TouchableOpacity
            onPress={() => i18n.changeLanguage(value)}
            key={value}
            style={styles.language}>
            <View style={styles.left}>
              <Icon name={'web'} color={styles.icon.color} size={32} />
              <Text style={styles.label}>{label}</Text>
            </View>
            {language === value && (
              <Icon name={'check'} color={styles.icon.color} size={32} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Language;
