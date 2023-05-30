import {
    ScrollView,
    Image,
    SafeAreaView,
    TouchableOpacity,
    Button,
    View,
} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import styles from '../style';
import {SvgUri} from 'react-native-svg';
import {APIConstants} from 'src/network/config/APIConstants';
import {Loader, MyButton} from 'src/components';
import {user, hand, notification, bookmark} from 'src/assets/images';
import {useSelector} from 'react-redux';
import {getUser} from 'src/redux/selectors';
import {useSvGetListServiceQuery, usePrefetch} from 'src/redux/query';
// import {useAppDispatch} from 'src/redux/hooks';

const Home = ({navigation}: {navigation: any}) => {
    // const dispatch = useAppDispatch();

    const userProfile = useSelector(getUser);

    const goProfile = () => navigation.navigate('Profile');

    const nextScreen = () => {
        navigation.replace('TestScreen');
    };

    const prefetchPage = usePrefetch('SvGetListService');

    const onPrefetch = () => {
        prefetchPage();
    };

    return (
        <Layout style={styles.container}>
            {/* {!loading && (
        <SvgUri
          width="10%"
          height="10%"
          uri={`${APIConstants.BASE_URL}${data[2].imageEndPoint}`}
        />
      )} */}
            <ScrollView>
                <SafeAreaView style={styles.childContainer}>
                    <Layout style={styles.viewHeader}>
                        <Layout style={styles.viewUser}>
                            <TouchableOpacity
                                onPress={goProfile}
                                style={styles.viewAvt}>
                                <Image
                                    source={
                                        userProfile.image
                                            ? userProfile.image
                                            : user
                                    }
                                    style={styles.imageAvt}
                                />
                            </TouchableOpacity>
                            <Layout style={styles.viewTextHeader}>
                                <Layout style={styles.viewGreeting}>
                                    <Text>Good Morning </Text>
                                    <Image source={hand} style={styles.hand} />
                                </Layout>
                                <Text
                                    style={
                                        styles.textName
                                    }>{`${userProfile.firstName} ${userProfile.lastName}`}</Text>
                            </Layout>
                        </Layout>
                        <Layout style={styles.viewButtonHeader}>
                            <TouchableOpacity>
                                <Image
                                    source={notification}
                                    style={styles.button}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={bookmark}
                                    style={styles.button}
                                />
                            </TouchableOpacity>
                        </Layout>
                    </Layout>
                    <MyButton title="Next Screen" onPress={nextScreen} />
                    <View style={styles.mt20}>
                        <MyButton title="Prefetch" onPress={onPrefetch} />
                    </View>
                </SafeAreaView>
            </ScrollView>
            {/* <Loader loading={isLoading} /> */}
        </Layout>
    );
};

export default Home;
