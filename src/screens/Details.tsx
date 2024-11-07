import * as React from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, Alert, StyleSheet, ScrollView } from 'react-native';
import { ImageContainer } from '../atoms/imageContainer';
import Mapa from '../mapview/map';
import { SafeAreaView } from 'react-native-safe-area-context';

function DetailsScreen({ route, navigation }: any) {
    const { item, deleteContactFunction } = route.params;

    const deleteContact = () => {
        deleteContactFunction(item.id);
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.iconsContainer}>
                    <Icon
                        name="create"
                        size={40}
                        style={styles.icon}
                        onPress={() => navigation.navigate('Add', { item })}
                    />
                    <Icon
                        name="trash"
                        size={40}
                        style={styles.icon}
                        onPress={() => {
                            Alert.alert(
                                'Eliminar Contacto',
                                '¿Estás seguro de que quieres eliminar este contacto?',
                                [
                                    { text: 'Cancelar' },
                                    { text: 'Eliminar', onPress: () => deleteContact() },
                                ]
                            );
                        }}
                    />
                </View>

                <View style={styles.detailsContainer}>
                    <ImageContainer uri={item.image} />
                        <Text style={styles.textTitle}>{item.name}</Text>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}><Icon name="call-outline" size={20} />  {item.phone}</Text>
                        <Text style={styles.text}><Icon name="at-outline" size={22} />  {item.email}</Text>
                    </View>
                </View>

                <View style={styles.mapContainer}>
                    <Mapa />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: '#091d26',
    },
    scrollContainer: {
        padding: 10,
        alignItems: 'center',
        flexGrow: 1,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
    },
    icon: {
        color: '#AAC7D8',
    },
    detailsContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    textContainer: {
        backgroundColor: '#091d26',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 20,
    },
    text: {
        fontSize: 18,
        marginVertical: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#e6e6e6',
    },
    textTitle:{
        marginTop: 20,
        fontSize: 30,
        color: '#e6e6e6',
    },
    mapContainer: {

        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
    },
});

export default DetailsScreen;
