import {
  createNavigationContainerRef,
  NavigatorScreenParams,
  StackActions,
} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

export type AppStackParamList = {
  AppInit: undefined;
  Welcome: undefined;
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  PrivateStack: NavigatorScreenParams<PrivateStackParamList>;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  CreatePin: undefined;
  RepeatPin: undefined;
};

export type PrivateStackParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  Search: undefined;
  SettingsStack: NavigatorScreenParams<SettingsStackParamList>;
};

export type SettingsStackParamList = {
  Settings: undefined;
  Language: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Post: {
    postId: number;
  };
};

export type AppStackProps = StackScreenProps<AppStackParamList, 'Welcome'>;

export type AuthStackProps = StackScreenProps<AuthStackParamList, 'Login'>;

export type PrivateStackProps = StackScreenProps<
  PrivateStackParamList,
  'HomeStack'
>;

export type HomeStackProps = StackScreenProps<HomeStackParamList, 'Home'>;

export type SettingsStackProps = StackScreenProps<
  SettingsStackParamList,
  'Settings'
>;

export const navigationRef = createNavigationContainerRef<AppStackParamList>();

export function navigate(name: keyof AppStackParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export function replace(
  name: keyof AppStackParamList,
  params?: Record<string, any>,
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}
