import React, {ForwardRefRenderFunction, forwardRef} from 'react';
import {
  View,
  TextInput,
  Text,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import styles from './styles';

export type InputProps = TextInputProps & {
  containerStyles?: StyleProp<ViewStyle>;
  inputStyles?: StyleProp<TextStyle>;
  errorMessage?: string;
  label?: string;
};

const Input: ForwardRefRenderFunction<TextInput, InputProps> = (
  {label, containerStyles, inputStyles, errorMessage, ...inputProps},
  ref,
) => {
  return (
    <View style={[styles.inputContainer, containerStyles]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        ref={ref}
        placeholderTextColor={styles.placeholder.color}
        style={[styles.input, inputStyles, errorMessage && styles.error]}
        {...inputProps}
      />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export default forwardRef(Input);
