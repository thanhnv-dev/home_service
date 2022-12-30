import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {
  // LogoDark,
  LogoLight,
  // LoadingDark,
  LoadingLight,
} from '../../assets/images/index';
import styles from './styles';
import {useIsFocused} from '@react-navigation/native';

const Splash = (props: any) => {
  const isFocused: boolean = useIsFocused();

  useEffect(() => {
    let newPage: any = null;
    if (isFocused) {
      newPage = setInterval(() => {
        props.navigation.navigate('Onboarding');
      }, 1500);
    }
    return () => {
      clearInterval(newPage);
    };
  }, [isFocused, props.navigation]);
  return (
    <View style={styles.container}>
      <View style={[styles.viewLogo, styles.center]}>
        <Image source={LogoLight} style={styles.logo} />
      </View>
      <View style={styles.viewLoading}>
        <Image source={LoadingLight} style={styles.loading} />
      </View>
    </View>
  );
};
export default Splash;
