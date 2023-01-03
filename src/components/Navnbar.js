import React from 'react'
import { useSelector } from 'react-redux'
import { CartIcon } from "../Heroicons"


const Navnbar = () => {
  // オブジェクトから分割代入で値を取得する方法が一般的
  // useSelector((store) => store.名前)
  // storeは固定かな、index.jsのProviderに設定したプロパティ名になる
  const { amount } = useSelector((store) => store.cart)
  console.log(amount)

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Shopping</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{ amount }</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navnbar