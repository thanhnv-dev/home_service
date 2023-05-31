import React from 'react';
import ExampleReduxCode from './view/ExampleReduxCode';
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import {Provider} from 'react-redux';
// import store_core from 'src/redux-core/store';
import {store_toolkit} from './redux-toolkit/store';

const AppExample = () => {
    return (
        <Provider store={store_toolkit}>
            <ExampleReduxCode />
            <FlipperAsyncStorage />
        </Provider>
    );
};
export default AppExample;
