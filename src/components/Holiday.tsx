import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import IHoliday from '../interfaces/IHoliday';

interface Props {
    holiday: IHoliday;
}

const Holiday = ({ holiday: { location, price, imageUrl, id, description } }: Props) => {
    return (
        <View key={id} style={styles.layout}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{ uri: imageUrl }}
                    style={styles.image}
                    resizeMode='stretch'
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>{location}</Text>
                <Text style={styles.descriptionText}>{description}</Text>
                <Text>Price: £{price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {   
        width: '100%',
        marginVertical: 12,
        paddingHorizontal: 10,
        paddingVertical: 8,
        shadowColor: 'gray',
        shadowRadius: 5,
        shadowOpacity: 0.4,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowOffset: { width: 0, height: 0 },
        flexDirection: 'row'
    },
    imageContainer: {
    },
    textContainer: {
        flex: 1,
        paddingLeft: 20,
        justifyContent: 'space-between'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    descriptionText: {
        color: 'lightgray',
        fontSize: 13
    }
});

export default Holiday;