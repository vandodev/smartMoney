import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/Colors';
import BalancePanelChart from './BalancePanelChart/';
import BalancePanelLabel from './BalancePanelLabel/';

const BalancePanel = ({currentBalance}) => {
  return (
    <LinearGradient
      colors={[Colors.violet, Colors.blue]}
      style={styles.container}>
      <BalancePanelLabel currentBalance={currentBalance} />
      <BalancePanelChart />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BalancePanel;
