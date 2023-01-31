import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {SignUp, SignIn, GetProfile} from '~/general/user/application';
import {
  UserSignInService,
  UserSignUpService,
  UserGetProfileService,
} from '~/general/user/infastructure/service';
import {IUser} from '~/general/user/domain';

export const signUp = createAsyncThunk(
  'user/signUp',
  async (data: object, {rejectWithValue}: {rejectWithValue: any}) => {
    const service = new UserSignUpService();
    const interactor = new SignUp(service);
    const signUpResult = await interactor.signUpService.signUp(data);
    if (signUpResult.isSuccess) {
      return signUpResult;
    }
    return rejectWithValue(signUpResult);
  },
);
export const signIn = createAsyncThunk(
  'user/signIn',
  async (data: object, {rejectWithValue}: {rejectWithValue: any}) => {
    const service = new UserSignInService();
    const interactor = new SignIn(service);
    const signinResult = await interactor.signInService.signIn(data);
    if (signinResult.isSuccess) {
      return signinResult;
    }
    return rejectWithValue(signinResult);
  },
);
export const getProfile = createAsyncThunk(
  'user/getProfile',
  async (data: object, {rejectWithValue}: {rejectWithValue: any}) => {
    const service = new UserGetProfileService();
    const interactor = new GetProfile(service);
    const signinResult = await interactor.getProfileService.getProfile(data);
    if (signinResult.isSuccess) {
      return signinResult;
    }
    return rejectWithValue(signinResult);
  },
);

export const userSlice = createSlice({
  name: 'counter',
  initialState: {} as IUser,
  // {
  //   _id: null,
  //   firstName: null,
  //   lastName: null,
  //   email: null,
  //   type: null,
  // },
  reducers: {
    // setUser: (state, action) => {
    //   state._id = action?.payload._id;
    //   state.firstName = action?.payload.firstName;
    //   state.lastName = action?.payload.lastName;
    //   state.email = action?.payload.email;
    //   state.type = action?.payload.type;
    // },
  },
  extraReducers: builder => {
    // Bắt đầu thực hiện action login (Promise pending)
    // builder.addCase(signIn.pending, state => {
    //   // Bật trạng thái loading
    //   // state.isLoading = true;
    // });

    // Khi thực hiện action login thành công (Promise fulfilled)
    builder.addCase(signIn.fulfilled, (state: any, action: any) => {
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

    // Khi thực hiện action login thất bại (Promise rejected)
    // builder.addCase(signIn.rejected, (state, action) => {
    // Tắt trạng thái loading, lưu thông báo lỗi vào store
    // console.log('rejected: ', action);
    // state.isLoading = false;
    // state.errorMessage = action.payload;
    // });
  },
});

// export const {setUser} = userSlice.actions;

export default userSlice.reducer;
