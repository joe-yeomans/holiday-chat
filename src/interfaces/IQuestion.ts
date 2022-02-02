import { questionType } from "../enum/questionType";
import ISelect from "./ISelect";

export interface IQuestion {
    id: Number;
    question: String;
    questionType: questionType;
    singleSelectOptions?: ISelect[]
    multiSelectOptions?: ISelect[];
}