import { createSlice } from '@reduxjs/toolkit';

const kullaniciSlice = createSlice({
  name: 'kullanici',
  initialState: {
    kullaniciAdi: null,
  },
  reducers: {
    setKullaniciAdi: (state, action) => {
      state.kullaniciAdi = action.payload;
    },
  },
});

export const { setKullaniciAdi } = kullaniciSlice.actions;
export default kullaniciSlice.reducer;
