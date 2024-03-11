import AppStatusBar from '@components/appStatusBar';
import Button from '@components/button';
import NumKeyboard from '@components/numKeyboard';
import PinDots from '@components/pinDots';
import {AppStackProps} from '@navigation/navigationUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, View, Text, Alert} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
    const AsyncAlert = async () =>
      new Promise(resolve => {
        Alert.alert(`Do you want to allow "Dawma" to use Face ID`, '', [
          {
            text: "Don't Allow",
            onPress: () => resolve(false),
          },
          {
            text: 'Allow',
            onPress: async () => {
              await LocalAuthentication.authenticateAsync({
                promptMessage: 'Do you want to allow "Dawma" to use Face ID',
              });
              resolve(true);
            },
          },
        ]);
      });
    const biometric = await AsyncAlert();
    await AsyncStorage.setItem('biometric', JSON.stringify(biometric));
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
        return;
      }
      await biometricLogin();
      navigation.replace('PrivateStack', {
        screen: 'HomeStack',
        params: {screen: 'Home'},
      });
    } catch (err: any) {
      console.log('err', err);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <AppStatusBar />
      <View style={styles.icon}>
        <Icon name="cellphone" color={styles.icon.color} size={32} />
      </View>
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
