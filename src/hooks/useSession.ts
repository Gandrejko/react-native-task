import {useAppDispatch} from '@hooks/redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {resetProfile} from '@store/profileSlice';
import * as SecureStore from 'expo-secure-store';
import {useCallback, useEffect} from 'react';
import {restoreSession} from '@services/session';
import {AppStackProps} from '@navigation/navigationUtils';

const useSession = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<AppStackProps['navigation']>();
  const runUnauthorizedUserFlow = useCallback(() => {
    navigation.replace('AuthStack', {screen: 'Welcome'});
  }, []);

  const runAuthorizedUserFlow = useCallback(() => {
    navigation.replace('CheckPin');
  }, []);

  useEffect(() => {
    const initFlow = async () => {
      try {
        await restoreSession();

        let pin = await SecureStore.getItemAsync('pin');
        if (!pin) {
          throw new Error('Pin not found');
        }

        runAuthorizedUserFlow();
      } catch {
        // dispatch(resetProfile());
        runUnauthorizedUserFlow();
      }
    };

    initFlow();
  }, [runAuthorizedUserFlow, runUnauthorizedUserFlow]);
};

export default useSession;
