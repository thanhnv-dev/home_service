import {StyleSheet} from 'react-native';
import Color from 'src/constants/Color';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.while,
    },
    childContainer: {
        flex: 1,
        marginHorizontal: 20,
    },
    viewHeader: {
        flexDirection: 'row',
        height: 60,
    },
    viewUser: {
        flex: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewButtonHeader: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    viewAvt: {
        marginRight: 10,
    },
    imageAvt: {
        width: 50,
        height: 50,
    },
    viewTextHeader: {
        justifyContent: 'space-between',
    },
    viewGreeting: {
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    hand: {
        width: 20,
        height: 20,
    },
    textName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    button: {
        width: 25,
        height: 25,
    },
});
export default styles;
