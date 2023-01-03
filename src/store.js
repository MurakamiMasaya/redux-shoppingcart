import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice"
import modalReducer from "./features/modal/ModalSlice"

// Sliceを作成したら必ずstoreに設定するように
// storeをindex.jsでProviderに設定しているのだから、これを忘れるとmodalReducerが反応しない
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer
  },
})