import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './slice/counterSlice';

const createDebugger = require('redux-flipper').default;

export const store_toolkit = configureStore({
    reducer: {
        counter: counterSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({serializableCheck: false}).concat(
            createDebugger(),
        ),
});
