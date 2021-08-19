/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import {saveEntry} from '../../services/Entries';

const Main = ({navigation}) => {
  const currentBalance = '2.064,35';

  const entriesGouped = [
    {key: '1', description: 'Alimentação:', amount: 2000},
    {key: '2', description: 'Combustível:', amount: 12000},
    {key: '3', description: 'Aluguel: ', amount: 32000},
    {key: '4', description: 'Lazer:', amount: 2000},
    {key: '5', description: 'Outros:', amount: 2000},
  ];

  const entries = [
    {key: '1', description: 'Padaria Asa Branca: ', amount: 12},
    {key: '2', description: 'Supermercado Isadora: ', amount: 42},
    {key: '3', description: 'Posto Ipiranga: ', amount: 172},
  ];

  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalance} />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
      <EntrySummary entriesGouped={entriesGouped} />
      <EntryList entries={entries} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Main;
