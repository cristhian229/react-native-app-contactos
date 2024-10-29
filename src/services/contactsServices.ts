import AsyncStorage from '@react-native-async-storage/async-storage';
import { Item } from '../screens/Flatlistscreen';

export const saveContacts = async (contacts: Item[]) => {
    try {
      const jsonValue = JSON.stringify(contacts);
      await AsyncStorage.setItem('contacts', jsonValue);
    } catch (e) {
      console.error(e);
    }
};

export const getContacts = async () => {
    try{
        const contacts = await AsyncStorage.getItem('contacts');
        return contacts != null ? JSON.parse(contacts) : [];
    } catch (error) {
        console.error('Error getting contacts', error);
        return [];
    }
};

export const deleteContact = async (contact: Item) => {
    try {
        const contacts = await getContacts();
        const updatedContacts = contacts.filter((item: Item) => item.id !== contact.id);
        await saveContacts(updatedContacts);

      } catch (error) {
        console.error('Error deleting contacts', error);
      }
};
