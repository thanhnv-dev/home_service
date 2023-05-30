import {StyleSheet} from 'react-native';

const flex = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    flex2: {
        flex: 2,
    },
    flex3: {
        flex: 3,
    },
    flex4: {
        flex: 4,
    },
    flexRow: {
        flexDirection: 'row',
    },
    justifyContentCenter: {
        justifyContent: 'center',
    },
    justifyContentStart: {
        justifyContent: 'flex-start',
    },

    justifyContentEnd: {
        justifyContent: 'flex-end',
    },

    justifyContentBetween: {
        justifyContent: 'space-between',
    },
    justifyContentAround: {
        justifyContent: 'space-around',
    },
    alignItemsCenter: {
        alignItems: 'center',
    },
});
export default flex;
