import AuthWrapper from '@components/authWrapper';
import TextInput from '@components/textInput';
import {AppStackProps, AuthStackProps} from '@navigation/navigationUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';
import axios from 'axios/index';
import React from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';

export type LoginFormValues = {
  name: string;
  password: string;
};

const Login = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<AuthStackProps['navigation']>();
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<LoginFormValues>({
    defaultValues: {
      name: '',
      password: '',
    },
  });

  const {mutate} = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: LoginFormValues) =>
      axios.post('https://dummyjson.com/auth/login', {
        username: 'kminchelle',
        password: '0lelplR',
      }),
    onSuccess: data => {
      AsyncStorage.setItem('session', JSON.stringify(data.data));
      navigation.navigate('CreatePin');
    },
    onError: error => console.log(error),
  });

  const onSubmit: SubmitHandler<LoginFormValues> = data => {
    mutate(data);
  };

  return (
    <AuthWrapper
      onSubmit={handleSubmit(onSubmit)}
      title={t('auth.sign_in')}
      subtitle={t('auth.personal_account')}>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            label="Name"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            errorMessage={errors.name?.message}
          />
        )}
        name="name"
        rules={{
          required: 'Name is required',
          pattern: {value: /\w+/, message: 'Invalid name'},
        }}
      />
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            label="Password"
            secureTextEntry={true}
            errorMessage={errors.password?.message}
          />
        )}
        name="password"
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
          maxLength: {
            value: 64,
            message: 'Password must be at most 64 characters',
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
            message:
              'Password must contain a lowercase letter, an uppercase letter and a special character',
          },
        }}
      />
    </AuthWrapper>
  );
};

export default Login;
