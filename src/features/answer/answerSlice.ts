import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { questionType } from '../../enum/questionType';
import { IQuestion } from '../../interfaces/IQuestion';
import IAnswer from '../../interfaces/IAnswer';

interface InitialState {
    answers: IAnswer[]
}

const initialState: InitialState = {
    answers: []
}

const answerSlice = createSlice({
    name: 'answerSlice',
    initialState,
    reducers: {
        addAnswer: (state, action: PayloadAction<IAnswer>) => {
            state.answers.push(action.payload);
        }
    }
});

export default answerSlice.reducer;