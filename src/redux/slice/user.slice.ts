import {createSlice} from '@reduxjs/toolkit';
import {IUser} from 'src/public/auth/domain';
import {getProfile, signIn} from '../thunkAction/user';

export const userSlice = createSlice({
    name: 'user',
    initialState: {} as IUser,
    reducers: {
        setUser: (state, action) => {
            state._id = action?.payload._id;
            state.firstName = action?.payload.firstName;
            state.lastName = action?.payload.lastName;
            state.email = action?.payload.email;
            state.type = action?.payload.type;
        },
    },
    extraReducers: builder => {
        // builder.addCase(signIn.pending, state => {
        //   // state.isLoading = true;
        // });

        builder.addCase(signIn.fulfilled, (state: IUser, action: any) => {
            state._id = action?.payload.data._id;
            state.firstName = action?.payload.data.firstName;
            state.lastName = action?.payload.data.lastName;
            state.email = action?.payload.data.email;
            state.type = action?.payload.data.type;
        });

        builder.addCase(getProfile.fulfilled, (state: any, action: any) => {
            state._id = action?.payload.data._id;
            state.firstName = action?.payload.data.firstName;
            state.lastName = action?.payload.data.lastName;
            state.email = action?.payload.data.email;
            state.type = action?.payload.data.type;
        });

        // builder.addCase(signIn.rejected, (state, action) => {
        // console.log('rejected: ', action);
        // state.isLoading = false;
        // state.errorMessage = action.payload;
        // });
    },
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
