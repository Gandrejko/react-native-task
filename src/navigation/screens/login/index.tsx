import AuthWrapper from '@components/authWrapper';
import TextInput from '@components/textInput';
import React from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';

export type LoginFormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const {t} = useTranslation();
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginFormValues> = data => {
    console.log(data);
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
            label="E-mail"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            errorMessage={errors.email?.message}
          />
        )}
        name="email"
        rules={{
          required: 'Email is required',
          pattern: {value: /\S+@\S+\.\S+/, message: 'Invalid email'},
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
