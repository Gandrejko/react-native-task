import {AppStackParamList} from '@navigation/navigationUtils';
import Welcome from '@navigation/screens/welcome';
import AuthStack from '@navigation/stacks/auth';
import HomeStack from '@navigation/stacks/home';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<AppStackParamList>();
const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'HomeStack'}
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  );
};

export default AppStack;
