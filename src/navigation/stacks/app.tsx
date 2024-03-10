import {AppStackParamList} from '@navigation/navigationUtils';
import Welcome from '@navigation/screens/welcome';
import AuthStack from '@navigation/stacks/auth';
import PrivateStack from '@navigation/stacks/private';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<AppStackParamList>();
const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'PrivateStack'}
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="PrivateStack" component={PrivateStack} />
    </Stack.Navigator>
  );
};

export default AppStack;
