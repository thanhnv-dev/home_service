import {StyleSheet} from 'react-native';
import Color from 'src/constants/Color';
const styles = StyleSheet.create({
    icon3rd: {
        height: 25,
        width: 25,
    },
    fs14bold: {
        fontSize: 14,
        fontWeight: '500',
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
    center: {
        justifyContent: 'center',
        alignItems: 'center',
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
    textButton: {
        color: Color.while,
        fontWeight: 'bold',
    },
});
export default styles;
