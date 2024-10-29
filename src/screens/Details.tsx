/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';

function DetailsScreen({ route }: any) {
    const { item, deleteContactFunction } = route.params;
    const navigation = useNavigation();
    const deleteContact = () => {
        deleteContactFunction(item.id);
        navigation.goBack();
    };
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={{uri: item.image}} style={styles.image}/>
        <Text>Nombre: {item.name}</Text>
        <Text>Teléfono: {item.phone}</Text>
        <Text>Email: {item.email}</Text>
        <Button title="Eliminar" onPress={() => {
      Alert.alert(
        'Eliminar Contacto',
        '¿Estás seguro de que quieres eliminar este contacto?',
        [
          { text: 'Cancelar' },
          { text: 'Eliminar', onPress: () => deleteContact() },
        ]
      );
      }}/>
      </View>
    );
}


  const styles = StyleSheet.create({
    image: {
      width: 80,
      height: 80,
      borderRadius: 20,
      marginBottom: 15,
    },
  });

export default DetailsScreen;
