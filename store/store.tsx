import { configureStore } from '@reduxjs/toolkit';
import inputSliceReducer from '../slices/inputSlice'

export const store = configureStore({
    reducer: {
        inputValues: inputSliceReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
