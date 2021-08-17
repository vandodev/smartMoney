import React from 'react';
import {StyleSheet, View, Button, Picker} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = () => {
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
  const currentBalance = 3364.35;
  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />
      <View>
        <Picker>
          <Picker.Item label="Todas as categorias"></Picker.Item>
        </Picker>
        <Picker>
          <Picker.Item label="Ultimos 7 dias"></Picker.Item>
        </Picker>
      </View>
      <EntrySummary entriesGouped={entriesGouped} />
      <EntryList entries={entries} />
      <View>
        <Button title="Entrar" />
        <Button title="Fechar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 10,
  },
});

export default Report;
