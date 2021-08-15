import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

import BalancePanelChart from './BalancePanelChart/';
import BalancePanelLabel from './BalancePanelLabel/';

// import { Container } from './styles';

const BalancePanel = () => {
  return (
    <View style={styles.container}>
      <BalancePanelLabel />
      <BalancePanelChart />
      <Button title="Adicionar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BalancePanel;
