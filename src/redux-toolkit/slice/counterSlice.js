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
        set: (state, action) => {
            console.log('action', action);
            return state;
        },
    },
});

export const {incremented, decremented, set} = counterSlice.actions;

export default counterSlice.reducer;
