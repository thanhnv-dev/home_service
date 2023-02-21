import {StyleSheet} from 'react-native';
import Color from 'src/constants/Color';
import fontSize from 'src/constants/fontSize';
import {flex, spacing} from 'src/styles';

const styles = StyleSheet.create({
    ...flex,
    ...spacing,
    backgroundColorWhite: {
        backgroundColor: Color.while,
    },
});
export default styles;
