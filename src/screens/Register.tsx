import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axiosInstance from '../axios/axiosInstance';

export const RegisterScreen = ({ navigation }: any ) => {

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleRegistration = async () => {
    if(!username || !email || !password){
      Alert.alert('Error', 'Por favor, completa el email y la contraseña.');
      return;
    }
    setLoading(true);

    if(password !== passwordConfirmation){
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    try{
      const response = await axiosInstance.post('/api/auth/register', {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        Alert.alert('Éxito', 'Registro exitoso. Puedes iniciar sesión ahora.');
        navigation.navigate('Login');
      }

    }catch(error){
      console.error({error});
      Alert.alert('Error', 'Error al registrar');
    }finally{
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Regístrate</Text>
      <TextInput style={styles.input} placeholder="Username" onChangeText={(text) => setUsername(text)} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" onChangeText={(text) => setEmail(text)} />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry onChangeText={(text) => setPassword(text)} />
      <TextInput style={styles.input} placeholder="Confirmar Contraseña" secureTextEntry onChangeText={(text) => setPasswordConfirmation(text)} />
      <TouchableOpacity style={styles.button} onPress={handleRegistration} disabled={loading}>
        {loading ? (
          <Text style={styles.buttonText}>Cargando...</Text>
        ) : (<Text style={styles.buttonText}>Crear Cuenta</Text>)}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.registerLink}>ya tienes cuenta?</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
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
  registerLink: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});
