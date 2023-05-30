import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import React from 'react';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import ExampleReduxCode from './ExampleReduxCode';

import {Provider} from 'react-redux';
import {store_core} from 'src/redux-core/store';

const AppCore = () => {
    return (
        <Provider store={store_core}>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
                <FlipperAsyncStorage />
                <ExampleReduxCode />
            </ApplicationProvider>
        </Provider>
    );
};
export default AppCore;
