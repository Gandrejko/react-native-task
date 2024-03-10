import BackButton from '@components/backButton';
import {HomeStackParamList} from '@navigation/navigationUtils';
import Home from '@navigation/screens/home';
import Post from '@navigation/screens/post';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

const Stack = createStackNavigator<HomeStackParamList>();

function HomeStack() {
  const {t} = useTranslation();
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        animationEnabled: false,
        headerShown: true,
        headerTitle: '',
        headerBackTitle: '',
        headerTransparent: true,
        headerLeft: BackButton,
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
}

export default HomeStack;
