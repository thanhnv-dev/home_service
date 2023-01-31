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
import {getProfile} from '~/redux/user.slide';
import {UserResponse} from '~/network/apiResponses/user';
import {IApiResponse} from '~/network/IApiResponse';
import {useAppDispatch} from '~/redux/hooks';

const Splash = ({navigation}: {navigation: any}) => {
  const isFocused: boolean = useIsFocused();
  const dispatch = useAppDispatch();

  useEffect(() => {
    let newPage: any = null;
    if (isFocused) {
      newPage = setInterval(async () => {
        const _id = await AsyncStorage.getItem('_id');
        const storeOnboarding = await AsyncStorage.getItem('storeOnboarding');
        if (storeOnboarding) {
          if (_id) {
            const getUser = await dispatch(getProfile({_id: _id}));
            const response: IApiResponse<UserResponse> = getUser.payload;
            // showToast({msg: response?.data?.msg!, type: 'success'});
            if (response.isSuccess) {
              return response.data?.type === 'PROVIDER'
                ? navigation.replace('ProviderStack', {screen: 'Home'})
                : navigation.replace('CustomerStack', {screen: 'Home'});
            }
          }
          return navigation.replace('AuthStack', {screen: 'LetIsIn'});
        } else {
          navigation.navigate('Onboarding');
        }
      }, 1500);
    }
    return () => {
      clearInterval(newPage);
    };
  }, [dispatch, isFocused, navigation]);
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
