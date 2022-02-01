import React from "react";
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Home";
import Questions from '../screens/Questions';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    Questions: undefined;
}

export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen component={Home} name='Home' />
            <Stack.Screen component={Questions} name='Questions' />
        </Stack.Navigator>
    )
}

export default Navigator;