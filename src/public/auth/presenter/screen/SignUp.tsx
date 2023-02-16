import {
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    SafeAreaView,
    View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {Formik} from 'formik';
import {
    EyeIcon,
    EyeOffIcon,
    IconEmail,
    IconLock,
    IconLock2,
    IconBack,
} from 'src/components/IconApp';
import {MyButton, MyButton1, InputBox, ErrorInput} from 'src/components';
import {SignUpSchema} from 'src/utils/SchemaValidation';
import styles from '../styles';
import Color from 'src/constants/Color';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import helper from 'src/utils/helper';
import {useAppDispatch} from 'src/redux/hooks';
import {signUp} from 'src/redux/thunkAction/user';
import {IApiResponse} from 'src/network/apiResponses/IApiResponse';
import {UserResponse} from 'src/network/apiResponses/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}: {navigation: any}) => {
    const dispatch = useAppDispatch();
    const [focusBox, setFocusBox] = useState('');
    const [secureTextEntry1, setSecureTextEntry1] = useState<boolean>(true);
    const [secureTextEntry2, setSecureTextEntry2] = useState(true);
    const [keyboardShow, setKeyboardShow] = useState(false);
    const [typeService, setTypeService] = useState<any>(null);
    const goBack = () => navigation.goBack();
    const goSignIn = () => navigation.navigate('SignIn');

    const saveData = async ({
        token,
        refreshToken,
        _id,
    }: {
        token: string;
        refreshToken: string;
        _id: string;
    }) => {
        try {
            await AsyncStorage.setItem('token', token);
            await AsyncStorage.setItem('refreshToken', refreshToken);
            await AsyncStorage.setItem('_id', _id);
        } catch (err) {
            console.log(err);
        }
    };

    const onSignUp = async (values: object) => {
        Keyboard.dismiss();
        const Action = await dispatch(signUp({...values, type: typeService}));
        const response: IApiResponse<UserResponse> = Action.payload;
        if (response.isSuccess) {
            helper.showToast({msg: response.data?.msg!, type: 'success'});
            saveData({
                token: response.data?.token!,
                refreshToken: response.data?.refreshToken!,
                _id: response.data?._id!,
            });
            switch (response.data?.type) {
                case 'PROVIDER':
                    return navigation.navigate('ProviderStack');
                case 'CUSTOMER':
                    return navigation.replace('CustomerStack', {
                        screen: 'Home',
                    });
                default:
            }
        } else {
            helper.showToast({msg: response.data?.msg!, type: 'error'});
        }
    };
    const cancelFocus = () => {
        Keyboard.dismiss();
        if (focusBox !== '') {
            setFocusBox('');
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

    const handleSignUp = (handleSubmit: any, errors: any, values: any) => {
        if (
            errors.email ||
            errors.password ||
            errors.firstName ||
            errors.lastName ||
            errors.confirmPassword ||
            !values.email ||
            !values.password ||
            !values.firstName ||
            !values.lastName ||
            !values.confirmPassword
        ) {
            helper.showToast({
                type: 'error',
                msg: 'Please complete all information',
            });
        } else {
            if (typeService == null) {
                helper.showToast({
                    type: 'error',
                    msg: 'Please select an account type',
                });
            } else {
                handleSubmit();
            }
        }
    };

    const onPressSwichIcon1 = () => {
        setSecureTextEntry1(!secureTextEntry1);
    };
    const onPressSwichIcon2 = () => {
        setSecureTextEntry2(!secureTextEntry2);
    };
    const onSetProvider = () => {
        setTypeService('PROVIDER');
    };
    const onSetCustomer = () => {
        setTypeService('CUSTOMER');
    };

    const swichIcon = ({
        icon1,
        icon2,
        styleIcon,
        secureTextEntry,
    }: {
        icon1: any;
        icon2: any;
        styleIcon: any;
        secureTextEntry: boolean;
    }) => {
        return secureTextEntry ? icon1(styleIcon) : icon2(styleIcon);
    };

    return (
        <Layout style={styles.container}>
            <TouchableWithoutFeedback onPress={cancelFocus}>
                <SafeAreaView style={styles.childContainer}>
                    <Layout style={styles.header}>
                        <TouchableOpacity
                            style={styles.viewIconBack}
                            onPress={goBack}>
                            <IconBack
                                color={'#8F9BB3'}
                                style={styles.iconBack}
                            />
                        </TouchableOpacity>
                        <Text style={styles.textTitle2}>
                            {keyboardShow ? 'Create your Account' : ''}
                        </Text>
                        <View style={styles.viewIconBack} />
                    </Layout>
                    <KeyboardAwareScrollView
                        extraScrollHeight={100}
                        showsVerticalScrollIndicator={false}
                        style={styles.container}>
                        {!keyboardShow && (
                            <Text style={styles.textTitle}>
                                {'Create your Account'}
                            </Text>
                        )}
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                                firstName: '',
                                lastName: '',
                                confirmPassword: '',
                            }}
                            validationSchema={SignUpSchema}
                            onSubmit={onSignUp}>
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                values,
                                errors,
                                touched,
                            }) => (
                                <>
                                    <InputBox
                                        containerStyle={styles.boxInput}
                                        value={values.firstName}
                                        paddingLeft={10}
                                        borderColorBox={
                                            focusBox === 'firstName'
                                                ? Color.violet
                                                : Color.border
                                        }
                                        backGroundColorBox={
                                            focusBox === 'firstName'
                                                ? Color.backgroundColorViolet
                                                : Color.border
                                        }
                                        titleInput="First Name"
                                        placeholder="First Name"
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        onFocus={() => setFocusBox('firstName')}
                                        colorTextInput={
                                            errors.firstName
                                                ? Color.error
                                                : Color.violet
                                        }
                                        selectionColor={Color.violet}
                                    />
                                    <ErrorInput
                                        errors={errors.firstName}
                                        touched={touched.firstName}
                                    />
                                    <InputBox
                                        containerStyle={styles.boxInput}
                                        paddingLeft={10}
                                        value={values.lastName}
                                        borderColorBox={
                                            focusBox === 'lastName'
                                                ? Color.violet
                                                : Color.border
                                        }
                                        backGroundColorBox={
                                            focusBox === 'lastName'
                                                ? Color.backgroundColorViolet
                                                : Color.border
                                        }
                                        titleInput="Last Name"
                                        placeholder="Last Name"
                                        onChangeText={handleChange('lastName')}
                                        onBlur={handleBlur('lastName')}
                                        onFocus={() => setFocusBox('lastName')}
                                        colorTextInput={
                                            errors.lastName
                                                ? Color.error
                                                : Color.violet
                                        }
                                        selectionColor={Color.violet}
                                    />
                                    <ErrorInput
                                        errors={errors.lastName}
                                        touched={touched.lastName}
                                    />
                                    <InputBox
                                        autoCapitalize={'none'}
                                        containerStyle={styles.boxInput2}
                                        borderColorBox={
                                            focusBox === 'email'
                                                ? Color.violet
                                                : Color.border
                                        }
                                        IconLeft={IconEmail({
                                            color:
                                                focusBox === 'email'
                                                    ? Color.violet
                                                    : Color.grayIcon,
                                            style: styles.iconInput,
                                        })}
                                        backGroundColorBox={
                                            focusBox === 'email'
                                                ? Color.backgroundColorViolet
                                                : Color.border
                                        }
                                        placeholder="Email"
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        onFocus={() => setFocusBox('email')}
                                        colorTextInput={
                                            errors.email
                                                ? Color.error
                                                : Color.violet
                                        }
                                        selectionColor={Color.violet}
                                    />
                                    <ErrorInput
                                        errors={errors.email}
                                        touched={touched.email}
                                    />
                                    <InputBox
                                        containerStyle={styles.boxInput2}
                                        autoCorrect={false}
                                        spellCheck={false}
                                        borderColorBox={
                                            focusBox === 'password'
                                                ? Color.violet
                                                : Color.border
                                        }
                                        IconLeft={IconLock2({
                                            color:
                                                focusBox === 'password'
                                                    ? Color.violet
                                                    : Color.grayIcon,
                                            style: styles.iconInput,
                                        })}
                                        IconRight={swichIcon({
                                            icon2: EyeIcon,
                                            icon1: EyeOffIcon,
                                            styleIcon: {
                                                color:
                                                    focusBox === 'password'
                                                        ? Color.violet
                                                        : Color.grayIcon,
                                                style: styles.iconInput,
                                            },
                                            secureTextEntry: secureTextEntry1,
                                        })}
                                        secureTextEntry={secureTextEntry1}
                                        backGroundColorBox={
                                            focusBox === 'password'
                                                ? Color.backgroundColorViolet
                                                : Color.border
                                        }
                                        onPressIconRight={onPressSwichIcon1}
                                        placeholder="Password"
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        onFocus={() => setFocusBox('password')}
                                        colorTextInput={
                                            errors.password
                                                ? Color.error
                                                : Color.violet
                                        }
                                        selectionColor={Color.violet}
                                    />
                                    <ErrorInput
                                        errors={errors.password}
                                        touched={touched.password}
                                    />
                                    <InputBox
                                        containerStyle={styles.boxInput2}
                                        autoCorrect={false}
                                        spellCheck={false}
                                        borderColorBox={
                                            focusBox === 'confirmPassword'
                                                ? Color.violet
                                                : Color.border
                                        }
                                        backGroundColorBox={
                                            focusBox === 'confirmPassword'
                                                ? Color.backgroundColorViolet
                                                : Color.border
                                        }
                                        IconLeft={IconLock({
                                            color:
                                                focusBox === 'confirmPassword'
                                                    ? Color.violet
                                                    : Color.grayIcon,
                                            style: styles.iconInput,
                                        })}
                                        IconRight={swichIcon({
                                            icon2: EyeIcon,
                                            icon1: EyeOffIcon,
                                            styleIcon: {
                                                color:
                                                    focusBox ===
                                                    'confirmPassword'
                                                        ? Color.violet
                                                        : Color.grayIcon,
                                                style: styles.iconInput,
                                            },
                                            secureTextEntry: secureTextEntry2,
                                        })}
                                        secureTextEntry={secureTextEntry2}
                                        onPressIconRight={onPressSwichIcon2}
                                        placeholder="Confirm Password"
                                        value={values.confirmPassword}
                                        onChangeText={handleChange(
                                            'confirmPassword',
                                        )}
                                        onBlur={handleBlur('confirmPassword')}
                                        onFocus={() =>
                                            setFocusBox('confirmPassword')
                                        }
                                        colorTextInput={
                                            errors.confirmPassword
                                                ? Color.error
                                                : Color.violet
                                        }
                                        selectionColor={Color.violet}
                                    />
                                    <ErrorInput
                                        errors={errors.confirmPassword}
                                        touched={touched.confirmPassword}
                                    />
                                    <Text style={styles.title2}>
                                        Choose an account type
                                    </Text>
                                    <Layout style={styles.viewButtonChoose}>
                                        <TouchableOpacity
                                            style={[
                                                styles.container,
                                                styles.mH10,
                                            ]}>
                                            <MyButton1
                                                title="Provider"
                                                backgroundColor={{
                                                    backgroundColor:
                                                        typeService ===
                                                        'PROVIDER'
                                                            ? Color.violet
                                                            : Color.border,
                                                }}
                                                titleStyle={{
                                                    color:
                                                        typeService ===
                                                        'PROVIDER'
                                                            ? Color.while
                                                            : Color.black,
                                                }}
                                                onPress={onSetProvider}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={[
                                                styles.container,
                                                styles.mH10,
                                            ]}>
                                            <MyButton1
                                                backgroundColor={{
                                                    backgroundColor:
                                                        typeService ===
                                                        'CUSTOMER'
                                                            ? Color.violet
                                                            : Color.border,
                                                }}
                                                titleStyle={{
                                                    color:
                                                        typeService ===
                                                        'CUSTOMER'
                                                            ? Color.while
                                                            : Color.black,
                                                }}
                                                title="Customer"
                                                onPress={onSetCustomer}
                                            />
                                        </TouchableOpacity>
                                    </Layout>
                                    <MyButton
                                        title={'Sign Up'}
                                        onPress={() => {
                                            handleSignUp(
                                                handleSubmit,
                                                errors,
                                                values,
                                            );
                                        }}
                                    />
                                    <Layout
                                        style={[
                                            styles.viewButtonText,
                                            styles.center,
                                            styles.mV10,
                                        ]}>
                                        <Text style={styles.textOr}>
                                            Already have an Account?{' '}
                                        </Text>
                                        <TouchableOpacity onPress={goSignIn}>
                                            <Text style={styles.textSignUp}>
                                                {' '}
                                                Sign In
                                            </Text>
                                        </TouchableOpacity>
                                    </Layout>
                                </>
                            )}
                        </Formik>
                    </KeyboardAwareScrollView>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </Layout>
    );
};

export default SignUp;
