import BackButton from '@components/backButton';
import {SettingsStackParamList} from '@navigation/navigationUtils';
import Language from '@navigation/screens/language';
import Settings from '@navigation/screens/settings';
import Theme from '@navigation/screens/theme';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<SettingsStackParamList>();
const SettingsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Settings'}
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
        name="Settings"
        component={Settings}
      />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="Theme" component={Theme} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
