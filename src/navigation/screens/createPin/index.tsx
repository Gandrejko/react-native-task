import AppStatusBar from '@components/appStatusBar';
import Button from '@components/button';
import NumKeyboard from '@components/numKeyboard';
import PinDots from '@components/pinDots';
import {AuthStackProps} from '@navigation/navigationUtils';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, View, Text} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const CreatePin = () => {
  const PIN_LENGTH = 5;
  const {t} = useTranslation();
  const navigation = useNavigation<AuthStackProps['navigation']>();
  const [pin, setPin] = useState<number[]>([]);

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
      <View style={styles.icon}>
        <Icon name="cellphone" color={styles.icon.color} size={32} />
      </View>
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
