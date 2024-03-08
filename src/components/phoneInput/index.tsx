import React, {ForwardRefRenderFunction, forwardRef} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

import {IPhoneInputProps} from '@components/phoneInput/types';

const PhoneInput: ForwardRefRenderFunction<TextInput, IPhoneInputProps> = (
  {
    phone,
    placeholder,
    maxPhoneLength,
    autofocus,
    setPhone,
    placeholderColor,
    flag,
    onFlagPress,
    phoneInputStyles,
    error,
    errorViewStyles,
    errorTextStyles,
    countryCodeViewStyles,
    containerStyles,
    label,
    phoneContainerStyles,
    labelViewStyles,
    labelStyles,
  },
  ref,
) => {
  return (
    <View style={[styles.container, containerStyles]}>
      <View style={[styles.labelView, labelViewStyles]}>
        <Text style={[styles.label, labelStyles]}>{label}</Text>
      </View>
      <View
        style={[
          styles.row,
          styles.phoneView,
          phoneContainerStyles,
          Boolean(error) && styles.error,
        ]}>
        {Boolean(flag) && (
          <TouchableOpacity
            onPress={onFlagPress}
            style={[
              styles.codeView,
              countryCodeViewStyles,
              Boolean(error) && styles.error,
            ]}>
            {flag}
          </TouchableOpacity>
        )}

        <TextInput
          ref={ref}
          style={[styles.input, phoneInputStyles]}
          value={phone}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          onChangeText={setPhone}
          keyboardType={'number-pad'}
          maxLength={maxPhoneLength}
          autoFocus={autofocus}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
      </View>

      <View style={errorViewStyles}>
        <Text style={[styles.error, errorTextStyles]}>{error}</Text>
      </View>
    </View>
  );
};

export default forwardRef(PhoneInput);
