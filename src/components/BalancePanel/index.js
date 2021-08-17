import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

import BalancePanelChart from './BalancePanelChart/';
import BalancePanelLabel from './BalancePanelLabel/';

// import { Container } from './styles';

const BalancePanel = ({currentBalance}) => {
  // const currentBalance = '2.064,35';
  // const saldo = '2.064,35';
  return (
    <View style={styles.container}>
      <BalancePanelLabel currentBalance={currentBalance} />
      {/* <BalancePanelLabel currentBalance={saldo} /> */}
      <BalancePanelChart />
      {/* <Button title="Adicionar" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BalancePanel;
