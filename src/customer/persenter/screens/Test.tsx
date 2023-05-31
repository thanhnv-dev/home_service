import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from 'src/styles/index';
import {MyButton} from 'src/components/Button';
import {Loader} from 'src/components';
import {useSvGetListServiceQuery} from 'src/redux/query';

const TestScreen = ({navigation}: {navigation: any}) => {
    const {data, isLoading, refetch} = useSvGetListServiceQuery();

    const goHome = () => navigation.replace('CustomerStack');

    console.log('-------------------------------');
    console.log('Render test screen');
    console.log('-------------------------------');

    useEffect(() => {
        // refetch();
    }, []);

    return (
        <View
            style={[
                styles.flex1,
                styles.justifyContentCenter,
                styles.alignItemsCenter,
            ]}>
            <View style={[styles.mv20, Styles.w120]}>
                <MyButton title="Go Home" onPress={goHome} />
            </View>
            <View style={[styles.mv20, Styles.w120]}>
                <MyButton title="Refetch data" onPress={refetch} />
            </View>
            {data?.length !== 0 ? (
                <View>
                    {data?.map(element => {
                        return (
                            <View key={element._id} style={styles.mv20}>
                                <Text>{element.serviceName}</Text>
                            </View>
                        );
                    })}
                </View>
            ) : null}
            <Loader loading={isLoading} />
        </View>
    );
};
const Styles = StyleSheet.create({
    w120: {
        width: 120,
    },
});
export default TestScreen;
