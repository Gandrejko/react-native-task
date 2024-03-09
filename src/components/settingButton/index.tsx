import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

type SettingButtonProps = {
  title: string;
  iconName: string;
  onPress?: () => void;
};

const SettingButton = ({title, onPress, iconName}: SettingButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.setting}>
      <View style={styles.left}>
        <Icon name={iconName} color={styles.icon.color} size={32} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Icon
        name={'chevron-right'}
        color={styles.setting.borderColor}
        size={32}
      />
    </TouchableOpacity>
  );
};

export default SettingButton;
