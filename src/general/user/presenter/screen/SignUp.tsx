import {
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Layout, Text} from '@ui-kitten/components';
import {Formik} from 'formik';
import {
  EyeIcon,
  EyeOffIcon,
  IconEmail,
  IconLock,
  IconLock2,
  IconBack,
  IconCheck,
} from '~/assets/Icons/IconApp';
import {
  MyButton,
  InputBox,
  LoginButton3rdPparty2,
  ErrorInput,
} from '~/general/widgets';
import {SignUpSchema} from '~/validation/SchemaValidation';
import styles from '../styles';
import Color from '~/constants/Color';

const SignUp = ({navigation}: {navigation: any}) => {
  const [focusBox, setFocusBox] = useState('');
  const [secureTextEntry1, setSecureTextEntry1] = useState<boolean>(true);
  const [secureTextEntry2, setSecureTextEntry2] = useState(true);
  const goBack = () => navigation.goBack();
  const submitSignUp = (values: object) => {
    Keyboard.dismiss();
    // signUp(values);
    console.log(values);
  };
  const cancelFocus = () => {
    Keyboard.dismiss();
    if (focusBox !== '') {
      setFocusBox('');
    }
  };

  const onPressSwichIcon1 = () => {
    setSecureTextEntry1(!secureTextEntry1);
  };
  const onPressSwichIcon2 = () => {
    setSecureTextEntry2(!secureTextEntry2);
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
        <Layout style={styles.childContainer}>
          <Layout style={styles.viewTitleWithIconBack}>
            <Button
              style={styles.viewIconBack}
              appearance="ghost"
              accessoryLeft={IconBack({
                color: '#8F9BB3',
                style: styles.iconBack,
              })}
              onPress={goBack}
            />
          </Layout>
          <KeyboardAvoidingView
            style={styles.viewChanged}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Layout style={styles.viewTitle2}>
                <Text style={styles.textTitle}>{'Create your \nAccount'}</Text>
              </Layout>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                  fistName: '',
                  lastName: '',
                  confirmPassword: '',
                }}
                validationSchema={SignUpSchema}
                onSubmit={submitSignUp}>
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
                      value={values.fistName}
                      paddingLeft={10}
                      borderColorBox={
                        focusBox === 'firstName' ? Color.violet : Color.border
                      }
                      backGroundColorBox={
                        focusBox === 'firstName'
                          ? Color.backgroundColorViolet
                          : Color.border
                      }
                      titleInput="First Name"
                      placeholder="First Name"
                      onChangeText={handleChange('fistName')}
                      onBlur={handleBlur('fistName')}
                      onFocus={() => setFocusBox('firstName')}
                      colorTextInput={
                        errors.fistName ? Color.error : Color.violet
                      }
                      selectionColor={Color.violet}
                    />
                    <ErrorInput
                      errors={errors.fistName}
                      touched={touched.fistName}
                    />
                    <InputBox
                      containerStyle={styles.boxInput}
                      paddingLeft={10}
                      value={values.lastName}
                      borderColorBox={
                        focusBox === 'lastName' ? Color.violet : Color.border
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
                        errors.lastName ? Color.error : Color.violet
                      }
                      selectionColor={Color.violet}
                    />
                    <ErrorInput
                      errors={errors.lastName}
                      touched={touched.lastName}
                    />
                    <InputBox
                      containerStyle={styles.boxInput2}
                      borderColorBox={
                        focusBox === 'email' ? Color.violet : Color.border
                      }
                      IconLeft={IconEmail({
                        color:
                          focusBox === 'email' ? Color.violet : Color.grayIcon,
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
                      colorTextInput={errors.email ? Color.error : Color.violet}
                      selectionColor={Color.violet}
                    />
                    <ErrorInput errors={errors.email} touched={touched.email} />
                    <InputBox
                      containerStyle={styles.boxInput2}
                      autoCorrect={false}
                      spellCheck={false}
                      borderColorBox={
                        focusBox === 'password' ? Color.violet : Color.border
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
                        errors.password ? Color.error : Color.violet
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
                            focusBox === 'confirmPassword'
                              ? Color.violet
                              : Color.grayIcon,
                          style: styles.iconInput,
                        },
                        secureTextEntry: secureTextEntry2,
                      })}
                      secureTextEntry={secureTextEntry2}
                      onPressIconRight={onPressSwichIcon2}
                      paddingLeft={10}
                      placeholder="Confirm Password"
                      value={values.confirmPassword}
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      onFocus={() => setFocusBox('confirmPassword')}
                      colorTextInput={
                        errors.confirmPassword ? Color.error : Color.violet
                      }
                      selectionColor={Color.violet}
                    />
                    <Layout style={{marginBottom: 30}}>
                      <ErrorInput
                        errors={errors.confirmPassword}
                        touched={touched.confirmPassword}
                      />
                    </Layout>
                  </>
                )}
              </Formik>
            </ScrollView>
          </KeyboardAvoidingView>
          <Layout style={{flex: 2, borderWidth: 1}}></Layout>
          <Layout style={{flex: 2, borderWidth: 1}}></Layout>
        </Layout>
      </TouchableWithoutFeedback>
    </Layout>
  );
};

export default SignUp;
