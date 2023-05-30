import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';

const middlewares = [];
if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
}

const store_core = createStore(rootReducer, applyMiddleware(...middlewares));

export default store_core;
