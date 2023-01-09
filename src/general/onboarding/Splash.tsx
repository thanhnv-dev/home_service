import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {
  // LoadingDark,
  LoadingLight,
  // LogoDark,
  LogoLight,
} from '../../assets/images/index';
import styles from './styles';

const Splash = ({navigation}: {navigation: any}) => {
  const isFocused: boolean = useIsFocused();

  useEffect(() => {
    let newPage: any = null;
    if (isFocused) {
      newPage = setInterval(async () => {
        const token = await AsyncStorage.getItem('token');
        const storeOnboarding = await AsyncStorage.getItem('storeOnboarding');
        if (token) {
          return navigation.replace('AuthStack', {screen: 'ChooseService'});
        }
        if (storeOnboarding) {
          return navigation.replace('AuthStack', {screen: 'LetIsIn'});
        }
        return navigation.navigate('Onboarding');
      }, 1500);
    }
    return () => {
      clearInterval(newPage);
    };
  }, [isFocused, navigation]);
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
