import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { HomeProps } from "./Navigation";

const Home = ({ navigation }: HomeProps) => {
    return (
        <View style={styles.layout}>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Questions')} style={styles.button}>
                <Text>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'blue',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 25,
        marginTop: 20
    }
});

export default Home;