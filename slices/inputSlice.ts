import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

export type InputState = {
    fromValue: string;
    whereValue: string;
    fromDate: string;
    whereDate: string;
};

const initialState: InputState = {
    fromValue: 'null',
    whereValue: 'null',
    fromDate: 'null',
    whereDate: 'null',
};

export const inputSlice = createSlice({
    name: 'inputValues',
    initialState,
    reducers: {
        updateState: (state, action: PayloadAction<InputState>) => {
            state.fromValue = action.payload.fromValue
            state.whereValue = action.payload.whereValue
            state.fromDate = action.payload.fromDate
            state.whereDate = action.payload.whereDate
        },
    },
});
export const {

    updateState,
} = inputSlice.actions;

export const inputsValues = (state: RootState) => state.inputValues;
export default inputSlice.reducer;