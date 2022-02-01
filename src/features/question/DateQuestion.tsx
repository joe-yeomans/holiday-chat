import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { IQuestion } from "../../interfaces/IQuestion";
import IAnswer from '../../interfaces/IAnswer';

interface Props {
    question: IQuestion;
    addAnswer: (answer: IAnswer) => void;
}

const DateQuestion = ({ question, addAnswer }: Props) => {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date());

    return (
        <View style={styles.layout}>
            <Text style={styles.text}>{question.question}</Text>
            <Button title="Open" onPress={() => setOpen(true)} />
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
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
    }
});

export default DateQuestion;