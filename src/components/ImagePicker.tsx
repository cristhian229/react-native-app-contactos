import { Button, View } from "react-native";
import React from "react";
import { selectImageFromGallery, takePhoto } from "../services/imagesServices";
import { Item } from "../screens/Flatlistscreen";


interface Props {
    handleImageChange: (image: string) => void;
    contact?: Item
}

const ImagePicker = ({handleImageChange}: Props) => {

    const handleTakeImage = async () => {
        const imageUri = await takePhoto();

        if(!imageUri) {return;}

        handleImageChange(imageUri);
    };

    const handleSelectImage = async () => {
        const imageUri = await selectImageFromGallery();

        if(!imageUri) {return;}

        handleImageChange(imageUri);
    };

    return (
        <View>
            <View>
                <Button title="Seleccionar imagen" onPress={handleSelectImage} />
                <Button title="Tomar foto" onPress={handleTakeImage} />
            </View>
        </View>
    );
};

export default ImagePicker;
