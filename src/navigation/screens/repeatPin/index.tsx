import Button from '@components/button';
import NumKeyboard from '@components/numKeyboard';
import PinDots from '@components/pinDots';
import {AppStackProps} from '@navigation/navigationUtils';
import {useNavigation} from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as SecureStore from 'expo-secure-store';
import styles from './styles';

const RepeatPin = () => {
  const PIN_LENGTH = 5;
  const {t} = useTranslation();
  const navigation = useNavigation<AppStackProps['navigation']>();
  const [pin, setPin] = useState<number[]>([]);
  const biometricLogin = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    if (!compatible) {
      throw new Error('Biometrics is not available.');
    }
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Do you want to allow "Dawma" to use Face ID',
    });
    console.log(result);
  };

  const onPress = (number: number | string) => {
    if (typeof number === 'number' && pin.length < PIN_LENGTH) {
      setPin([...pin, number]);
    }
  };

  const onSubmit = async () => {
    if (pin.length < PIN_LENGTH) {
      return;
    }
    const pinString = pin.join('');
    try {
      const result = await SecureStore.getItemAsync('pin');
      if (result !== pinString) {
        setPin([]);
        alert('Pin is not correct');
      }
    } catch (err: any) {
      console.log('err', err);
    }
    try {
      await biometricLogin();
    } catch (err: any) {
      console.log('err', err);
    } finally {
      navigation.navigate('Welcome');
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.icon}></View>
      <Text style={styles.title}>{t('auth.repeat_pin')}</Text>
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

export default RepeatPin;
