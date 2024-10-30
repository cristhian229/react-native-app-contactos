import * as React from 'react';
import { useState } from "react";
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Alert, TextInput } from "react-native";
import { Item } from "./Flatlistscreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePicker from '../components/ImagePicker';


const AddContactScreen = ({ navigation }: any) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');

    const handleAddContact = async () => {
      if (!name || !phone) {
        Alert.alert('Error', 'Por favor, completa al menos el nombre y el teléfono.');
        return;
      }

      const newContact: Item = {
        id: Date.now().toString(),
        name,
        phone,
        email,
        image,
      };

      try {
        const existingContacts = await AsyncStorage.getItem('contacts');
        const contacts = existingContacts ? JSON.parse(existingContacts) : [];
        contacts.push(newContact);
        await AsyncStorage.setItem('contacts', JSON.stringify(contacts));
        navigation.goBack(); // Regresa a la pantalla anterior
      } catch (error) {
        console.error(error);
      }
    };

    return (
        <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} >
        <ImagePicker handleImageChange={setImage} />
      </TouchableOpacity>
      <Button title="Agregar a Contactos" onPress={handleAddContact} />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 8,
    },
    button: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#f0f0f0',
    },
  });

  export default AddContactScreen;
