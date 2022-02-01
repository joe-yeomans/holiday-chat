import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IQuestion } from '../../interfaces/IQuestion';
import { getQuestions } from '../../service/questionService';
import { RootState } from "../../app/store";

interface InitialState {
    isLoading: boolean;
    questions: IQuestion[]
}

const initialState: InitialState = {
    questions: [],
    isLoading: false
}

export const loadQuestions = createAsyncThunk(
    'question/loadQuestions', 
    async () => {
        const data = await getQuestions();
        return data;
    }
);

const questionSlice = createSlice({
    name: 'questionSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(loadQuestions.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(loadQuestions.fulfilled, (state, action: PayloadAction<IQuestion[]>) => {
            state.isLoading = false;
            state.questions = action.payload;
        })
    }
});

export const selectQuestions = (state: RootState) => state.question.questions;
export const selectIsLoading = (state: RootState) => state.question.isLoading;

export default questionSlice.reducer;