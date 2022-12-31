import React, {useState} from 'react';
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import {Button, Layout, Text} from '@ui-kitten/components';
import {
  MyButton,
  IconBack,
  IconCheck,
  IconEmail,
  IconLock,
  EyeIcon,
  EyeOffIcon,
  InputBox,
} from '~/general/widgets';
import Color from '~/constants/Color';
import {EMAIL_BOX, PASSWORD_BOX} from '~/constants/Const';
import {Formik} from 'formik';
import styles from '~/general/user/presenter/styles';
import {fb_logo, g_logo, a_logo} from '~/assets/images';
import {SignupSchema} from '~/validation/SchemaValidation';
// import {signUp} from '~/network/controllers/userControllers';
// import {UserService} from '~/general/user/infastructure/service';

const SignIn = ({navigation}: {navigation: any}) => {
  const goSignUp = () => navigation.navigate('SignUp');
  const [focusBox, setFocusBox] = useState('');
  const [remenber, setRemenber] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const cancelFocus = () => {
    Keyboard.dismiss();
    if (focusBox !== '') {
      setFocusBox('');
    }
  };
  const submitSignUp = (values: object) => {
    Keyboard.dismiss();
    // signUp(values);
    console.log(values);
  };
  const goBack = () => navigation.goBack();
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
      })
    : EyeOffIcon({
        color: focusBoxColor({
          color1: Color.violet,
          color2: Color.grayIcon,
          refBox: PASSWORD_BOX,
        }),
      });

  return (
    <Layout style={styles.container}>
      <TouchableWithoutFeedback style={styles.container} onPress={cancelFocus}>
        <Layout style={styles.childContainer}>
          <KeyboardAvoidingView
            style={styles.viewChange}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Layout style={styles.viewTitleIconBack}>
              <Button
                style={styles.viewIconBack}
                appearance="ghost"
                accessoryLeft={IconBack}
                onPress={goBack}
              />
              <Text style={styles.textTitle}>{'Login to your \nAccount'}</Text>
            </Layout>
            <Formik
              initialValues={{email: '', password: ''}}
              validationSchema={SignupSchema}
              onSubmit={submitSignUp}>
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
                      })}
                      placeholder="Email"
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      onFocus={() => setFocusBox(EMAIL_BOX)}
                      colorTextInput={errors.email ? Color.error : Color.violet}
                      selectionColor={Color.violet}
                    />
                    {errors.email && touched.email ? (
                      <Text style={styles.colorError}>{errors.email}</Text>
                    ) : (
                      <Text />
                    )}
                    <InputBox
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
                      })}
                      IconRight={swichIconEye}
                      placeholder={'Password'}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      onFocus={() => setFocusBox(PASSWORD_BOX)}
                      onPressIconRight={() =>
                        setSecureTextEntry(!secureTextEntry)
                      }
                      secureTextEntry={secureTextEntry}
                      colorTextInput={
                        errors.password ? Color.error : Color.violet
                      }
                      selectionColor={Color.violet}
                    />
                    {errors.password && touched.password ? (
                      <Text style={styles.colorError}>{errors.password}</Text>
                    ) : (
                      <Text />
                    )}
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
                        <IconCheck />
                      </TouchableOpacity>
                      <Text>{'  Remenber me'}</Text>
                    </Layout>
                    <MyButton
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
