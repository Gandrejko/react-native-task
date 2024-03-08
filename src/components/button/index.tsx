import React, {ForwardRefRenderFunction, forwardRef, ReactElement} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import styles from './styles';
import * as variants from './variants';

type ButtonProps = TouchableOpacityProps & {
  variant?: 'contained' | 'outlined';
  containerStyles?: StyleProp<ViewStyle>;
  buttonStyles?: StyleProp<ViewStyle>;
  textContainerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  text: string;
  icon?: ReactElement;
};

const Button: ForwardRefRenderFunction<TouchableOpacity, ButtonProps> = (
  {
    variant = 'contained',
    buttonStyles,
    textStyles,
    containerStyles,
    textContainerStyles,
    icon,
    text,
    ...buttonProps
  },
  ref,
) => {
  const variantStyles = variants[variant];
  return (
    <TouchableOpacity
      ref={ref}
      style={[styles.btn, variantStyles.btn, buttonStyles]}
      {...buttonProps}>
      <View style={[styles.container, containerStyles]}>
        {icon}
        {text && (
          <View style={[styles.textView, textContainerStyles]}>
            <Text style={[styles.text, variantStyles.text, textStyles]}>
              {text}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default forwardRef(Button);
