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
        question: 'Select a single option',
        questionType: questionType.singleSelect,
        singleSelectOptions: [
            {
                id: 1,
                text: 'Option 1'
            },
            {
                id: 2,
                text: 'Option 2'
            },
            {
                id: 3,
                text: 'Option 3'
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
        question: 'What date do you want to go?',
        questionType: questionType.date
    }
]

export default questions;