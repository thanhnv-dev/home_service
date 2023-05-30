import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './slice/counterSlice';

const store_toolkit = configureStore({
    reducer: counterSlice,
});

export default store_toolkit;
