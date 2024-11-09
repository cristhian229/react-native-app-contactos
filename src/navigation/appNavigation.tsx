
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlatListScreen from '../screens/Flatlistscreen';
import DetailsScreen from '../screens/Details';
import AddContactScreen from '../screens/Addcontact';
import { LoginScreen } from '../screens/Login';
import { RegisterScreen } from '../screens/Register';









const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
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
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
  );
}

export default AppNavigation;
