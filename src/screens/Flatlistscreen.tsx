/* eslint-disable no-trailing-spaces */
import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
import  { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';


export interface Item {
    id: string;
    name: string;
    phone: string;
    email?: string;
    image?: string;
}

// const DATA: Item[] = [
//     {id: '1', name: 'Catalina Grisales', phone: '+34 6668887777', email: 'catalina@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
//     {id: '2', name: 'Juan Martinez', phone: '+34 6668887777', email: 'juan@gmail.com', image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg'},
//     {id: '3', name: 'Maria Perez', phone: '+34 6668887777', email: 'maria@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
//     {id: '4', name: 'Pedro Maloy', phone: '+34 6668887777', email: 'pedro@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
//     {id: '5', name: 'Sofia Ramirez', phone: '+34 6668888888', email: 'sofia@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
//     {id: '6', name: 'Diego Torres', phone: '+34 6668889999', email: 'diego@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
//     {id: '7', name: 'Laura Gomez', phone: '+34 6668877777', email: 'laura@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
//     {id: '8', name: 'Carlos Ruiz', phone: '+34 6668866666', email: 'carlos@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
//     {id: '9', name: 'Ana Morales', phone: '+34 6668855555', email: 'ana@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
//     {id: '10', name: 'Fernando Castillo', phone: '+34 6668844444', email: 'fernando@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
//     {id: '11', name: 'Claudia Ortiz', phone: '+34 6668833333', email: 'claudia@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
//     {id: '12', name: 'Julian Salazar', phone: '+34 6668822222', email: 'julian@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
// ];

const FlatListScreen = ({ navigation }: any) => {
  const [data, setData] = useState<Item[]>([]);
  const focused = useIsFocused();

  useEffect(() => {
    loadContacts();
  }, [focused]);


  const loadContacts = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('contacts');
      console.log(JSON.stringify({jsonValue}, null, 2));
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
   
  const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.contacts}
    onPress={() => navigation.navigate('Details', { item: item, deleteContactFunction : deleteContact })}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
    
    

   
    return (
      <View>
        <Button title="Agregar Contacto" onPress={() =>
          navigation.navigate('Add')
        } />
      
      
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      
      
      </View>
    );
};

export default FlatListScreen;

const styles = StyleSheet.create({
  contacts:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#ccc',
      backgroundColor: 'oldlace',
          },
});
