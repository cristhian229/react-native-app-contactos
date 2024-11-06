import { useEffect, useState } from "react";
import { Item } from "../screens/Flatlistscreen";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const useFlatlistHook = () => {
    const [data, setData] = useState<Item[]>([]);
  const focused = useIsFocused();

  useEffect(() => {
    loadContacts();
  }, [focused]);


  const loadContacts = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('contacts');
      if (jsonValue != null) {
        const dataResponse = JSON.parse(jsonValue);
        setData(dataResponse);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const saveContacts = async (contacts: Item[]) => {
    try {
      const jsonValue = JSON.stringify(contacts);
      await AsyncStorage.setItem('contacts', jsonValue);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteContact = (id: string) => {
    const updatedData = data.filter(contact => contact.id !== id);
    setData(updatedData);
    saveContacts(updatedData);
  };

  return {deleteContact, data, saveContacts};
};


