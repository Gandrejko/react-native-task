import {navigationRef} from '@navigation/navigationUtils';
import AppStack from '@navigation/stacks/app';
import {NavigationContainer} from '@react-navigation/native';
const Navigation = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Navigation;
