import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useAppSelector, useAppDispatch } from "../app/store";
import { selectQuestions, loadQuestions, selectIsLoading } from "../features/question/questionsSlice";
import IAnswer from "../interfaces/IAnswer";
import TextQuestion from "../features/question/TextQuestion";
import { questionType } from "../enum/questionType";
import NumberQuestion from "../features/question/NumberQuestion";
import SingleSelectQuestion from "../features/question/SingleSelectQuestion";
import MultiSelectQuestion from "../features/question/MultiSelectOption";
import DateQuestion from "../features/question/DateQuestion";

const Questions = () => {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(selectIsLoading);
    const questions = useAppSelector(selectQuestions);
    const [answers, setAnswers] = useState<IAnswer[]>([]);

    useEffect(() => {
        dispatch(loadQuestions());
    }, []); 

    const addAnswer = (answer: IAnswer) => {
        setAnswers(prev => {
            return prev.filter(a => {
                return a.questionId !== answer.questionId &&
                    a.questionType !== answer.questionType
            })
        })

        if (answer.textAnswer ||
            answer.selectedNumber || 
            answer.selectedOptionIds?.length !== 0 || 
            answer.singleSelectOption) {
                setAnswers(prev => [...prev, answer]);
            }
        //console.log(answers);
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
            <ScrollView>
                {questions.map(question => {
                    switch (question.questionType) {
                        case questionType.text: return <TextQuestion question={question} addAnswer={addAnswer}/>
                        case questionType.number: return <NumberQuestion question={question} addAnswer={addAnswer} />
                        case questionType.singleSelect: return <SingleSelectQuestion question={question} addAnswer={addAnswer} />
                        case questionType.multiSelect: return <MultiSelectQuestion question={question} addAnswer={addAnswer} />
                        case questionType.date: return <DateQuestion question={question} addAnswer={addAnswer} />
                        default: return null;
                    }
                })}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>View Holiday's</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 50
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
    },
    loadingText: {
        color: 'black',
        fontWeight: 'bold',
        marginTop: 25
    }
});

export default Questions;

