import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';

const middlewares = [];
if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
}

export const store_core = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
);
