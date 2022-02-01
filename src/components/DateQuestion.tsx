import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { IQuestion } from "../interfaces/IQuestion";
import IAnswer from '../interfaces/IAnswer';
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
    question: IQuestion;
    addAnswer: (answer: IAnswer) => void;
}

const DateQuestion = ({ question, addAnswer }: Props) => {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date());
    const [dateText, setDateText] = useState('');

    const formatDate = () => {
        const day = date.getDay();
        const month = date.getMonth();
        const year = date.getFullYear();

        setDateText(`${day} / ${month} / ${year}`);
    }

    return (
        <View style={styles.layout}>
            <Text style={styles.text}>{question.question}</Text>
            <TextInput
                style={styles.textInput}
                value={dateText}
                editable={false} 
            />
            <TouchableOpacity style={styles.button} onPress={() => setOpen(true)}>
                <Text style={styles.buttonText}>Select Date</Text>
            </TouchableOpacity>
            <DatePicker
                modal
                mode='date'
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false);
                    setDate(date);
                    formatDate();
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        padding: 10,
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 8,
        width: '100%'
    },
    textInput: {
        width: 350,
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'orange'
    },
    text: {
        paddingBottom: 5
    },
    button: {
        backgroundColor: 'orange',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 10
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default DateQuestion;