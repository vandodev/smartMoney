import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
import {saveEntry} from '../../services/Entries';
import {deleteEntry} from '../../services/Entries';

const NewEntry = ({navigation}) => {
  const currentBalance = 2064.35;
  const entry = navigation.getParam('entry', {
    id: null,
    amount: '0.00',
    entryAt: new Date(),
  });
  const [amount, setAmount] = useState(`${entry.amount}`);

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }

    return false;
  };

  const onSave = () => {
    const data = {
      amount: parseFloat(amount),
    };
    console.log('NewEntry :: save ', data);
    saveEntry(data, entry);
    onClose();
  };

  const onDelete = () => {
    deleteEntry(entry);
    onClose();
  };
  const onClose = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />

      <View>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={text => setAmount(text)}
        />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Câmera" />
      </View>

      <View>
        <Button title="Adicionar" onPress={() => isValid() && onSave()} />
        <Button title="Excluir" onPress={onDelete} />
        <Button title="Canselar" onPress={onClose} />
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
