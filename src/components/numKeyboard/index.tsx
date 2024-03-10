import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type NumKeyboardProps = {
  onPress: (number: number | string) => void;
  onRemove: () => void;
};
const NumKeyboard = ({onPress, onRemove}: NumKeyboardProps) => {
  const {t} = useTranslation();
  return (
    <View style={styles.keyboard}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0].map((number, index) => (
        <TouchableOpacity
          onPress={() => onPress(number)}
          key={index}
          style={styles.button}>
          <Text style={styles.buttonText}>{number}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={onRemove} style={styles.button}>
        <Text>
          <Icon
            name="backspace-outline"
            color={styles.buttonText.color}
            size={32}
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NumKeyboard;
