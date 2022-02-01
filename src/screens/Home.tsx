import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { HomeProps } from "./Navigation";

const Home = ({ navigation }: HomeProps) => {
    return (
        <View style={styles.layout}>
            <Text style={styles.titleText}>Find your perfect holiday!</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Questions')} style={styles.button}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'orange',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 12,
        paddingHorizontal: 75
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 35
    }
});

export default Home;