import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles/index';
import {MyButton} from './components/Button';
import {
    couterDecremented,
    couterIncremented,
    couterSet,
} from './redux-core/action/counterAction';
import {
    incremented,
    decremented,
    setCounter,
} from './redux-toolkit/slice/counterSlice';

const ExampleReduxCode = () => {
    const dispatch = useDispatch();

    const counter = useSelector(state => state.counter);

    const [input, setInput] = useState('');

    const up = () => {
        // dispatch(couterIncremented());
        dispatch(incremented());
    };

    const down = () => {
        // dispatch(couterDecremented());
        dispatch(decremented());
    };

    const set = () => {
        // dispatch(couterSet(parseInt(input, 10)));
        dispatch(setCounter(parseInt(input, 10)));
    };

    return (
        <View
            style={[
                styles.flex1,
                styles.justifyContentCenter,
                styles.alignItemsCenter,
            ]}>
            <Text style={styles.tile}>Counter: {counter.value}</Text>
            <View style={[styles.flexRow, styles.mt20]}>
                <View style={[styles.flex1, styles.mh20]}>
                    <MyButton title="Up" onPress={up} />
                </View>
                <View style={[styles.flex1, styles.mh20]}>
                    <MyButton title="Down" onPress={down} />
                </View>
            </View>
            <View style={[styles.flexRow, styles.mt20]}>
                <TextInput
                    style={[Styles.textInput]}
                    value={input}
                    onChangeText={setInput}
                />
                <View style={[styles.mh20, Styles.w100]}>
                    <MyButton title="Set" onPress={set} />
                </View>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    textInput: {
        width: 100,
        borderWidth: 1,
        height: 50,
        borderRadius: 20,
        textAlign: 'center',
    },
    w100: {
        width: 100,
    },
});
export default ExampleReduxCode;
