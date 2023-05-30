import {createSelector} from 'reselect';
import {RootState} from '../index';

const getUser = createSelector(
    (state: RootState) => state,
    state => state?.user,
);
const getUserType = createSelector(
    (state: RootState) => state,
    state => state?.user?.type,
);

export {getUser, getUserType};
