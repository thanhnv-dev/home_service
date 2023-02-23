import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import React from 'react';

const TouchableDismissKeyboard = (props: any) => {
    const dismissKeyboardWhenTappedOutsideOfInput = () => {
        if (props.keyboardShow) {
            Keyboard.dismiss();
        }
        return;
    };
    return (
        <TouchableWithoutFeedback
            onPress={dismissKeyboardWhenTappedOutsideOfInput}>
            {props.children}
        </TouchableWithoutFeedback>
    );
};

export default TouchableDismissKeyboard;
