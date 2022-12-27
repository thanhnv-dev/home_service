import {configureStore} from '@reduxjs/toolkit';
import cardSlice from './user.slide';

export const store = configureStore({
  reducer: {card: cardSlice},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
