import {StyleProp, ViewStyle, TextStyle} from 'react-native';
import {ReactElement} from 'react';

export type ICountryProps = {
  name: string;
  flag: string;
  code: string;
  dial_code: string;
};

export type IPhoneInputProps = {
  phone?: string;
  placeholder?: string;
  maxPhoneLength?: number;
  autofocus?: boolean;
  setPhone?: (value: string) => void;
  placeholderColor?: string;
  flag?: ReactElement;
  onFlagPress?: () => void;
  phoneInputStyles?: StyleProp<TextStyle>;
  error?: string;
  errorViewStyles?: StyleProp<ViewStyle>;
  errorTextStyles?: StyleProp<TextStyle>;
  countryCodeViewStyles?: StyleProp<ViewStyle>;
  containerStyles?: StyleProp<ViewStyle>;
  label?: string;
  phoneContainerStyles?: StyleProp<ViewStyle>;
  labelViewStyles?: StyleProp<TextStyle>;
  labelStyles?: StyleProp<TextStyle>;
};
