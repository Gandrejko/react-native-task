import {useAppSelector} from '@hooks/redux';
import {Buffer} from 'buffer';

export const restoreSession = async () => {
  const token = useAppSelector(state => state.profile.token);
  console.log(token);
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
