/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, StyleSheet, Text, View, FlatList} from 'react-native';

const App = () => {
  addEntry = () => {
    alert('Abrir tela');
  };

  return (
    <View style={{padding: 10}}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Saldo: 2.102,45
      </Text>

      <Button onPress={addEntry} title="Adicionar"></Button>

      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Categorias
      </Text>

      <FlatList
        data={[
          {key: 'Alimentação: R$200,00'},
          {key: 'Combustível: R$12,00'},
          {key: 'Aluguel: R$1200,00'},
          {key: 'Lazer: R$250,00'},
          {key: 'Outros: R$1200,00'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}></FlatList>

      {/* <Text>Alimentação: R$200,00</Text>
      <Text>Combustível: R$12,00</Text>
      <Text>Aluguel: R$1200,00</Text>
      <Text>Lazer: R$250,00</Text>
      <Text>Outros: R$1200,00</Text> */}

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

const styles = StyleSheet.create({});

export default App;
