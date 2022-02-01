import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import IAnswer from "../interfaces/IAnswer";
import { getHolidays } from '../service/holidayService';
import IHoliday from '../interfaces/IHoliday';

interface Props {
    answers: IAnswer[];
    onClose: () => void;
}

const HolidayModal = ({ answers, onClose }: Props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [holidays, setHolidays] = useState<IHoliday[]>([]);

    useEffect(() => {
        loadHolidays();
    }, [])

    const loadHolidays = async () => {
        setIsLoading(true);
        const holidays = await getHolidays(answers);
        setHolidays(holidays);
        setIsLoading(false);
    }

    if (isLoading) {
        return (
            <View style={styles.layout}>
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        )
    }

    return (
        <View style={styles.layout}>
            <Text>Holidays</Text>
            <TouchableOpacity style={styles.button} onPress={onClose}>
                <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'orange',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 10,
        marginBottom: 30,
        paddingHorizontal: 75
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    loadingText: {
        color: 'black',
        fontWeight: 'bold',
        marginTop: 25
    }
})

export default HolidayModal;