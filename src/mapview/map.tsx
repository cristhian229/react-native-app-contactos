import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 360,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',

  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

const Mapa = () => (
   <View style={styles.container}>
     <MapView
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
       <Marker
         coordinate={{
           latitude: 37.78825,
           longitude: -122.4324,
         }}
       />
     </MapView>
   </View>
);

export default Mapa;
