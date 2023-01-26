import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {GetService} from '~/customer/application';
import {SvGetListService} from '~/customer/infastructure/service';

export const getService = createAsyncThunk(
  'service/getService',
  async (_: void, {rejectWithValue}: {rejectWithValue: any}) => {
    const service = new SvGetListService();
    const interactor = new GetService(service);
    const getServiceResult = await interactor.getListService.getService();
    if (getServiceResult.isSuccess) {
      return getServiceResult;
    }
    return rejectWithValue(getServiceResult);
  },
);

export const serviceSlice = createSlice({
  name: 'counter',
  initialState: [],
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
    builder.addCase(getService.fulfilled, (state: any, action: any) => {
      state = [...action?.payload.data];
      console.log(state);
      return state;
    });
    // builder.addCase(getProfile.fulfilled, (state: any, action: any) => {
    //   state._id = action?.payload.data._id;
    //   state.firstName = action?.payload.data.firstName;
    //   state.lastName = action?.payload.data.lastName;
    //   state.email = action?.payload.data.email;
    //   state.type = action?.payload.data.type;
    // });
    // Khi thực hiện action login thất bại (Promise rejected)
    // builder.addCase(signIn.rejected, (state, action) => {
    // Tắt trạng thái loading, lưu thông báo lỗi vào store
    // console.log('rejected: ', action);
    // state.isLoading = false;
    // state.errorMessage = action.payload;
    // });
  },
});

// export const {} = serviceSlice.actions;

export default serviceSlice.reducer;
