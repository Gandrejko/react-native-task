import {HomeStackParamList} from '@navigation/navigationUtils';
import Home from '@navigation/screens/home';
import Search from '@navigation/screens/search';
import Settings from '@navigation/screens/settings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator<HomeStackParamList>();

function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'home'} size={size} color={color} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'search'} size={size} color={color} />
          ),
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'settings'} size={size} color={color} />
          ),
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
}

export default HomeStack;
