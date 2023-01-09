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
  const goBack = () => navigation.goBack();
  const submitSignUp = (values: object) => {
    Keyboard.dismiss();
    // signUp(values);
    console.log(values);
  };
  const cancelFocus = () => {
    Keyboard.dismiss();
    // if (focusBox !== '') {
    //   setFocusBox('');
    // }
  };
  return (
    <Layout style={styles.container}>
      <TouchableWithoutFeedback style={styles.container} onPress={cancelFocus}>
        <Layout>
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
            <Text style={[styles.textTitle, styles.viewTitle2]}>
              {'Create your \nAccount'}
            </Text>
          </Layout>
          <KeyboardAvoidingView
            contentContainerStyle={styles.viewChange2}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView>
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
                      containerStyle={styles.boxInput}
                      borderColorBox={
                        focusBox === 'email' ? Color.violet : Color.border
                      }
                      backGroundColorBox={
                        focusBox === 'email'
                          ? Color.backgroundColorViolet
                          : Color.border
                      }
                      titleInput="Email"
                      paddingLeft={10}
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
                      containerStyle={styles.boxInput}
                      borderColorBox={
                        focusBox === 'password' ? Color.violet : Color.border
                      }
                      backGroundColorBox={
                        focusBox === 'password'
                          ? Color.backgroundColorViolet
                          : Color.border
                      }
                      titleInput="Password"
                      paddingLeft={10}
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
                      containerStyle={styles.boxInput}
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
                      titleInput="Confirm Password"
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
                    <ErrorInput
                      errors={errors.confirmPassword}
                      touched={touched.confirmPassword}
                    />
                  </>
                )}
              </Formik>
            </ScrollView>
          </KeyboardAvoidingView>
          {/* <Layout style={{flex: 0.3, borderWidth: 1}}></Layout>
          <Layout style={{flex: 0.3, borderWidth: 1}}></Layout> */}
        </Layout>
      </TouchableWithoutFeedback>
    </Layout>
  );
};

export default SignUp;
