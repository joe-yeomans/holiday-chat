import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { IQuestion } from "../interfaces/IQuestion";
import IAnswer from '../interfaces/IAnswer';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import BouncyCheckboxGroup, {
    ICheckboxButton,
} from "react-native-bouncy-checkbox-group";

interface Props {
    question: IQuestion;
    addAnswer: (answer: IAnswer) => void;
}

const SingleSelectQuestion = ({ question, addAnswer }: Props) => {
    const handleChange = (optionId: number) => {
        const answer: IAnswer = {
            questionId: question.id,
            questionType: question.questionType,
            singleSelectOption: optionId
        }
        addAnswer(answer);
    }

    const generateData = (): ICheckboxButton[] => {
        let returnArr: ICheckboxButton[] = [];
        question.singleSelectOptions?.map(({ id, text }) => {
            returnArr.push({ id, 
                text, 
                textStyle: {
                    textDecorationLine: "none"
                },
                style: {
                    marginTop: 10
                }
            });
        });
        return returnArr;
    }

    return (
        <View style={styles.layout}>
            <Text style={styles.text}>{question.question}</Text>
            <BouncyCheckboxGroup
                data={generateData()}
                onChange={(selected: ICheckboxButton) => {
                    handleChange(selected.id);
                }}
                style={{ flexDirection: "column" }}
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

export default SingleSelectQuestion;