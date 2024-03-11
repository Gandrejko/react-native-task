import AsyncStorage from '@react-native-async-storage/async-storage';
import {Buffer} from 'buffer';

export const restoreSession = async () => {
  const token = await AsyncStorage.getItem('token');

  if (!token) {
    throw new Error('Token not found');
  }
  const parts = token
    .split('.')
    .map((part: string) =>
      Buffer.from(
        part.replace(/-/g, '+').replace(/_/g, '/'),
        'base64',
      ).toString(),
    );
  const jwt = JSON.parse(parts[1]);

  if (Date.now() >= jwt.exp * 1000) {
    throw new Error('Session expired');
  }
};
