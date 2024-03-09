import {HomeStackParamList} from '@navigation/navigationUtils';
import Home from '@navigation/screens/home';
import Search from '@navigation/screens/search';
import SettingsStack from '@navigation/stacks/settings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator<HomeStackParamList>();

function HomeStack() {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName={'SettingsStack'}
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
        name="Home"
        component={Home}
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

export default HomeStack;
