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
                        size={75}
                        style={styles.icon}
                        onPress={() => navigation.navigate('Add', { item })}
                    />
                    <Icon
                        name="trash"
                        size={75}
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
                    <Text style={styles.text}>Nombre: {item.name}</Text>
                    <Text style={styles.text}>Teléfono: {item.phone}</Text>
                    <Text style={styles.text}>Email: {item.email}</Text>
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
        backgroundColor: '#F5FCFF',
    },
    scrollContainer: {
        padding: 10,
        alignItems: 'center',
        flexGrow: 1,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 20,
    },
    icon: {
        color: '#192A51',
    },
    detailsContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        marginVertical: 5,
    },
    mapContainer: {
        width: '100%',
        height: 300,
        marginTop: 20,
    },
});

export default DetailsScreen;
