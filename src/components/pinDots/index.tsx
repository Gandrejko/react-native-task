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
          const dotStyles = EStyleSheet.create({
            dot: {
              backgroundColor: i < pin.length ? '$primary' : '$secondary',
            },
          });
          return <View key={i} style={[styles.dot, dotStyles.dot]}></View>;
        })}
    </View>
  );
};

export default PinDots;
