import { createSlice } from "@reduxjs/toolkit";

// 買い物籠の初期化
const initialState = {
  cartItem: [],
  amount: 0,
  total: 0,
}

const cartSlice = createSlice({
  // nameはuseSelectorで呼び出すことになるので重要
  name: "cart",
  // state
  initialState,
  // reducers
  reducers: {}
})

export default cartSlice.reducer;