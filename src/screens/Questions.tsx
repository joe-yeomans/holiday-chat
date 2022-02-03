import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal } from 'react-native';
import IAnswer from "../interfaces/IAnswer";
import TextQuestion from "../components/TextQuestion";
import { questionType } from "../enum/questionType";
import NumberQuestion from "../components/NumberQuestion";
import SingleSelectQuestion from "../components/SingleSelectQuestion";
import MultiSelectQuestion from "../components/MultiSelectOption";
import DateQuestion from "../components/DateQuestion";
import { getQuestions } from '../service/questionService';
import { IQuestion } from "../interfaces/IQuestion";
import HolidayModal from "../components/HolidayModal";
 
const Questions = () => {
    const [answers, setAnswers] = useState<IAnswer[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [questions, setQuestions] = useState<IQuestion[]>([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        loadQuestions();
    }, []);
    
    const loadQuestions = async () => {
        setIsLoading(true);
        const questions = await getQuestions();
        setQuestions(questions);
        setIsLoading(false);
    }

    const onClose = () => setShowModal(false);

    const addAnswer = (answer: IAnswer) => {
        let array = answers;

        array = array.filter(a => {
            return a.questionId !== answer.questionId &&
                a.questionType !== answer.questionType
        });

        if (answer.textAnswer ||
            answer.selectedNumber || 
            answer.selectedOptionIds || 
            answer.singleSelectOption ) {
                array.push(answer);
            }
        
        setAnswers(array);
    }

    useEffect(() => {
        console.log(answers);
    }, [answers])

    if (isLoading) {
        return (
            <View style={styles.layout}>
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        )
    }

    return (
        <View style={styles.layout}>
            <Modal animationType='slide' onRequestClose={onClose} visible={showModal}>
                <HolidayModal answers={answers} onClose={onClose} />
            </Modal>
            <ScrollView>
                {questions && questions.map(question => {
                    switch (question.questionType) {
                        case questionType.text: return <TextQuestion question={question} addAnswer={addAnswer} key={question.id}/>
                        case questionType.number: return <NumberQuestion question={question} addAnswer={addAnswer} key={question.id}/>
                        case questionType.singleSelect: return <SingleSelectQuestion question={question} addAnswer={addAnswer} key={question.id}/>
                        case questionType.multiSelect: return <MultiSelectQuestion question={question} addAnswer={addAnswer} key={question.id}/>
                        case questionType.date: return <DateQuestion question={question} addAnswer={addAnswer} key={question.id}/>
                        default: return null;
                    }
                })}
            <TouchableOpacity style={styles.button} onPress={() => setShowModal(true)}>
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
        marginHorizontal: 10
    },
    button: {
        backgroundColor: 'orange',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 10,
        marginBottom: 30
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

