import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles';
import {fb_logo, g_logo, a_logo, Logo} from '../../../../assets/images/index';
import {Button1} from '../../../widgets/index';
import {Layout, Text} from '@ui-kitten/components';

const LetIsIn = ({navigation}: {navigation: any}) => {
  const ButtonLoginWith = (props: any) => {
    return (
      <TouchableOpacity style={[styles.button, styles.center]}>
        <Image source={props.icon} style={styles.icon} />
        <Text style={styles.fs14bold}>{props.title}</Text>
      </TouchableOpacity>
    );
  };

  const nextPage = (type: string) =>
    navigation.navigate('AccountForm', {
      type: type,
    });

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
        <ButtonLoginWith title="Continue with Facebook" icon={fb_logo} />
        <ButtonLoginWith title="Continue with Google" icon={g_logo} />
        <ButtonLoginWith title="Continue with Apple" icon={a_logo} />
      </View>
      <View style={[styles.viewOr, styles.center]}>
        <View style={styles.line} />
        <Text style={styles.textOr}>or</Text>
        <View style={styles.line} />
      </View>
      <View style={[styles.viewSignInButtons, styles.center]}>
        <Button1
          title="Sign in with password"
          onPress={() => nextPage('signIn')}
          style={styles.size80}
          disabled={false}
        />
      </View>
      <View style={[styles.viewSignUpButton, styles.center]}>
        <Text style={styles.textOr}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => nextPage('signUp')}>
          <Text style={styles.textSignUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default LetIsIn;
