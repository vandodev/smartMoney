/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View, StyleSheet} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import Colors from '../../styles/Colors';

const Main = ({navigation}) => {
  const entriesGouped = [
    {key: '1', description: 'Alimentação:', amount: 2000},
    {key: '2', description: 'Combustível:', amount: 12000},
    {key: '3', description: 'Aluguel: ', amount: 32000},
    {key: '4', description: 'Lazer:', amount: 2000},
    {key: '5', description: 'Outros:', amount: 2000},
  ];

  return (
    <View style={styles.container}>
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />
      <EntrySummary entriesGouped={entriesGouped} />
      <EntryList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default Main;
