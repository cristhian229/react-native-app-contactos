

import * as React from 'react';
import AppNavigation from './src/navigation/appNavigation';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthNavigation from './src/navigation/authNavigation';










function App() {
  React.useEffect(() => {
    const getToken = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      console.log(userToken);
    };
    getToken();
  }, []);

  return (
    <NavigationContainer>
      {false ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}

export default App;
