import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    API_ID_INSTANCE: "",
    API_TOKEN_INSTANCE: ""
};

const idTokenInstanceSlice = createSlice({
    name: 'idTokenInstance',
    initialState,
    reducers: {
        setIdInstance: (state, value) => {
            state.API_ID_INSTANCE = value.payload;
        },
        setTokenInstance: (state, value) => {
            state.API_TOKEN_INSTANCE = value.payload;
        },
    }
});

export const { setIdInstance, setTokenInstance } = idTokenInstanceSlice.actions;
export default idTokenInstanceSlice.reducer;