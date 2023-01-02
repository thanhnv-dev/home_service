import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '~/general/user/presenter/styles';
import {fb_logo, g_logo, a_logo, Logo} from '~/assets/images';
import {MyButton, LoginButton3rdPparty1} from '~/general/widgets';
import {Layout, Text} from '@ui-kitten/components';

const LetIsIn = ({navigation}: {navigation: any}) => {
  const goSignIn = () => navigation.navigate('SignIn');
  const goSignUp = () => navigation.navigate('SignUp');

  return (
    <Layout style={styles.container}>
      <View style={styles.viewBack} />
      <View style={[styles.viewLogo, styles.center]}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={[styles.viewTitle, styles.center]}>
        <Text style={styles.title}>Let's you in</Text>
      </View>
      <View style={styles.viewLoginWithButtons}>
        <LoginButton3rdPparty1
          title="  Continue with Facebook"
          icon={fb_logo}
        />
        <LoginButton3rdPparty1 title="  Continue with Google" icon={g_logo} />
        <LoginButton3rdPparty1 title="  Continue with Apple" icon={a_logo} />
      </View>
      <View style={[styles.viewOr, styles.center]}>
        <View style={styles.line} />
        <Text style={styles.textOr}>or</Text>
        <View style={styles.line} />
      </View>
      <View style={[styles.viewSignInButtons]}>
        <MyButton title="Sign in with password" onPress={goSignIn} />
      </View>
      <View style={[styles.viewSignUpButton, styles.center]}>
        <Text style={styles.textOr}>Don't have an account? </Text>
        <TouchableOpacity onPress={goSignUp}>
          <Text style={styles.textSignUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default LetIsIn;
