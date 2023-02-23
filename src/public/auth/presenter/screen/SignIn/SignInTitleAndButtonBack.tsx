import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {BackLeft} from 'src/assets/icons';

const SignInTitleAndButtonBack = ({
    keyboardShow,
    navigation,
}: {
    keyboardShow: any;
    navigation: any;
}) => {
    const onBack = () => navigation.goBack();

    let containerStyles = [
        styles.flex1,
        styles.justifyContentBetween,
        styles.mh20,
    ];

    let headerStyles = [styles.flexRow, styles.justifyContentBetween];

    return (
        <SafeAreaView style={containerStyles}>
            <View style={headerStyles}>
                <TouchableOpacity onPress={onBack}>
                    <BackLeft style={styles.iconArrowLeft} />
                </TouchableOpacity>
                {keyboardShow ? <Text style={[styles.h1]}>Login</Text> : null}
                <View style={styles.iconArrowLeft} />
            </View>
            {!keyboardShow ? (
                <Text style={styles.tile}>{'Login to your \nAccount'}</Text>
            ) : null}
        </SafeAreaView>
    );
};

export default SignInTitleAndButtonBack;
