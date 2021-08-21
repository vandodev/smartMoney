import {getRealm} from './Realm';
import {Alert} from 'react-native';
import {getUUID} from '../services/UUID';

export const getEntries = async () => {
  const realm = await getRealm();

  const entries = realm.objects('Entry');

  console.log('getEntries :: entries', JSON.stringify(entries));

  return entries;
};
export const saveEntry = async (value, entry = {}) => {
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(() => {
      data = {
        id: value.id || entry.id || getUUID(),
        amount: value.amount || entry.amount,
        entryAt: value.entryAt || entry.entryAt,
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
