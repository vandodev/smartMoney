import {getRealm} from './Realm';
import {Alert} from 'react-native';

export const saveEntry = async () => {
  const realm = await getRealm();
  let data = {};
  try {
    realm.write(() => {
      data = {
        id: 'abc',
        amount: 12.4,
        entryAt: new Date(),
        isInit: false,
      };
      realm.create('Entry', data, true);
    });
    // console.log(data);
    console.log('saveEntry :: data: ', data);
  } catch (error) {
    console.error(
      'saveEntry :: error on save object: ' + JSON.stringify(this.date),
    );
    Alert.alert('erro ao salvar os dados');
  }
  return data;
};
