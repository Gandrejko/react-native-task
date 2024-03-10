import {useNavigation} from '@react-navigation/native';
import {useQueryClient} from '@tanstack/react-query';
import * as SecureStore from 'expo-secure-store';
import {useCallback, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {restoreSession} from '@services/session';
import {AppStackProps} from '@navigation/navigationUtils';

const useSession = () => {
  const navigation = useNavigation<AppStackProps['navigation']>();
  const runUnauthorizedUserFlow = useCallback(() => {
    navigation.navigate('Welcome');
  }, []);

  const runAuthorizedUserFlow = useCallback(() => {
    navigation.navigate('PrivateStack', {
      screen: 'HomeStack',
      params: {
        screen: 'Home',
      },
    });
  }, []);

  useEffect(() => {
    const initFlow = async () => {
      try {
        await restoreSession();

        let pin = await SecureStore.getItemAsync('pin');
        if (!pin) {
          throw new Error('Pin not found');
        }
        console.log('session restored');
        runAuthorizedUserFlow();
      } catch {
        console.log('session not restored');
        await AsyncStorage.removeItem('session').catch(() => null);
        runUnauthorizedUserFlow();
      }
    };

    initFlow();
  }, [runAuthorizedUserFlow, runUnauthorizedUserFlow]);
};

export default useSession;
