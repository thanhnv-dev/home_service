import * as Action from './actionType';

export const couterIncremented = () => {
    return {type: Action.COUNTER_INCREMENTED};
};

export const couterDecremented = () => {
    return {type: Action.COUNTER_DECREMENTED};
};

export const couterSet = value => {
    return {type: Action.COUNTER_SET, value};
};
