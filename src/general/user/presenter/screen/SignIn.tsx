import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, Layout, Text} from '@ui-kitten/components';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import {
    EyeIcon,
    EyeOffIcon,
    IconBack,
    IconCheck,
    IconEmail,
    IconLock,
} from '~/components/IconApp';
import {a_logo, fb_logo, g_logo} from '~/assets/images';
import Color from '~/constants/Color';
import {EMAIL_BOX, PASSWORD_BOX} from '~/constants/Const';
import styles from '~/general/user/presenter/styles';
import {
    InputBox,
    LoginButton3rdPparty2,
    MyButton,
    ErrorInput,
} from '~/general/widgets';
import {useAppDispatch} from '~/redux/hooks';
import {signIn} from '~/redux/slice/user.slice';
import {showToast} from '~/utils/helper';
import {SignInSchema} from '~/validation/SchemaValidation';
import {UserResponse} from '~/network/apiResponses/user';
import {IApiResponse} from '~/network/apiResponses/IApiResponse';

const SignIn = ({navigation}: {navigation: any}) => {
    const dispatch = useAppDispatch();

    const [focusBox, setFocusBox] = useState('');
    const [remenber, setRemenber] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const goSignUp = () => navigation.navigate('SignUp');
    const onBack = () => navigation.goBack();

    const cancelFocus = () => {
        Keyboard.dismiss();
        if (focusBox !== '') {
            setFocusBox('');
        }
    };
    const saveToken = async ({
        token,
        refreshToken,
    }: {
        token: string;
        refreshToken: string;
    }) => {
        try {
            await AsyncStorage.setItem('token', token);
            await AsyncStorage.setItem('refreshToken', refreshToken);
        } catch (err) {
            console.log(err);
        }
    };
    const saveUser = async ({_id}: {_id: string}) => {
        try {
            await AsyncStorage.setItem('_id', _id);
        } catch (err) {
            console.log(err);
        }
    };

    const onLogin = async (values: object) => {
        Keyboard.dismiss();
        const Action = await dispatch(signIn(values));
        const response: IApiResponse<UserResponse> = Action.payload;
        if (response.isSuccess) {
            if (remenber) {
                saveUser({
                    _id: response.data?._id!,
                });
            }
            saveToken({
                token: response.data?.token!,
                refreshToken: response.data?.refreshToken!,
            });
            showToast({msg: response?.data?.msg!, type: 'success'});
            switch (response.data?.type) {
                case 'PROVIDER':
                    return navigation.navigate('ProviderStack');
                case 'CUSTOMER':
                    return navigation.navigate('CustomerStack', {
                        screen: 'Home',
                    });
                default:
            }
        }
    };

    const handleSignIn = (handleSubmit: any, errors: any) => {
        if (errors.email || errors.password) {
            showToast({type: 'error', msg: 'Please complete all information'});
        } else {
            handleSubmit();
        }
    };

    const focusBoxColor = ({
        color1,
        color2,
        refBox,
    }: {
        color1?: any;
        color2: any;
        refBox: string;
    }) => {
        const color = color1 ? color1 : Color.violet;
        return focusBox === refBox ? color : color2;
    };

    const swichIconEye = secureTextEntry
        ? EyeIcon({
              color: focusBoxColor({
                  color1: Color.violet,
                  color2: Color.grayIcon,
                  refBox: PASSWORD_BOX,
              }),
              style: styles.iconInput,
          })
        : EyeOffIcon({
              color: focusBoxColor({
                  color1: Color.violet,
                  color2: Color.grayIcon,
                  refBox: PASSWORD_BOX,
              }),
              style: styles.iconInput,
          });

    return (
        <Layout style={styles.container}>
            <TouchableWithoutFeedback
                style={styles.container}
                onPress={cancelFocus}>
                <Layout style={styles.childContainer}>
                    <KeyboardAvoidingView
                        style={styles.viewChange}
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <Layout style={styles.viewTitleIconBack}>
                            <Button
                                style={styles.viewIconBack}
                                appearance="ghost"
                                accessoryLeft={IconBack({
                                    color: '#8F9BB3',
                                    style: styles.iconBack,
                                })}
                                onPress={onBack}
                            />
                            <Text style={styles.textTitle}>
                                {'Login to your \nAccount'}
                            </Text>
                        </Layout>
                        <Formik
                            initialValues={{email: '', password: ''}}
                            validationSchema={SignInSchema}
                            onSubmit={onLogin}>
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                values,
                                errors,
                                touched,
                            }) => (
                                <Layout style={styles.viewInputSubmit}>
                                    <Layout style={styles.viewInput}>
                                        <InputBox
                                            autoCapitalize={'none'}
                                            containerStyle={styles.boxInput2}
                                            borderColorBox={focusBoxColor({
                                                color2: Color.border,
                                                refBox: EMAIL_BOX,
                                            })}
                                            backGroundColorBox={focusBoxColor({
                                                color1: Color.backgroundColorViolet,
                                                color2: Color.border,
                                                refBox: EMAIL_BOX,
                                            })}
                                            IconLeft={IconEmail({
                                                color: focusBoxColor({
                                                    color2: Color.grayIcon,
                                                    refBox: EMAIL_BOX,
                                                }),
                                                style: styles.iconInput,
                                            })}
                                            placeholder="Email"
                                            value={values.email}
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            onFocus={() =>
                                                setFocusBox(EMAIL_BOX)
                                            }
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
                                            borderColorBox={focusBoxColor({
                                                color2: Color.border,
                                                refBox: PASSWORD_BOX,
                                            })}
                                            backGroundColorBox={focusBoxColor({
                                                color1: Color.backgroundColorViolet,
                                                color2: Color.border,
                                                refBox: PASSWORD_BOX,
                                            })}
                                            IconLeft={IconLock({
                                                color: focusBoxColor({
                                                    color2: Color.grayIcon,
                                                    refBox: PASSWORD_BOX,
                                                }),
                                                style: styles.iconInput,
                                            })}
                                            IconRight={swichIconEye}
                                            placeholder={'Password'}
                                            value={values.password}
                                            onChangeText={handleChange(
                                                'password',
                                            )}
                                            onBlur={handleBlur('password')}
                                            onFocus={() =>
                                                setFocusBox(PASSWORD_BOX)
                                            }
                                            onPressIconRight={() =>
                                                setSecureTextEntry(
                                                    !secureTextEntry,
                                                )
                                            }
                                            secureTextEntry={secureTextEntry}
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
                                    </Layout>
                                    <Layout style={styles.viewButtonSign}>
                                        <Layout
                                            style={[
                                                styles.viewRemember,
                                                styles.center,
                                            ]}>
                                            <TouchableOpacity
                                                style={[
                                                    styles.viewIconCheck,
                                                    styles.center,
                                                    {
                                                        backgroundColor:
                                                            remenber
                                                                ? Color.violet
                                                                : Color.while,
                                                    },
                                                ]}
                                                onPress={() =>
                                                    setRemenber(!remenber)
                                                }>
                                                <IconCheck
                                                    color={Color.while}
                                                    style={styles.iconChecked}
                                                />
                                            </TouchableOpacity>
                                            <Text>{'  Remenber me'}</Text>
                                        </Layout>
                                        <MyButton
                                            title={'Sign in'}
                                            onPress={() => {
                                                handleSignIn(
                                                    handleSubmit,
                                                    errors,
                                                );
                                            }}
                                        />
                                        <TouchableOpacity
                                            style={styles.viewForgot}>
                                            <Text style={styles.textForgot}>
                                                Forgot the password?
                                            </Text>
                                        </TouchableOpacity>
                                    </Layout>
                                </Layout>
                            )}
                        </Formik>
                    </KeyboardAvoidingView>
                    <Layout style={[styles.viewOrWith, styles.center]}>
                        <Layout style={styles.line} />
                        <Text style={styles.textOr}>or continue with</Text>
                        <Layout style={styles.line} />
                    </Layout>
                    <Layout style={styles.viewButtonSignWith}>
                        <LoginButton3rdPparty2 icon={fb_logo} />
                        <LoginButton3rdPparty2 icon={g_logo} />
                        <LoginButton3rdPparty2 icon={a_logo} />
                    </Layout>
                    <Layout style={[styles.viewButtonText, styles.center]}>
                        <Text style={styles.textOr}>
                            Don't have an account?{' '}
                        </Text>
                        <TouchableOpacity onPress={goSignUp}>
                            <Text style={styles.textSignUp}> Sign Up</Text>
                        </TouchableOpacity>
                    </Layout>
                </Layout>
            </TouchableWithoutFeedback>
        </Layout>
    );
};

export default SignIn;
