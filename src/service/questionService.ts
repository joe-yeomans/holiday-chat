import { IQuestion } from "../interfaces/IQuestion"
import questions from "../data/questions"

export const getQuestions = async (): Promise<IQuestion[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(questions);
        }, 1000)
    })
} 