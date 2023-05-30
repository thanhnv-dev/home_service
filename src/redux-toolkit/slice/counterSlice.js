import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        incremented: state => {
            state.value += 1;
        },
        decremented: state => {
            state.value -= 1;
        },
        setCounter: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const {incremented, decremented, setCounter} = counterSlice.actions;

export default counterSlice.reducer;
