import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Loader = ({loading, mode}: {loading: boolean; mode?: number}) => {
    return loading ? (
        <View style={mode === 2 ? styles.container2 : styles.container}>
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
    container2: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: '#00000090',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
