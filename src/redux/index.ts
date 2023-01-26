import {configureStore} from '@reduxjs/toolkit';
import userSlice from './user.slide';
import serviceSlide from './service.slide';

const createDebugger = require('redux-flipper').default;

export const store = configureStore({
  reducer: {user: userSlice, service: serviceSlide},
  middleware: getDefaultMiddleware =>
    __DEV__
      ? getDefaultMiddleware({serializableCheck: false}).concat(
          createDebugger(),
        )
      : getDefaultMiddleware({
          serializableCheck: false,
        }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
