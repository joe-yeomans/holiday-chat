import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { IQuestion } from "../interfaces/IQuestion";
import IAnswer from '../interfaces/IAnswer';
import { questionType } from "../enum/questionType";

interface Props {
    question: IQuestion;
    addAnswer: (answer: IAnswer) => void;
}

const NumberQuestion = ({ question, addAnswer }: Props) => {
    const [answer, setAnswer] = useState('');
 
    const handleType = (text: string) => {
        //call addAnswer()
        const number = Number(text);

        if (!isNaN(number)) {
            setAnswer(text);

            const answer: IAnswer = {
                questionId: question.id,
                questionType: question.questionType,
                selectedNumber: number
            }

            addAnswer(answer);
        }
    }

    return (
        <View style={styles.layout}>
            <Text style={styles.text}>{question.question}</Text>
            <TextInput
                placeholder='Answer...'
                value={answer}
                onChangeText={text => handleType(text)}
                style={styles.textInput}
                keyboardType='number-pad'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        padding: 10,
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 8
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

export default NumberQuestion