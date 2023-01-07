import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {SignUp, SignIn} from '~/general/user/application';
import {
  UserSignInService,
  UserSignUpService,
} from '~/general/user/infastructure/service';

export const signUp = createAsyncThunk('user/signUp', async (data: object) => {
  const service = new UserSignUpService();
  const interactor = new SignUp(service);
  const cardResult = await interactor.signUpService.signUp(data);
  return cardResult;
});
export const signIn = createAsyncThunk('user/signIn', async (data: object) => {
  const service = new UserSignInService();
  const interactor = new SignIn(service);
  const cardResult = await interactor.signInService.signIn(data);
  return cardResult;
});

export const cardSlice = createSlice({
  name: 'counter',
  initialState: {
    user: [],
    isLoading: false,
    errorMessage: '',
  },
  reducers: {
    setCards: (state, action) => {
      state.user = action?.payload;
    },
  },
  // Code logic xử lý async action
  // extraReducers: builder => {
  //   // Bắt đầu thực hiện action login (Promise pending)
  //   builder.addCase(getCardList.pending, state => {
  //     // Bật trạng thái loading
  //     state.isLoading = true;
  //   });

  //   // Khi thực hiện action login thành công (Promise fulfilled)
  //   builder.addCase(getCardList.fulfilled, (state, action) => {
  //     // Tắt trạng thái loading, lưu thông tin user vào store
  //     console.log('action.payload.data?.cards ', action.payload.data?.cards);
  //     state.isLoading = false;
  //     state.cardList = action.payload.data?.cards;
  //   });

  //   // Khi thực hiện action login thất bại (Promise rejected)
  //   builder.addCase(getCardList.rejected, (state, action) => {
  //     // Tắt trạng thái loading, lưu thông báo lỗi vào store
  //     state.isLoading = false;
  //     state.errorMessage = action.payload;
  //   });

  //   builder.addCase(addCard.fulfilled, (state, action) => {
  //     // Tắt trạng thái loading, lưu thông tin user vào store
  //     state.isLoading = false;
  //     state.cardList = [...state.cardList, action.payload.data?.createCard];
  //   });

  //   builder.addCase(deleteCard.fulfilled, (state, action) => {
  //     // Tắt trạng thái loading, lưu thông tin user vào store
  //     state.isLoading = false;
  //     const id = action.meta.arg;
  //     state.cardList = [...state.cardList.filter(x => x.id != id)];
  //   });
  // },
});

export const {setCards} = cardSlice.actions;

export default cardSlice.reducer;
