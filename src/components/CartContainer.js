import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'
import { openModal } from '../features/modal/ModalSlice'

const CartContainer = () => {
  // react-reduxからuseDispatch()とuseSelectorを呼び出す
  // dispatch()で引数にactionCreator関数を取り、storeに通知を出す
  const dispatch = useDispatch()
  // なぜ分割代入が良いかというと、カンマ区切りで変数を取得できるようになるから
  const { amount, cartItems, total } = useSelector((store) => store.cart)

  if(amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>買い物かご</h2>
          <h4 className='empty-cart'>何も入っていません...</h4>
        </header>
      </section>
    )
  }

  return (
    <section className='cart'>
      <header>
        <h2>買い物かご</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item}/>
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>合計 <span>{total}円</span></h4>
        </div>
        <button className='btn clear-btn' onClick={() => {
          dispatch(openModal())
        }}>全削除</button>
      </footer>
    </section>
  )
}

export default CartContainer