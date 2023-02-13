import {StyleSheet} from 'react-native';
import Color from 'src/constants/Color';
const styles = StyleSheet.create({
    viewInputTwoIcon: {
        backgroundColor: 'transparent',
        flex: 8,
    },
    viewInputAnIcon: {
        flex: 9.5,
        backgroundColor: 'transparent',
    },
    viewInputNotIcon: {
        flex: 11,
        backgroundColor: 'transparent',
    },
    textInput: {
        flex: 1,
    },
    title: {
        marginVertical: 5,
        fontSize: 16,
        fontWeight: '500',
    },
    boxInput: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        flex: 1,
    },
    viewIconLeft: {
        flex: 1.5,
        backgroundColor: 'transparent',
    },
    viewIconRight: {
        backgroundColor: 'transparent',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewErrorInput: {
        marginVertical: 2,
    },
    colorError: {
        color: Color.error,
    },
});
export default styles;
