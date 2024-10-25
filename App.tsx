/* eslint-disable react-native/no-inline-styles */

import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Ionicons';


interface Item {
  id: string;
  name: string;
  phone: string;
  email?: string;
  image?: string;
}


const DATA: Item[] = [
  {id: '1', name: 'Catalina Grisales', phone: '+34 6668887777', email: 'catalina@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
  {id: '2', name: 'Juan Martinez', phone: '+34 6668887777', email: 'juan@gmail.com', image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg'},
  {id: '3', name: 'Maria Perez', phone: '+34 6668887777', email: 'maria@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
  {id: '4', name: 'Pedro Maloy', phone: '+34 6668887777', email: 'pedro@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
  {id: '5', name: 'Sofia Ramirez', phone: '+34 6668888888', email: 'sofia@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
  {id: '6', name: 'Diego Torres', phone: '+34 6668889999', email: 'diego@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
  {id: '7', name: 'Laura Gomez', phone: '+34 6668877777', email: 'laura@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
  {id: '8', name: 'Carlos Ruiz', phone: '+34 6668866666', email: 'carlos@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
  {id: '9', name: 'Ana Morales', phone: '+34 6668855555', email: 'ana@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
  {id: '10', name: 'Fernando Castillo', phone: '+34 6668844444', email: 'fernando@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
  {id: '11', name: 'Claudia Ortiz', phone: '+34 6668833333', email: 'claudia@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
  {id: '12', name: 'Julian Salazar', phone: '+34 6668822222', email: 'julian@gmail.com',image: 'https://habrastorage.org/web/21c/544/60f/21c54460f6e4473cab334c14b7394e18.jpg' },
];





const FlatListScreen = ({ navigation }: any) => {
  const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.contacts}
    onPress={() => navigation.navigate('Details', { item: item })}>
      <Text>{item.name}</Text>
      <Text>{item.phone}</Text>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};


function HomeScreen({ navigation }: any) {
  return (
    <View>
    <SafeAreaView>
      <View >
        <Text style= {styles.label}>Contactos </Text>
        <FlatListScreen navigation={navigation}/>
      </View>
    </SafeAreaView>
    </View>
  );
}

function DetailsScreen({ route }: any) {
  const { item } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={{uri: item.image}} style={styles.image}/>
      <Text>Nombre: {item.name}</Text>
      <Text>Teléfono: {item.phone}</Text>
      <Text>Email: {item.email}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'},
  lista:{
      alignItems: 'center',
      justifyContent: 'center',
      },
  contacts:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'oldlace',
        },
  label: {
    textAlign: 'center',
    marginBottom: 12,
    fontSize: 38},
  image: {
    width: 80,
    height: 80,
    borderRadius: 20,
    marginBottom: 15,
  },
});

export default App;
