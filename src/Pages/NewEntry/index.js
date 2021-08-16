import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';

const NewEntry = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Câmera" />
      </View>

      <View>
        <Button title="Adicionar" />
        <Button title="Canselar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderBottomColor: '#000',
    borderWidth: 1,
  },
});

export default NewEntry;
