import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {BackLeft} from 'src/assets/icons';

const SignInTitleAndButtonBack = () => {
    return (
        <View>
            <Text>SignInTitleAndButtonBack</Text>
            <BackLeft with={100} height={100} />
        </View>
    );
};

export default SignInTitleAndButtonBack;
