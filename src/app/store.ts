import { configureStore } from "@reduxjs/toolkit";
import idTokenInstanceReducer from 'shared/token/tokenSlice';

export const store = configureStore({
    reducer: {
        idTokenInstance: idTokenInstanceReducer,
    }
})