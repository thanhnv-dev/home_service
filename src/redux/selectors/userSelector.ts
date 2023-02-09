import {createSelector} from 'reselect';
import {RootState} from '../index';

export const getUser = createSelector(
    (state: RootState) => state,
    state => state.user,
);
export const getUserType = createSelector(
    (state: RootState) => state,
    state => state.user.type,
);
