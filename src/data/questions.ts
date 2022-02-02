import { IQuestion } from "../interfaces/IQuestion";
import { questionType } from "../enum/questionType";

const questions: IQuestion[] = [
    {
        id: 1,
        question: 'What is your name?',
        questionType: questionType.text
    },
    {
        id: 3,
        question: 'How many nights?',
        questionType: questionType.number
    },
    {
        id: 4,
        question: 'Where do you want to stay?',
        questionType: questionType.singleSelect,
        singleSelectOptions: [
            {
                id: 1,
                text: 'All Inclusive'
            },
            {
                id: 2,
                text: 'Apartment'
            },
            {
                id: 3,
                text: 'Bed & Breakfast'
            }
        ]
    },
    {
        id: 5,
        question: 'What kind of holiday do you want?',
        questionType: questionType.multiSelect,
        multiSelectOptions: [
            {
                id: 1,
                text: 'Beach'
            },
            {
                id: 2,
                text: 'Winter'
            },
            {
                id: 3,
                text: 'City'
            }
        ]
    },
    {
        id: 6,
        question: 'What countries would you like to visit?',
        questionType: questionType.multiSelect,
        multiSelectOptions: [
            {
                id: 1,
                text: 'France'
            },
            {
                id: 2,
                text: 'Italy'
            },
            {
                id: 3,
                text: 'Spain'
            },
            {
                id: 4, 
                text: 'Germany'
            }
        ]
    },
    {
        id: 7,
        question: 'What date do you want to go?',
        questionType: questionType.date
    }
]

export default questions;