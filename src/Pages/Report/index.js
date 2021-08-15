import React from 'react';
import {StyleSheet, View, Button, Picker} from 'react-native';

import EntryLabel from '../../components/BalanceLabel';
import EntrySumary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = () => {
  return (
    <View style={styles.container}>
      <EntryLabel />
      <View>
        <Picker>
          <Picker.Item label="Todas as categorias"></Picker.Item>
        </Picker>
        <Picker>
          <Picker.Item label="Ultimos 7 dias"></Picker.Item>
        </Picker>
      </View>
      <EntrySumary />
      <EntryList />
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
