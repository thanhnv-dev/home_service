import {View, Text} from 'react-native';
import React from 'react';
import SignInTitleAndButtonBack from './SignInTitleAndButtonBack';
import SignInInputForm from './SignInInputForm';
import SignInButton3rdPpartyAndSignUp from './SignInButton3rdPpartyAndSignUp';
import styles from './styles';
import {TouchableDismissKeyboard} from 'src/components';

const SignInScreenContent = (props: any) => {
    return (
        <View style={styles.flex1}>
            <View style={styles.flex2}>
                <SignInTitleAndButtonBack />
            </View>
            <View style={styles.flex3}>
                <SignInInputForm />
            </View>
            <View style={styles.flex2}>
                <SignInButton3rdPpartyAndSignUp />
            </View>
        </View>
    );
};

export default SignInScreenContent;
