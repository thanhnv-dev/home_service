import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles/index';
import {MyButton} from './components/Button';

const ExampleReduxCode = () => {
    const counter = useSelector((state: any) => state.counter);
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
                    <MyButton title="Up" onPress={() => {}} />
                </View>
                <View style={[styles.flex1, styles.mh20]}>
                    <MyButton title="Down" onPress={() => {}} />
                </View>
            </View>
            <View style={[styles.flexRow, styles.mt20]}>
                <TextInput style={[Styles.textInput]} />
                <View style={[styles.mh20, Styles.w100]}>
                    <MyButton title="Set" onPress={() => {}} />
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
