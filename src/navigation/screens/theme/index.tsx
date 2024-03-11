import AppStatusBar from '@components/appStatusBar';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  Appearance,
  SafeAreaView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ColorSchemeName} from 'react-native/Libraries/Utilities/Appearance';
import styles from './styles';

const themes: {value: ColorSchemeName; label: string}[] = [
  {value: 'dark', label: 'Dark'},
  {value: 'light', label: 'Light'},
];

const Theme = () => {
  let colorScheme = useColorScheme();
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.screen}>
      <AppStatusBar />
      <View style={styles.content}>
        <Text style={styles.title}>{t('settings.theme')}</Text>
        <View style={styles.list}>
          {themes.map(({value, label}) => (
            <TouchableOpacity
              onPress={() => Appearance.setColorScheme(value)}
              key={value}
              style={styles.language}>
              <View style={styles.left}>
                <Icon
                  name={'invert-colors'}
                  color={styles.icon.color}
                  size={32}
                />
                <Text style={styles.label}>{label}</Text>
              </View>
              {colorScheme === value && (
                <Icon name={'check'} color={styles.icon.color} size={32} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Theme;
