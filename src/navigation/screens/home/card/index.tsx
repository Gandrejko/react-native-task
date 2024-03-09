import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

type CardProps = {
  stepsCount: number;
  title: string;
  cardStyle?: any;
};

const Card = ({title, stepsCount, cardStyle}: CardProps) => {
  const {t} = useTranslation();
  return (
    <View style={[styles.card, cardStyle]}>
      <View style={styles.header}>
        <View style={styles.icon}></View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.steps}>
          {stepsCount} {t('home.steps')}
        </Text>
        <Icon name={'arrow-right'} size={32} />
      </View>
    </View>
  );
};

export default Card;
