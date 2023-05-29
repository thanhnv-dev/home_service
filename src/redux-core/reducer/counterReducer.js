const initState = {value: 0};
import * as Action from '../action/actionType';

const counterReducer = (state = initState, action) => {
    switch (action.type) {
        case Action.COUNTER_INCREMENTED:
            return {value: state.value + 1};

        case Action.COUNTER_DECREMENTED:
            return {value: state.value - 1};

        default:
            return state;
    }
};

export default counterReducer;
