import { configureStore, combineReducers } from '@reduxjs/toolkit';
import answerReducer from '../features/answer/answerSlice';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import questionsReducer from '../features/question/questionsSlice';

const reducers = combineReducers({
    answer: answerReducer,
    question: questionsReducer
});

export const store = configureStore({
    reducer: reducers
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;