import AuthWrapper from '@components/authWrapper';
import TextInput from '@components/textInput';
import React from 'react';
import {useTranslation} from 'react-i18next';

const Login = () => {
  const {t} = useTranslation();
  return (
    <AuthWrapper
      title={t('auth.sign_in')}
      subtitle={t('auth.personal_account')}>
      <TextInput label="E-mail" textContentType="emailAddress" />
      <TextInput
        label="Password"
        textContentType="password"
        secureTextEntry={true}
      />
    </AuthWrapper>
  );
};

export default Login;