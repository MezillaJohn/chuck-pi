import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Payload {
  usersCoin: string[];
}

const initialState: Payload = {
  usersCoin: ["BTC", "ETH", "USDT", "LTC"],
};

const saveCoinSlice = createSlice({
  name: "saveToken",
  initialState,
  reducers: {
    saveCoin(state, action: PayloadAction<string>) {
      state.usersCoin = [...state.usersCoin, action.payload];
    },

    removeCoin(state, action: PayloadAction<string>) {
      state.usersCoin = state.usersCoin.filter(
        (coin) => coin !== action.payload
      );
    },
  },
});

export const { saveCoin, removeCoin } = saveCoinSlice.actions;

export default saveCoinSlice.reducer;
