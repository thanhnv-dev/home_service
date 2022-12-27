import {createSlice} from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  name: 'counter',
  initialState: {
    cardList: [],
    isLoading: false,
    errorMessage: '',
  },
  reducers: {
    setCards: (state, action) => {
      state.cardList = action?.payload;
    },
    addCards: (state, action) => {
      state.cardList = action?.payload;
    },
  },
});

export const {setCards} = cardSlice.actions;

export default cardSlice.reducer;
