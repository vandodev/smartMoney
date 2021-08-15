import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const EntrySummaryList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>

      <FlatList
        data={[
          {key: 'Alimentação: R$200,00'},
          {key: 'Combustível: R$12,00'},
          {key: 'Aluguel: R$1200,00'},
          {key: 'Lazer: R$250,00'},
          {key: 'Outros: R$1200,00'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntrySummaryList;
