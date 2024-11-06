/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
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
      <Text>{item.name}</Text>
      <ImageContainer uri={item.image} size={50} />
    </TouchableOpacity>
  );
    
    

   
    return (
      <View style={styles.container}>
        <TouchableOpacity  style={styles.button} onPress={() =>navigation.navigate('Add')}>
          <Text style={{color: 'white'}}>Agregar Contacto</Text>
        </TouchableOpacity>
      
      
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
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  contacts:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#ccc',
      backgroundColor: 'oldlace',
      alignItems: 'center',
      color: 'black',
        },
  button: {
            backgroundColor: '#778899', 
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 5,
            alignItems: 'center',
            elevation: 3,
            shadowOpacity: 0.2,
            shadowRadius: 3,

          },
});
