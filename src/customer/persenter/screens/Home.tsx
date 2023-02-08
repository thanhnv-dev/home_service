import {ScrollView, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import styles from '../style';
import {SvgUri} from 'react-native-svg';
import {APIConstants} from '~/network/APIConstants';
import {Loader} from '~/components';
import {user, hand, notification, bookmark} from '~/assets/images';
import {useSelector} from 'react-redux';
import {getUser} from '~/redux/selectors/userSelector';
import {useSvGetListServiceQuery} from '~/network';
import {useAppDispatch} from '~/redux/hooks';

const Home = ({navigation}: {navigation: any}) => {
    const dispatch = useAppDispatch();

    const {data, isLoading} = useSvGetListServiceQuery();

    const userProfile = useSelector(getUser);

    const goProfile = () => navigation.navigate('Profile');

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
                </SafeAreaView>
            </ScrollView>
            <Loader loading={isLoading} />
        </Layout>
    );
};

export default Home;
