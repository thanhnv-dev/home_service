import {StyleSheet} from 'react-native';
import Color from 'src/constants/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.while,
    },
    viewLogo: {
        flex: 8,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 170,
        width: 150,
    },
    viewLoading: {
        flex: 2,
        alignItems: 'center',
    },
    loading: {
        height: 70,
        width: 70,
    },
});

export default styles;
