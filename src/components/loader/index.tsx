import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={'skyblue'} size={'large'} />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    ...EStyleSheet.absoluteFillObject,
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
