
/* eslint-disable no-trailing-spaces */
import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
import { ImageContainer } from '../atoms/imageContainer';
import { useFlatlistHook } from '../hooks/useFlatlistHook';



export interface Item {
    id: string;
    name: string;
    phone: string;
    email?: string;
    image?: string;
}


const FlatListScreen = ({ navigation }: any) => {

  const {data, deleteContact} = useFlatlistHook(); 
  
   
  const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.contacts}
    onPress={() => navigation.navigate('Details', { item: item, deleteContactFunction : deleteContact })}>
      <Text style={styles.text}>{item.name}</Text>
      <ImageContainer uri={item.image} size={50} />
    </TouchableOpacity>
  );
    
    

   
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Contactos</Text>
        </View>
        <TouchableOpacity  style={styles.button} onPress={() =>navigation.navigate('Add')}>
          <Text style={styles.textButton}>Agregar Contacto</Text>
        </TouchableOpacity>
      
      
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button title="login" onPress={() => navigation.navigate('Login')} />
      
      
      </View>
    );
};

export default FlatListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#091d26',
    flexDirection: 'column',
  },
  contacts:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#00001a',
      backgroundColor: '#091d26',
      alignItems: 'center',
        },
  button: {
            backgroundColor: '#AAC7D8', 
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 5,
            alignItems: 'center',
            elevation: 3,
            shadowOpacity: 0.2,
            shadowRadius: 3,
            color: '#091d26',

          },
  text:{
    color: '#E6E6E6',
    fontSize: 18,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 84,
  },
  title:{
    color: '#E6E6E6',
    fontSize: 42,
    fontWeight: 'bold',

  },
  textButton:{
    color: '#091d26',
    fontSize: 16,
  },
});
