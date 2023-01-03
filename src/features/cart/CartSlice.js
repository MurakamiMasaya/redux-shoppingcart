import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItem"

// 買い物籠の初期化
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 4,
}

const cartSlice = createSlice({
  // nameはuseSelectorで呼び出すことになるので重要
  // const { amount } = useSelector((store) => store.cart)的な
  name: "cart",
  // state
  initialState,
  // reducers
  // reducersに定義したものが、actionCreatorとなり、これをdispatchすれば定義した更新関数が呼ばれる
  reducers: {
    clearCart: (state) => {
      console.log(state, 'state')
      // stateには現在の状態が入る。初回なのであればinitialStateが入るし、それ以降は更新された状態を保持している
      // state.cartItems = []
      // これもまたstateを分割代入しているため、state.cartItemsやstate.amountと書く必要が無い
      return { cartItems: [], amount: 0, total: 0}
    },
    removeItem: (state, action) => {
      console.log(action)
      const itemId = action.payload
      // state.cartItems = state.cartItems.filter((item) => {
      //   return item.id !== itemId
      // })
      // 簡略的な書き方
      state.cartItems = state.cartItems.filter(item => item.id !== itemId)
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find((item) => item.id === action.payload)
      cartItem.amount = cartItem.amount + 1
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find((item) => item.id === action.payload)
      if(cartItem.amount > 0){
        cartItem.amount = cartItem.amount - 1
      }
    },
    calculateTotals: (state) => {
      let newAmount = 0
      let newTotal = 0
      state.cartItems.forEach((item) => {
        newAmount += item.amount
        newTotal += item.price * item.amount
      })
      state.amount = newAmount
      state.total = newTotal
    }
  }
})

console.log(cartSlice, 'cartslice')

// cartSliceのactions(actionCreator)をexport
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions
export default cartSlice.reducer;