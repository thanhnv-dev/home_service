import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Loader = ({loading}: {loading: boolean}) => {
    return loading ? (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    ) : null;
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
