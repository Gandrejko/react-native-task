import AppStatusBar from '@components/appStatusBar';
import Button from '@components/button';
import NumKeyboard from '@components/numKeyboard';
import PinDots from '@components/pinDots';
import {useAppSelector} from '@hooks/redux';
import {AppStackProps} from '@navigation/navigationUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, View, Text} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const CheckPin = () => {
  const PIN_LENGTH = 5;
  const {t} = useTranslation();
  const navigation = useNavigation<AppStackProps['navigation']>();
  const [pin, setPin] = useState<number[]>([]);
  const email = useAppSelector(state => state.profile.email);
  const onPress = (number: number | string) => {
    if (typeof number === 'number' && pin.length < PIN_LENGTH) {
      setPin([...pin, number]);
    }
  };

  const biometricLogin = async () => {
    const biometric = JSON.parse(
      (await AsyncStorage.getItem('biometric')) || 'false',
    );
    if (!biometric) {
      throw new Error('Biometrics is not enabled');
    }
    const result = await LocalAuthentication.authenticateAsync();
    return result.success;
  };

  useEffect(() => {
    (async () => {
      try {
        const result = await biometricLogin();
        if (result) {
          navigation.replace('PrivateStack', {
            screen: 'HomeStack',
            params: {screen: 'Home'},
          });
        }
      } catch (err) {
        console.log('err', err);
      }
    })();
  }, []);

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
      } else {
        navigation.replace('PrivateStack', {
          screen: 'HomeStack',
          params: {screen: 'Home'},
        });
      }
    } catch (err: any) {
      console.log('err', err);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <AppStatusBar />
      <View style={styles.icon}>
        <Icon name="user" color={styles.icon.color} size={32} />
      </View>
      <Text style={styles.title}>{email}</Text>
      <Text
        style={styles.changeAccount}
        onPress={() => navigation.navigate('AuthStack', {screen: 'Welcome'})}>
        {t('auth.change_account')}
      </Text>
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

export default CheckPin;
