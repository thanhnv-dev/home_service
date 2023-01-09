import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {SignUp, SignIn} from '~/general/user/application';
import {
  UserSignInService,
  UserSignUpService,
} from '~/general/user/infastructure/service';

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

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    idUser: null,
    token: null,
    refreshToken: null,
  },
  reducers: {
    setIdUser: (state, action) => {
      state.idUser = action?.payload;
    },
    setToken: (state, action) => {
      state.token = action?.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action?.payload;
    },
  },
  extraReducers: builder => {
    // Bắt đầu thực hiện action login (Promise pending)
    // builder.addCase(signIn.pending, state => {
    //   // Bật trạng thái loading
    //   // state.isLoading = true;
    // });

    // Khi thực hiện action login thành công (Promise fulfilled)
    builder.addCase(signIn.fulfilled, (state: any, action: any) => {
      state.idUser = action.payload?.data?.idUser;
      state.token = action.payload?.data?.token;
      state.refreshToken = action.payload?.data?.refreshToken;
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

export const {setIdUser, setToken} = userSlice.actions;

export default userSlice.reducer;
