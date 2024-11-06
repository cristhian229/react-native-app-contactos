import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { selectImageFromGallery, takePhoto } from "../services/imagesServices";
import { ImageContainer } from "../atoms/imageContainer";
import { Item } from "../screens/Flatlistscreen";


interface Props {
    handleImageChange: (image: string) => void;
    contact?: Item;
}

const ImagePicker = ({handleImageChange, contact}: Props) => {

    const [image, setImage] = useState(contact?.image);

    const handleTakeImage = async () => {
        const imageUri = await takePhoto();

        if(!imageUri) {return;}

        setImage(imageUri);
        handleImageChange(imageUri);
    };

    const handleSelectImage = async () => {
        const imageUri = await selectImageFromGallery();

        if(!imageUri) {return;}

        setImage(imageUri);
        handleImageChange(imageUri);
    };

    return (
        <View>
            <View style={styles.container}>
                <ImageContainer uri={image} size={100} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSelectImage}>
                    <Text style={styles.buttonText}>Seleccionar imagen</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleTakeImage}>
                    <Text style={styles.buttonText}>Tomar foto</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 80,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      },
      button: {
        flex: 1,
        backgroundColor: '#778899',
        paddingVertical: 15,
        marginHorizontal: 5,
        borderRadius: 5,
        alignItems: 'center',
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginBottom: 15,
      },
      buttonText: {
        color: 'oldlace',
        fontSize: 15,
        fontWeight: 'bold',
      },
});

export default ImagePicker;
