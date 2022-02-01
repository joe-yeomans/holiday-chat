import { questionType } from "../enum/questionType";
import ISelect from "./ISelect";

export interface IQuestion {
    id: Number;
    question: String;
    questionType: questionType;
    text?: String;
    minNumber?: Number;
    maxNumber?: Number;
    singleSelectOptions?: ISelect[]
    multiSelectOptions?: ISelect[];
}