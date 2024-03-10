import AppStatusBar from '@components/appStatusBar';
import Button from '@components/button';
import {AppStackProps} from '@navigation/navigationUtils';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'expo-image';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import EFT1 from '@assets/icons/welcome/eft-1.svg';
import EFT2 from '@assets/icons/welcome/eft-2.svg';
import EFT3 from '@assets/icons/welcome/eft-3.svg';
import Estate1 from '@assets/icons/welcome/estate-1.svg';
import Estate2 from '@assets/icons/welcome/estate-2.svg';
import Estate3 from '@assets/icons/welcome/estate-3.svg';
import Lending1 from '@assets/icons/welcome/lending-1.svg';
import Lending2 from '@assets/icons/welcome/lending-2.svg';
import Lending3 from '@assets/icons/welcome/lending-3.svg';
import Commodities1 from '@assets/icons/welcome/commodities-1.svg';
import Commodities2 from '@assets/icons/welcome/commodities-2.svg';
import Commodities3 from '@assets/icons/welcome/commodities-3.svg';
import Crypto1 from '@assets/icons/welcome/crypto-1.svg';
import Crypto2 from '@assets/icons/welcome/crypto-2.svg';
import Crypto3 from '@assets/icons/welcome/crypto-3.svg';
import styles from './styles';

const Welcome = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<AppStackProps['navigation']>();
  return (
    <SafeAreaView style={styles.screen}>
      <AppStatusBar />
      <View style={styles.content}>
        <Image style={styles.bg} source={require('@assets/bg.png')} />
        <View style={styles.grow}>
          <View style={styles.column}>
            <View style={styles.block}></View>
            <View style={styles.section}>
              <View style={styles.icons}>
                <Estate1 />
                <Estate2 style={styles.middle} />
                <Estate3 />
              </View>
              <Text style={styles.label}>{t('welcome.efts')}</Text>
            </View>
            <View style={styles.section}>
              <View style={styles.icons}>
                <EFT1 />
                <EFT2 style={styles.middle} />
                <EFT3 />
              </View>
              <Text style={styles.label}>{t('welcome.efts')}</Text>
            </View>
          </View>
          <View style={[styles.column, {marginTop: 65}]}>
            <View style={styles.section}>
              <View style={styles.icons}>
                <Lending1 />
                <Lending2 style={styles.middle} />
                <Lending3 />
              </View>
              <Text style={styles.label}>{t('welcome.efts')}</Text>
            </View>
            <View style={styles.section}>
              <View style={styles.icons}>
                <Commodities1 />
                <Commodities2 style={styles.middle} />
                <Commodities3 />
              </View>
              <Text style={styles.label}>{t('welcome.efts')}</Text>
            </View>
            <View style={styles.section}>
              <View style={styles.icons}>
                <Crypto1 />
                <Crypto2 style={styles.middle} />
                <Crypto3 />
              </View>
              <Text style={styles.label}>{t('welcome.efts')}</Text>
            </View>
          </View>
        </View>
        <Button
          onPress={() => navigation.navigate('AuthStack', {screen: 'Login'})}
          text="Sign in"
          variant="outlined"
        />
        <Button
          onPress={() => navigation.navigate('AuthStack', {screen: 'Register'})}
          text="Sign up"
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
