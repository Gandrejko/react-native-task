import {AppStackParamList} from '@navigation/navigationUtils';
import AppInit from '@navigation/screens/appInit';
import CheckPin from '@navigation/screens/checkPin';
import Welcome from '@navigation/screens/welcome';
import AuthStack from '@navigation/stacks/auth';
import PrivateStack from '@navigation/stacks/private';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<AppStackParamList>();
const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'AppInit'}
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}>
      <Stack.Screen name="AppInit" component={AppInit} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="CheckPin" component={CheckPin} />
      <Stack.Screen name="PrivateStack" component={PrivateStack} />
    </Stack.Navigator>
  );
};

export default AppStack;
