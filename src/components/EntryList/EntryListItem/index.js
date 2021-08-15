import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const EntryListItem = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Ultimos lançamentos
      </Text>

      <FlatList
        data={[
          {key: 'Padaria: R$200,00'},
          {key: 'Supermercado: R$1200,00'},
          {key: 'Posto: R$120,00'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}></FlatList>
    </View>
  );
};

export default EntryListItem;

const styles = StyleSheet.create({});
