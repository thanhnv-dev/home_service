import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {
  // LogoDark,
  LogoLight,
  // LoadingDark,
  LoadingLight,
} from '../../../Assets/images/index';
import styles from './styles';

const Splash = (props: any) => {
  useEffect(() => {
    setInterval(() => {
      props.navigation.navigate('Welcome');
    }, 1500);
  });
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
