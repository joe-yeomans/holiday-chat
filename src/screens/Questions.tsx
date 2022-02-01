import React, { useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { useAppSelector, useAppDispatch, store } from "../app/store";
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

    useEffect(() => {
        dispatch(loadQuestions());
    }, []); 

    const addAnswer = (answer: IAnswer) => {
        //logic
    }

    if (isLoading) {
        return (
            <View style={styles.layout}>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <View style={styles.layout}>
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
        </View>
    )

}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'center',
        marginTop: 25,
        marginHorizontal: 10
    }
});

export default Questions;

