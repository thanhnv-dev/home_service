import React, {useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import {Button, Layout, Icon, Text} from '@ui-kitten/components';
import {FocusedColor} from './Function';
import Color from '../../../../constants/Color';
import {Button1} from '../../../widgets/index';
import {Formik} from 'formik';
import styles from '../styles';
import {fb_logo, g_logo, a_logo} from '../../../../assets/images/index';
import {SignupSchema} from '../../../../validation/SchemaValidation';

const AccountForm = (props: any) => {
  const [type, setType] = useState(props.route?.params?.type);
  const checkType = type === 'signIn' ? true : false;
  const [focusBox, setFocusBox] = useState('');
  const [remenber, setRemenber] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const SignUp = () => {
    setType(checkType ? 'signUp' : 'signIn');
  };

  const focusedColorBoxEmail = (color1: any, color2: any) =>
    FocusedColor({
      typeBox: 'emailBox',
      focusBox: focusBox,
      focusedColor: color1,
      unFocusedColor: color2,
    });
  const focusedColorBoxPass = (color1: any, color2: any) =>
    FocusedColor({
      typeBox: 'passBox',
      focusBox: focusBox,
      focusedColor: color1,
      unFocusedColor: color2,
    });

  const ArrowIcon = () => (
    <Icon name="arrow-back-outline" fill="#8F9BB3" style={styles.iconBack} />
  );

  const EmailIcon = () => (
    <Icon
      name="email-outline"
      fill={FocusedColor({
        typeBox: 'emailBox',
        focusBox: focusBox,
        focusedColor: Color.violet,
        unFocusedColor: Color.grayIcon,
      })}
      style={styles.iconInput}
    />
  );
  const LockIcon = () => (
    <Icon
      name="lock-outline"
      fill={focusedColorBoxPass(Color.violet, Color.grayIcon)}
      style={styles.iconInput}
    />
  );
  const eyeIcon = () => (
    <Icon
      name="eye-outline"
      fill={focusedColorBoxPass(Color.violet, Color.grayIcon)}
      style={styles.iconInput}
    />
  );
  const eyeOffIcon = () => (
    <Icon
      name="eye-off-outline"
      fill={focusedColorBoxPass(Color.violet, Color.grayIcon)}
      style={styles.iconInput}
    />
  );
  const CheckedIcon = () => (
    <Icon name="checkmark-outline" fill="white" style={styles.iconChecked} />
  );

  return (
    <Layout style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.container}
        onPress={() => {
          Keyboard.dismiss();
          if (focusBox !== '') {
            setFocusBox('');
          }
        }}>
        <Layout style={styles.childContainer}>
          <KeyboardAvoidingView
            style={styles.viewChange}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Layout style={styles.viewTitleIconBack}>
              <Button
                style={styles.viewIconBack}
                appearance="ghost"
                accessoryLeft={ArrowIcon}
                onPress={() => props.navigation.goBack()}
              />
              <Text style={styles.textTitle}>
                {checkType
                  ? 'Login to your \nAccount'
                  : 'Create your \nAccount'}
              </Text>
            </Layout>
            <Formik
              initialValues={{email: '', password: ''}}
              validationSchema={SignupSchema}
              onSubmit={values => {
                console.log(values);
                Keyboard.dismiss();
              }}>
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
                    <Layout
                      style={[
                        styles.boxInput,
                        {
                          borderColor: focusedColorBoxEmail(
                            Color.violet,
                            Color.border,
                          ),
                        },
                      ]}>
                      <Layout
                        style={[
                          styles.viewIconInput,
                          styles.center,
                          {
                            backgroundColor: focusedColorBoxEmail(
                              Color.backgroundColorViolet,
                              Color.border,
                            ),
                          },
                        ]}>
                        <EmailIcon />
                      </Layout>
                      <Layout
                        style={[
                          styles.viewInputEmail,
                          {
                            backgroundColor: focusedColorBoxEmail(
                              Color.backgroundColorViolet,
                              Color.border,
                            ),
                          },
                        ]}>
                        <TextInput
                          placeholder="Email"
                          value={values.email}
                          onChangeText={handleChange('email')}
                          onBlur={handleBlur('email')}
                          onFocus={() => setFocusBox('emailBox')}
                          style={[
                            styles.input,
                            {
                              color: errors.email ? Color.error : Color.violet,
                            },
                          ]}
                        />
                      </Layout>
                    </Layout>
                    {errors.email && touched.email ? (
                      <Text style={{color: Color.error}}>{errors.email}</Text>
                    ) : null}
                    <Layout
                      style={[
                        styles.boxInput,
                        {
                          borderColor: focusedColorBoxPass(
                            Color.violet,
                            Color.border,
                          ),
                        },
                      ]}>
                      <Layout
                        style={[
                          styles.viewIconInput,
                          styles.center,
                          {
                            backgroundColor: focusedColorBoxPass(
                              Color.backgroundColorViolet,
                              Color.border,
                            ),
                          },
                        ]}>
                        <LockIcon />
                      </Layout>
                      <Layout
                        style={[
                          styles.viewInputPass,
                          {
                            backgroundColor: focusedColorBoxPass(
                              Color.backgroundColorViolet,
                              Color.border,
                            ),
                          },
                        ]}>
                        <TextInput
                          placeholder="Password"
                          value={values.password}
                          onChangeText={handleChange('password')}
                          onBlur={handleBlur('password')}
                          onFocus={() => setFocusBox('passBox')}
                          secureTextEntry={secureTextEntry}
                          style={[
                            styles.input,
                            {
                              color: errors.password
                                ? Color.error
                                : Color.violet,
                            },
                          ]}
                        />
                      </Layout>
                      <Button
                        style={[
                          styles.viewIconEye,
                          {
                            backgroundColor: focusedColorBoxPass(
                              Color.backgroundColorViolet,
                              Color.border,
                            ),
                          },
                        ]}
                        appearance="ghost"
                        accessoryLeft={secureTextEntry ? eyeIcon : eyeOffIcon}
                        onPress={() => setSecureTextEntry(!secureTextEntry)}
                      />
                    </Layout>
                    {errors.password && touched.password ? (
                      <Text style={{color: Color.error}}>
                        {errors.password}
                      </Text>
                    ) : null}
                  </Layout>
                  <Layout style={styles.viewButtonSign}>
                    <Layout style={[styles.viewRemember, styles.center]}>
                      <TouchableOpacity
                        style={[
                          styles.viewIconCheck,
                          styles.center,
                          {
                            backgroundColor: remenber
                              ? Color.violet
                              : Color.while,
                          },
                        ]}
                        onPress={() => setRemenber(!remenber)}>
                        <CheckedIcon />
                      </TouchableOpacity>
                      <Text>{'  Remenber me'}</Text>
                    </Layout>
                    <Button1
                      disabled={errors.password || errors.email ? true : false}
                      title={checkType ? 'Sign in' : 'Sign up'}
                      onPress={handleSubmit}
                      style={styles.sizeFull}
                    />
                    {checkType && (
                      <TouchableOpacity>
                        <Text style={styles.textForgot}>
                          Forgot the password?
                        </Text>
                      </TouchableOpacity>
                    )}
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
            <TouchableOpacity style={[styles.buttonSignWith, styles.center]}>
              <Image source={fb_logo} style={styles.icon3rd} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonSignWith, styles.center]}>
              <Image source={g_logo} style={styles.icon3rd} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonSignWith, styles.center]}>
              <Image source={a_logo} style={styles.icon3rd} />
            </TouchableOpacity>
          </Layout>
          <Layout style={[styles.viewButtonText, styles.center]}>
            <Text style={styles.textOr}>
              {checkType
                ? 'Don`t have an account? '
                : 'Already have an account? '}
            </Text>
            <TouchableOpacity onPress={() => SignUp()}>
              <Text style={styles.textSignUp}>
                {checkType ? 'Sign Up' : 'Sign In'}
              </Text>
            </TouchableOpacity>
          </Layout>
        </Layout>
      </TouchableWithoutFeedback>
    </Layout>
  );
};

export default AccountForm;
