import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
            //Filter out previous answer
            state.answers = state.answers.filter(answer => {
                return answer.questionId !== action.payload.questionId &&
                    answer.questionType !== action.payload.questionType
            });

            const { payload } = action;

            if (payload.textAnswer ||
                payload.selectedNumber || 
                payload.selectedOptionIds || 
                payload.singleSelectOption) {
                    state.answers.push(action.payload);
                }
                
            console.log(state.answers);
        }
    }
});

export const { addAnswer } = answerSlice.actions;

export default answerSlice.reducer;