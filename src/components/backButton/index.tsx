import {goBack} from '@navigation/navigationUtils';
import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const BackButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity onPress={goBack} {...props} style={styles.button}>
      <Icon name={'chevron-left'} color={'#000'} size={32} />
    </TouchableOpacity>
  );
};

export default BackButton;
