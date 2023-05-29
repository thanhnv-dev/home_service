import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from 'src/redux-core/store';

const ExampleReduxCode = () => {
    return (
        <Provider store={store}>
            <View>
                <Text>ExampleReduxCode</Text>
            </View>
        </Provider>
    );
};

export default ExampleReduxCode;
