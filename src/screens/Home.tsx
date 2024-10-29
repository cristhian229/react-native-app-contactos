import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlatListScreen from './Flatlistscreen';


function HomeScreen({ navigation }: any) {
    const styles = StyleSheet.create({
        label: {
            textAlign: 'center',
            marginBottom: 12,
            fontSize: 38},
    });
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

export default HomeScreen;
