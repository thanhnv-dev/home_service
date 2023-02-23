import {View} from 'react-native';
import React from 'react';
import SignInTitleAndButtonBack from './SignInTitleAndButtonBack';
import SignInInputForm from './SignInInputForm';
import SignInButton3rdPpartyAndSignUp from './SignInButton3rdPpartyAndSignUp';
import styles from './styles';

const SignInScreenContent = ({
    navigation,
    focusBox,
    keyboardShow,
}: {
    navigation: any;
    focusBox: any;
    keyboardShow: boolean;
}) => {
    return (
        <View style={styles.flex1}>
            <View style={styles.flex2}>
                <SignInTitleAndButtonBack
                    navigation={navigation}
                    keyboardShow={keyboardShow}
                />
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
