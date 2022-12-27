import {createSelector} from 'reselect';
import {RootState} from '../index';
export const getUser = createSelector(
  (state: RootState) => state,
  state => state.card,
);
