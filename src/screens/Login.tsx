
import * as React from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axiosInstance from '../axios/axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginScreen = ({navigation}: any) => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleLogin = async () => {
    if(!email || !password){
      Alert.alert('Error', 'Por favor, completa el email y la contraseña.');
      return;
    }
    setLoading(true);

    try{
      const response = await axiosInstance.post('api/auth/login', {
        email,
        password,
      });
      const { email: userEmail, token} = response.data;

      console.log(userEmail, token);

      await AsyncStorage.setItem('userToken', token);
      navigation.navigate("Contactos");
    }catch(error){
      console.error(error);
      Alert.alert('Error credenciales incorrectas');
    }finally{
      setLoading(false);
    }
  };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}>Ingresa a tu cuenta</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        {loading ? (
          <Text style={styles.buttonText}>Cargando...</Text>
        ) : (
          <Text style={styles.buttonText}>Ingresar</Text>
        )}
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>¿No tienes cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerLink}>Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#091d26',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: '#777',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 50,
      marginBottom: 15,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      fontSize: 16,
      backgroundColor: '#f9f9f9',
    },
    button: {
      width: '100%',
      height: 50,
      backgroundColor: '#AAC7D8',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    registerContainer: {
      flexDirection: 'row',
      marginTop: 20,
    },
    registerText: {
      fontSize: 16,
      color: '#777',
    },
    registerLink: {
      fontSize: 16,
      color: '#4CAF50',
      fontWeight: 'bold',
    },
  });

