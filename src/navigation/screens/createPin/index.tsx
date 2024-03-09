import AppStatusBar from '@components/appStatusBar';
import Button from '@components/button';
import NumKeyboard from '@components/numKeyboard';
import PinDots from '@components/pinDots';
import {AuthStackProps} from '@navigation/navigationUtils';
import {useNavigation} from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, View, Text, StatusBar, Alert} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import styles from './styles';

const CreatePin = () => {
  const PIN_LENGTH = 5;
  const {t} = useTranslation();
  const navigation = useNavigation<AuthStackProps['navigation']>();
  const [pin, setPin] = useState<number[]>([]);

  useEffect(() => {
    const removePin = async () => {
      await SecureStore.deleteItemAsync('pin');
    };
    removePin();
  }, []);

  const onPress = (number: number | string) => {
    if (typeof number === 'number' && pin.length < PIN_LENGTH) {
      setPin([...pin, number]);
    }
  };

  const onSubmit = async () => {
    if (pin.length < PIN_LENGTH) {
      return;
    }

    try {
      const pinString = pin.join('');
      await SecureStore.setItemAsync('pin', pinString);
      setPin([]);
      navigation.navigate('RepeatPin');
    } catch (err: any) {
      console.log('err', err);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <AppStatusBar />
      <View style={styles.icon}></View>
      <Text style={styles.title}>{t('auth.create_pin')}</Text>
      <Text style={styles.subtitle}>{t('auth.enter_code')}</Text>
      <PinDots pin={pin} />
      <NumKeyboard
        onPress={onPress}
        onRemove={() => setPin(pin.slice(0, -1))}
      />
      <Button
        text={t('auth.continue')}
        onPress={onSubmit}
        buttonStyles={styles.button}
      />
    </SafeAreaView>
  );
};

export default CreatePin;
