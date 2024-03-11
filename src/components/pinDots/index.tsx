import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';

type PinDotsProps = {
  pin: number[];
};

const PinDots = ({pin}: PinDotsProps) => {
  const PIN_LENGTH = 5;

  return (
    <View style={styles.dots}>
      {Array(PIN_LENGTH)
        .fill(0)
        .map((_, i) => {
          return (
            <View
              key={i}
              style={[styles.dot, i < pin.length && styles.dotActive]}></View>
          );
        })}
    </View>
  );
};

export default PinDots;
