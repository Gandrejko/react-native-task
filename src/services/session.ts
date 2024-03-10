import AsyncStorage from '@react-native-async-storage/async-storage';
import {Buffer} from 'buffer';

export const restoreSession = async () => {
  const session = await AsyncStorage.getItem('session');
  if (!session) {
    throw new Error('Session not found');
  }
  const {token} = JSON.parse(session);
  const parts = token
    .split('.')
    .map((part: string) =>
      Buffer.from(
        part.replace(/-/g, '+').replace(/_/g, '/'),
        'base64',
      ).toString(),
    );
  const jwt = JSON.parse(parts[1]);

  // check if previous JWT token expired
  if (Date.now() >= jwt.exp * 1000) {
    throw new Error('Session expired');
  }
};
