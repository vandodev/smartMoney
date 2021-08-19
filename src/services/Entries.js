import {getRealm} from './Realm';
import {Alert} from 'react-native';

export const saveEntry = async value => {
  const realm = await getRealm();
  let data = {};
  const {amount} = value;
  try {
    realm.write(() => {
      data = {
        id: 'abc',
        amount: amount,
        entryAt: new Date(),
        isInit: false,
      };
      realm.create('Entry', data, true);
    });
    // console.log(data);
    console.log('saveEntry :: data: ' + JSON.stringify(data));
  } catch (error) {
    console.error(
      'saveEntry :: error on save object: ' + JSON.stringify(this.data),
    );
    Alert.alert('erro ao salvar os dados');
  }
  return data;
};
