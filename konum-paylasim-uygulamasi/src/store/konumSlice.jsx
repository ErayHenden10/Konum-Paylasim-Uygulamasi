

import { createSlice } from '@reduxjs/toolkit';
import { fakeApi } from '../services/api';

const konumSlice = createSlice({
  name: 'konum',
  initialState: {
    konum: null,
    konumPaylasiliyor: false,
  },
  reducers: {
    setKonum: (state, action) => {
      state.konum = action.payload;
    },
    setKonumPaylasiliyor: (state, action) => {
      state.konumPaylasiliyor = action.payload;
    },
  },
});


export const konumPaylasAsync = () => async (dispatch, getState) => {
  try {
    const { konum } = getState().konum;

   
    await fakeApi.postKonum(konum);

   
    dispatch(setKonumPaylasiliyor(true));
  } catch (error) {
    console.error('Konum paylaşımı sırasında hata:', error);
  }
};

export const { setKonum, setKonumPaylasiliyor } = konumSlice.actions;
export default konumSlice.reducer;
