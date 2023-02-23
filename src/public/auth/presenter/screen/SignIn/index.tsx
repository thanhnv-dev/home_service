import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';
import React, {useState, useEffect} from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Text,
    TextInput,
} from 'react-native';
import {a_logo, fb_logo, g_logo} from 'src/assets/images';
import {
    ErrorInput,
    InputBox,
    LoginButton3rdPparty2,
    MyButton,
    TouchableDismissKeyboard,
    EyeIcon,
    EyeOffIcon,
    IconBack,
    IconCheck,
    IconEmail,
    IconLock,
} from 'src/components';
import Color from 'src/constants/Color';
import {EMAIL_BOX, PASSWORD_BOX} from 'src/constants/Const';
import {IApiResponse} from 'src/network/apiResponses/IApiResponse';
import {UserResponse} from 'src/network/apiResponses/user';
import styles from './styles';
import {useAppDispatch} from 'src/redux/hooks';
import {signIn} from 'src/redux/thunkAction/user';
import helper from 'src/utils/helper';
import {SignInSchema} from 'src/utils/SchemaValidation';
import SignInScreenContent from './SignInScreenContent';

const SignIn = ({navigation}: {navigation: any}) => {
    let containerStyles = [styles.flex1, styles.backgroundColorWhite];

    const [focusBox, setFocusBox] = useState<any>(null);
    const [keyboardShow, setKeyboardShow] = useState<boolean>(false);

    const cancelInputAndKeyboard = () => {
        Keyboard.dismiss();
        if (focusBox !== null) {
            setFocusBox(null);
        }
    };
    useEffect(() => {
        const showSubscription = Keyboard.addListener(
            'keyboardWillShow',
            () => {
                setKeyboardShow(true);
            },
        );
        const hideSubscription = Keyboard.addListener(
            'keyboardWillHide',
            () => {
                setKeyboardShow(false);
            },
        );

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return (
        <TouchableDismissKeyboard keyboardShow={keyboardShow}>
            <View style={containerStyles}>
                <SignInScreenContent
                    focusBox={focusBox}
                    navigation={navigation}
                    keyboardShow={keyboardShow}
                />
            </View>
        </TouchableDismissKeyboard>
    );
};

export default SignIn;
