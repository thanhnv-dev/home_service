import {configureStore} from '@reduxjs/toolkit';
import userSlice from './user.slide';
import serviceSlide from './service.slide';
import {getListService} from '~/network';

const createDebugger = require('redux-flipper').default;

export const store = configureStore({
    reducer: {
        user: userSlice,
        service: serviceSlide,
        [getListService.reducerPath]: getListService.reducer,
    },
    middleware: getDefaultMiddleware =>
        __DEV__
            ? getDefaultMiddleware({serializableCheck: false})
                  .concat(createDebugger())
                  .concat(getListService.middleware)
            : getDefaultMiddleware({
                  serializableCheck: false,
              }).concat(getListService.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
