import {StyleSheet} from 'react-native';
import Color from 'src/constants/Color';
import fontSize from 'src/constants/fontSize';
import {flex, spacing, text} from 'src/styles';

const styles = StyleSheet.create({
    ...flex,
    ...spacing,
    ...text,
    backgroundColorWhite: {
        backgroundColor: Color.while,
    },
    iconArrowLeft: {
        width: 25,
        height: 25,
    },
});
export default styles;
