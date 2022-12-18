import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {Logo, fb_logo, g_logo, a_logo} from '../../../Assets/images/index';
import {Button} from '../Widgets/index';

const LetIsIn = () => {
  const ButtonLoginWith = ({
    // onPress,
    icon,
    title,
  }: {
    // onPress: any;
    icon: any;
    title: string;
  }) => {
    return (
      <TouchableOpacity style={[styles.button, styles.center]}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.fs14bold}>{title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
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
        <Button title="Sign in with password" onPress={() => {}} />
      </View>
      <View style={[styles.viewSignUpButton, styles.center]}>
        <Text style={styles.textOr}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.textSignUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LetIsIn;
