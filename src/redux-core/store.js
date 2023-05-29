import {createStore} from 'redux';
import rootReducer from './reducer';

let store_core = createStore(rootReducer);
