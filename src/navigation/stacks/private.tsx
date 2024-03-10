import {PrivateStackParamList} from '@navigation/navigationUtils';
import Search from '@navigation/screens/search';
import HomeStack from '@navigation/stacks/home';
import SettingsStack from '@navigation/stacks/settings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator<PrivateStackParamList>();

function PrivateStack() {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName={'HomeStack'}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'home'} size={size} color={color} />
          ),
          title: t('tabs.home'),
        }}
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'search'} size={size} color={color} />
          ),
          title: t('tabs.search'),
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'settings'} size={size} color={color} />
          ),
          title: t('tabs.settings'),
        }}
        name="SettingsStack"
        component={SettingsStack}
      />
    </Tab.Navigator>
  );
}

export default PrivateStack;
