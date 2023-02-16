import {Button, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

const InputBox = ({
    borderColorBox,
    backGroundColorBox,
    IconLeft,
    IconRight,
    placeholder,
    value,
    onChangeText,
    onBlur,
    onFocus,
    onPressIconRight,
    secureTextEntry,
    colorTextInput,
    selectionColor,
    paddingLeft,
    titleInput,
    containerStyle,
    autoCorrect,
    spellCheck,
    autoCapitalize,
}: {
    autoCapitalize?: any;
    borderColorBox: string;
    backGroundColorBox: string;
    IconLeft?: any;
    IconRight?: any;
    placeholder: string;
    value: string;
    onChangeText: any;
    onBlur: any;
    onFocus: any;
    onPressIconRight?: any;
    secureTextEntry?: boolean;
    autoCorrect?: boolean;
    spellCheck?: boolean;
    colorTextInput: string;
    selectionColor: string;
    titleInput?: string;
    paddingLeft?: number;
    containerStyle?: any;
}) => {
    const checkTypeInput = () => {
        if (checkIcon(IconLeft) && checkIcon(IconRight)) {
            return styles.viewInputTwoIcon;
        } else {
            return checkIcon(IconLeft)
                ? styles.viewInputAnIcon
                : styles.viewInputNotIcon;
        }
    };
    const checkIcon = (icon: any) => (icon ? true : false);
    return (
        <Layout style={containerStyle ? containerStyle : styles.textInput}>
            {titleInput && <Text style={styles.title}>{titleInput}</Text>}
            <Layout
                style={[
                    styles.boxInput,
                    {
                        borderColor: borderColorBox,
                        backgroundColor: backGroundColorBox,
                    },
                ]}>
                {IconLeft && (
                    <Layout style={[styles.viewIconLeft, styles.center]}>
                        {IconLeft}
                    </Layout>
                )}
                <Layout style={checkTypeInput()}>
                    <TextInput
                        autoCapitalize={autoCapitalize}
                        placeholder={placeholder}
                        autoCorrect={autoCorrect}
                        spellCheck={spellCheck}
                        value={value}
                        onChangeText={onChangeText}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        secureTextEntry={secureTextEntry}
                        selectionColor={selectionColor}
                        style={[
                            styles.textInput,
                            {
                                color: colorTextInput,
                                paddingLeft: paddingLeft,
                            },
                        ]}
                    />
                </Layout>
                {IconRight && (
                    <Button
                        style={styles.viewIconRight}
                        appearance="ghost"
                        accessoryLeft={IconRight}
                        onPress={onPressIconRight}
                    />
                )}
            </Layout>
        </Layout>
    );
};

const ErrorInput = ({errors, touched}: {errors: any; touched: any}) => {
    return (
        <Layout style={styles.viewErrorInput}>
            {errors && touched ? (
                <Text style={styles.colorError}>{errors}</Text>
            ) : (
                <Text />
            )}
        </Layout>
    );
};

export {InputBox, ErrorInput};
