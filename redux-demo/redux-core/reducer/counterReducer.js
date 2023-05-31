import * as Action from '../action/actionType';

const initState = {value: 0};

const counterReducer = (state = initState, action) => {
    switch (action.type) {
        case Action.COUNTER_INCREMENTED:
            return {value: state.value + 1};

        case Action.COUNTER_DECREMENTED:
            return {value: state.value - 1};

        case Action.COUNTER_SET:
            return {value: action.value};

        default:
            return state;
    }
};

export default counterReducer;
