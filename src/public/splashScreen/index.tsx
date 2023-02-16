import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {IApiResponse} from 'src/network/apiResponses/IApiResponse';
import {UserResponse} from 'src/network/apiResponses/user';
import {useAppDispatch} from 'src/redux/hooks';
import {getProfile} from 'src/redux/thunkAction/user';
import helper from 'src/utils/helper';
import {
    // LoadingDark,
    LoadingLight,
    // LogoDark,
    LogoLight,
} from '../../assets/images/index';
import styles from './styles';

const Splash = ({navigation}: {navigation: any}) => {
    const dispatch = useAppDispatch();

    console.log('Splash');

    const initApp = async () => {
        const _id = await AsyncStorage.getItem('_id');

        const storeOnboarding = await AsyncStorage.getItem('storeOnboarding');

        setTimeout(async () => {
            if (storeOnboarding) {
                if (_id) {
                    const getUser = await dispatch(getProfile({_id: _id}));

                    const response: IApiResponse<UserResponse> =
                        getUser.payload;

                    if (response.isSuccess) {
                        helper.showToast({
                            msg: response?.data?.msg!,
                            type: 'success',
                        });
                    }
                }
                return navigation.replace('LetIsIn');
            } else {
                navigation.replace('Onboarding');
            }
        }, 1500);
    };

    useEffect(() => {
        initApp();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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
