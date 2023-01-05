import {
  View,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Button, Layout, Icon, Text} from '@ui-kitten/components';
import {Formik} from 'formik';
import {
  EyeIcon,
  EyeOffIcon,
  IconEmail,
  IconLock,
  IconBack,
  IconCheck,
} from '~/assets/Icons/IconApp';
import {MyButton, InputBox, LoginButton3rdPparty2} from '~/general/widgets';
import {SignupSchema} from '~/validation/SchemaValidation';
import styles from '../styles';

const SignUp = ({navigation}: {navigation: any}) => {
  const goBack = () => navigation.goBack();
  const submitSignUp = (values: object) => {
    Keyboard.dismiss();
    // signUp(values);
    console.log(values);
  };
  return (
    <Layout style={styles.container}>
      <ScrollView>
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
          <Text style={[styles.textTitle, {marginTop: 50}]}>
            {'Create your \nAccount'}
          </Text>
        </Layout>
        <Formik
          initialValues={{email: '', password: '', fistName: '', lastName: ''}}
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
            <Layout style={styles.viewInput2}>
              <InputBox
                value={values.fistName}
                borderColorBox="gray"
                titleInput="First Name"
                // IconLeft={IconEmail({
                //   color: focusBoxColor({
                //     color2: Color.grayIcon,
                //     refBox: EMAIL_BOX,
                //   }),
                //   style: styles.iconInput,
                // })}
                // placeholder="Email"
                // onChangeText={handleChange('email')}
                // onBlur={handleBlur('email')}
                // // onFocus={() => setFocusBox(EMAIL_BOX)}
                // colorTextInput={errors.email ? Color.error : Color.violet}
                // selectionColor={Color.violet}
              />
              <Layout style={styles.viewErrorInput}>
                {errors.fistName && touched.fistName ? (
                  <Text style={styles.colorError}>{errors.fistName}</Text>
                ) : (
                  <Text />
                )}
              </Layout>
              <InputBox
                value={values.lastName}
                borderColorBox="gray"
                titleInput="Last Name"
                // IconLeft={IconEmail({
                //   color: focusBoxColor({
                //     color2: Color.grayIcon,
                //     refBox: EMAIL_BOX,
                //   }),
                //   style: styles.iconInput,
                // })}
                // placeholder="Email"
                // onChangeText={handleChange('email')}
                // onBlur={handleBlur('email')}
                // // onFocus={() => setFocusBox(EMAIL_BOX)}
                // colorTextInput={errors.email ? Color.error : Color.violet}
                // selectionColor={Color.violet}
              />
              <Layout style={styles.viewErrorInput}>
                {errors.fistName && touched.fistName ? (
                  <Text style={styles.colorError}>{errors.fistName}</Text>
                ) : (
                  <Text />
                )}
              </Layout>
              <InputBox
                borderColorBox="gray"
                titleInput="Email"
                // IconLeft={IconEmail({
                //   color: focusBoxColor({
                //     color2: Color.grayIcon,
                //     refBox: EMAIL_BOX,
                //   }),
                //   style: styles.iconInput,
                // })}
                // placeholder="Email"
                // value={values.email}
                // onChangeText={handleChange('email')}
                // onBlur={handleBlur('email')}
                // // onFocus={() => setFocusBox(EMAIL_BOX)}
                // colorTextInput={errors.email ? Color.error : Color.violet}
                // selectionColor={Color.violet}
              />
              <Layout style={styles.viewErrorInput}>
                {errors.fistName && touched.fistName ? (
                  <Text style={styles.colorError}>{errors.fistName}</Text>
                ) : (
                  <Text />
                )}
              </Layout>
              <InputBox
                borderColorBox="gray"
                titleInput="Password"
                // IconLeft={IconEmail({
                //   color: focusBoxColor({
                //     color2: Color.grayIcon,
                //     refBox: EMAIL_BOX,
                //   }),
                //   style: styles.iconInput,
                // })}
                // placeholder="Email"
                // value={values.email}
                // onChangeText={handleChange('email')}
                // onBlur={handleBlur('email')}
                // // onFocus={() => setFocusBox(EMAIL_BOX)}
                // colorTextInput={errors.email ? Color.error : Color.violet}
                // selectionColor={Color.violet}
              />
              <Layout style={styles.viewErrorInput}>
                {errors.fistName && touched.fistName ? (
                  <Text style={styles.colorError}>{errors.fistName}</Text>
                ) : (
                  <Text />
                )}
              </Layout>
              <InputBox
                borderColorBox="gray"
                titleInput="Confirm Password"
                // IconLeft={IconEmail({
                //   color: focusBoxColor({
                //     color2: Color.grayIcon,
                //     refBox: EMAIL_BOX,
                //   }),
                //   style: styles.iconInput,
                // })}
                // placeholder="Email"
                // value={values.email}
                // onChangeText={handleChange('email')}
                // onBlur={handleBlur('email')}
                // // onFocus={() => setFocusBox(EMAIL_BOX)}
                // colorTextInput={errors.email ? Color.error : Color.violet}
                // selectionColor={Color.violet}
              />
              <Layout style={styles.viewErrorInput}>
                {errors.fistName && touched.fistName ? (
                  <Text style={styles.colorError}>{errors.fistName}</Text>
                ) : (
                  <Text />
                )}
              </Layout>
            </Layout>
          )}
        </Formik>
        <Layout style={{flex: 0.3, borderWidth: 1}}></Layout>
        <Layout style={{flex: 0.3, borderWidth: 1}}></Layout>
      </ScrollView>
    </Layout>
  );
};

export default SignUp;
