import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BalanceLabel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo atual</Text>
      <Text style={styles.value}>Rs200,00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
  },
  label: {fontSize: 12},
  value: {fontSize: 18},
});

export default BalanceLabel;
