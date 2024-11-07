

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddContactScreen from './src/screens/Addcontact';
import DetailsScreen from './src/screens/Details';
import FlatListScreen from './src/screens/Flatlistscreen';









const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{ headerShown: false }} name="Contactos" component={FlatListScreen} />
        <Stack.Screen options={{
    headerStyle: { backgroundColor: '#091d26' },
    headerTintColor: '#ffffff',
  }}  name="Details" component={DetailsScreen} />
        <Stack.Screen options={{
    headerStyle: { backgroundColor: '#091d26' },
    headerTintColor: '#ffffff',
  }} name="Add" component={AddContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





export default App;
