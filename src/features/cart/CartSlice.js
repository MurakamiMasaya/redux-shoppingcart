import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItem"

// 買い物籠の初期化
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
}

const cartSlice = createSlice({
  // nameはuseSelectorで呼び出すことになるので重要
  // const { amount } = useSelector((store) => store.cart)的な
  name: "cart",
  // state
  initialState,
  // reducers
  reducers: {}
})

export default cartSlice.reducer;