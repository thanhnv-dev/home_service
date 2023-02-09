import {StyleSheet} from 'react-native';
import Color from '~/constants/Color';
const styles = StyleSheet.create({
    iconInput: {
        width: 20,
        height: 20,
    },
    colorBorder: {
        backgroundColor: Color.border,
    },
    iconBack: {
        width: 30,
        height: 30,
    },
    iconChecked: {
        height: 16,
        width: 16,
    },
    button: {
        flexDirection: 'row',
        borderWidth: 1,
        marginHorizontal: 20,
        flex: 1,
        marginVertical: 10,
        borderRadius: 10,
        borderColor: Color.border,
    },
    button2: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Color.border,
    },
    button3: {
        backgroundColor: Color.violet,
        height: 50,
        borderRadius: 100,
        shadowColor: Color.violet,
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 3,
            height: 10,
        },
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: Color.while,
        fontWeight: 'bold',
    },
    fs14bold: {
        fontSize: 14,
        fontWeight: '500',
    },
    icon3rd: {
        height: 25,
        width: 25,
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
    viewInputNotIcon: {
        flex: 11,
        backgroundColor: 'transparent',
    },
    viewInputAnIcon: {
        flex: 9.5,
        backgroundColor: 'transparent',
    },
    viewInputTwoIcon: {
        backgroundColor: 'transparent',
        flex: 8,
    },
    textInput: {
        flex: 1,
    },
    title: {
        marginVertical: 5,
        fontSize: 16,
        fontWeight: '500',
    },
    viewErrorInput: {
        marginVertical: 2,
    },
    colorError: {
        color: Color.error,
    },
});
export default styles;
