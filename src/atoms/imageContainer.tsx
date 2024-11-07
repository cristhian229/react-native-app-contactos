
import * as React from 'react';
import {  Image, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


interface Props {

    uri?: string;
    size?: number;
}

export const ImageContainer = ({ uri, size = 150 }: Props) => {

    return (
        <View style={[styles.imageContainer, { width: size, height: size }]}>

        {
            uri
            ? <Image source={{uri}} style={styles.image}
              resizeMode="contain" />
            : <Icon name="person" size={size} style={styles.icon} />
        }

    </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 100,
        overflow: 'hidden',
        backgroundColor: '#D5C6E0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
      icon:{
        color: '#192A51',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
});
