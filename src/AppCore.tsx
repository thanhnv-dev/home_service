import React from 'react';
import Toast from 'react-native-toast-message';
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import {Provider} from 'react-redux';
import {store_core} from 'src/redux-core/store';
import ExampleReduxCode from './ExampleReduxCode';

const AppCore = () => {
    return (
        <Provider store={store_core}>
            <FlipperAsyncStorage />
            <ExampleReduxCode />
            <Toast />
        </Provider>
    );
};
export default AppCore;
