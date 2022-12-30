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
import {
  FocusedColor,
  FocusedColorBoxEmail,
  FocusedColorBoxPass,
  Button1,
} from '~/general/widgets';
import Color from '~/constants/Color';
import {Formik} from 'formik';
import styles from '~/general/user/presenter/styles';
import {fb_logo, g_logo, a_logo} from '~/assets/images';
import {SignupSchema} from '../../../../validation/SchemaValidation';
import {signUp} from '../../../../network/controllers/userControllers';
import {IconApp} from '../../../widgets';

const SignIn = (props: any) => {
  const [focusBox, setFocusBox] = useState('');
  const [remenber, setRemenber] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const goSignUp = () => props.navigation.navigate('SignUp');

  // const ArrowIcon = () => (
  //   <Icon name="arrow-back-outline" fill="#8F9BB3" style={styles.iconBack} />
  // );

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
      fill={FocusedColorBoxPass(Color.violet, Color.grayIcon, focusBox)}
      style={styles.iconInput}
    />
  );
  const EyeIcon = () => (
    <Icon
      name="eye-outline"
      fill={FocusedColorBoxPass(Color.violet, Color.grayIcon, focusBox)}
      style={styles.iconInput}
    />
  );
  const EyeOffIcon = () => (
    <Icon
      name="eye-off-outline"
      fill={FocusedColorBoxPass(Color.violet, Color.grayIcon, focusBox)}
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
                accessoryLeft={IconApp({
                  fill: '#8F9BB3',
                  name: 'arrow-back-outline',
                  style: styles.iconBack,
                })}
                onPress={() => props.navigation.goBack()}
              />
              <Text style={styles.textTitle}>{'Login to your \nAccount'}</Text>
            </Layout>
            <Formik
              initialValues={{email: '', password: ''}}
              validationSchema={SignupSchema}
              onSubmit={values => {
                Keyboard.dismiss();
                signUp(values);
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
                          borderColor: FocusedColorBoxEmail(
                            Color.violet,
                            Color.border,
                            focusBox,
                          ),
                        },
                      ]}>
                      <Layout
                        style={[
                          styles.viewIconInput,
                          styles.center,
                          {
                            backgroundColor: FocusedColorBoxEmail(
                              Color.backgroundColorViolet,
                              Color.border,
                              focusBox,
                            ),
                          },
                        ]}>
                        <EmailIcon />
                      </Layout>
                      <Layout
                        style={[
                          styles.viewInputEmail,
                          {
                            backgroundColor: FocusedColorBoxEmail(
                              Color.backgroundColorViolet,
                              Color.border,
                              focusBox,
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
                          borderColor: FocusedColorBoxPass(
                            Color.violet,
                            Color.border,
                            focusBox,
                          ),
                        },
                      ]}>
                      <Layout
                        style={[
                          styles.viewIconInput,
                          styles.center,
                          {
                            backgroundColor: FocusedColorBoxPass(
                              Color.backgroundColorViolet,
                              Color.border,
                              focusBox,
                            ),
                          },
                        ]}>
                        <LockIcon />
                      </Layout>
                      <Layout
                        style={[
                          styles.viewInputPass,
                          {
                            backgroundColor: FocusedColorBoxPass(
                              Color.backgroundColorViolet,
                              Color.border,
                              focusBox,
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
                            backgroundColor: FocusedColorBoxPass(
                              Color.backgroundColorViolet,
                              Color.border,
                              focusBox,
                            ),
                          },
                        ]}
                        appearance="ghost"
                        accessoryLeft={secureTextEntry ? EyeIcon : EyeOffIcon}
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
                      title={'Sign in'}
                      onPress={handleSubmit}
                      style={styles.sizeFull}
                    />
                    <TouchableOpacity>
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
            <Text style={styles.textOr}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => goSignUp()}>
              <Text style={styles.textSignUp}> Sign Up</Text>
            </TouchableOpacity>
          </Layout>
        </Layout>
      </TouchableWithoutFeedback>
    </Layout>
  );
};

export default SignIn;
