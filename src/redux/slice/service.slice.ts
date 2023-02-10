import {createSlice} from '@reduxjs/toolkit';
import {ServiceInterface} from 'src/customer/domain';

export const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        serviceList: [] as ServiceInterface[],
    },
    reducers: {
        setService: (state, action) => {
            state.serviceList = action.payload;
        },
    },
});

export const {setService} = serviceSlice.actions;

export default serviceSlice.reducer;
