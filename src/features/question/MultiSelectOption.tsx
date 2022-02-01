import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { IQuestion } from "../../interfaces/IQuestion";
import IAnswer from '../../interfaces/IAnswer';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import BouncyCheckboxGroup, {
    ICheckboxButton,
  } from "react-native-bouncy-checkbox-group";

interface Props {
    question: IQuestion;
    addAnswer: (answer: IAnswer) => void;
}

const MultiSelectQuestion = ({ question, addAnswer }: Props) => {
    const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

    const handleChange = () => {
        console.log('Hit');
        const answer: IAnswer = {
            questionId: question.id,
            questionType: question.questionType,
            selectedOptionIds: selectedOptions
        }
        addAnswer(answer);
    }

    useEffect(() => {
        if (selectedOptions.length > 0)
            handleChange();
    }, [selectedOptions])

    return (
        <View style={styles.layout}>
            <Text style={styles.text}>{question.question}</Text>
            {question.multiSelectOptions?.map(option => (
                <BouncyCheckbox
                    text={option.text}
                    onPress={(isChecked: boolean) => {
                        if (isChecked) {
                            setSelectedOptions(prev => [...prev, option.id])
                        } else {
                            setSelectedOptions(prev => prev.filter(opt => opt !== option.id));
                        }
                    }}
                    textStyle={{
                        textDecorationLine: 'none'
                    }}
                    style={{
                        marginTop: 10
                    }}
                />
            ))}
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

export default MultiSelectQuestion;