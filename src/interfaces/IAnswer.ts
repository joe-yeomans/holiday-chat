import { questionType } from "../enum/questionType";

export default interface IAnswer {
    questionId: Number;
    questionType: questionType;
    textAnswer?: String;
    selectedNumber?: Number;
    selectedOptionIds?: Number[];
    singleSelectOption?: number;
}