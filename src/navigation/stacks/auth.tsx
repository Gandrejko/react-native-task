import BackButton from '@components/backButton';
import {AuthStackParamList} from '@navigation/navigationUtils';
import CreatePin from '@navigation/screens/createPin';
import Login from '@navigation/screens/login';
import Register from '@navigation/screens/register';
import RepeatPin from '@navigation/screens/repeatPin';
import Welcome from '@navigation/screens/welcome';
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
      <Stack.Screen
        options={{headerShown: false}}
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        options={{headerShown: false}}
        name="CreatePin"
        component={CreatePin}
      />
      <Stack.Screen name="RepeatPin" component={RepeatPin} />
    </Stack.Navigator>
  );
};

export default AuthStack;
