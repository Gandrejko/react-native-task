import BackButton from '@components/backButton';
import {AuthStackParamList} from '@navigation/navigationUtils';
import Login from '@navigation/screens/login';
import Register from '@navigation/screens/register';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<AuthStackParamList>();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        animationEnabled: false,
        headerShown: true,
        headerTitle: '',
        headerBackTitle: '',
        headerTransparent: true,
        headerLeft: BackButton,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
