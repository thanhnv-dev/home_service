import React from 'react';
import ExampleReduxCode from './view/ExampleReduxCode';

import {Provider} from 'react-redux';
// import store_core from 'src/redux-core/store';
import {store_toolkit} from './redux-toolkit/store';

const AppExample = () => {
    return (
        <Provider store={store_toolkit}>
            <ExampleReduxCode />
        </Provider>
    );
};
export default AppExample;
