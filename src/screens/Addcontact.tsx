import * as React from 'react';
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Alert, TextInput } from "react-native";
import { Item } from "./Flatlistscreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePicker from '../components/ImagePicker';


const AddContactScreen = ({ navigation, route }: any) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [contactId, setContactId] = useState<string | null>(null);

    React.useEffect(() => {
      if (route.params?.item){
        const { item } = route.params;
        setName(item.name);
        setPhone(item.phone);
        setEmail(item.email);
        setImage(item.image);
        setContactId(item.id);
        setEditMode(true);
      }
    }, [route.params]);


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

        if (editMode) {
          const contactIndex = contacts.findIndex((contact: any) => contact.id === contactId);
        if (contactIndex !== -1) {
          contacts[contactIndex] = newContact;
        }
      } else {
        const exists = contacts.some((contact: any) => contact.phone === phone);
        if (exists) {
          Alert.alert('Error', 'Ya existe un contacto con este número de teléfono.');
          return;
        }
        contacts.push(newContact);
        }
        await AsyncStorage.setItem('contacts', JSON.stringify(contacts));
        navigation.navigate('Contactos');
      } catch (error) {
        console.error(error);
      }
    };

    return (
        <View style={styles.container}>
        <ImagePicker handleImageChange={setImage} contact={route.params?.item} />
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
      <TouchableOpacity onPress={handleAddContact} style={styles.button} >
        <Text style={styles.buttonText}>Añadir</Text>
      </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 8,
      color: 'black',
    },
    button: {
      backgroundColor: '#778899',
      paddingVertical: 15,
      marginHorizontal: 5,
      borderRadius: 5,
      alignItems: 'center',
      elevation: 3,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,

    },
    buttonText: {
      color: 'oldlace',
      fontSize: 15,
      fontWeight: 'bold',
    },
  });

  export default AddContactScreen;
