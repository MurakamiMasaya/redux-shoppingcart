import './App.css';
import CartContainer from './components/CartContainer';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navnbar from './components/Navnbar';
import { calculateTotals } from './features/cart/CartSlice';
import Modal from './components/Modal'

function App() {
  const { cartItems } = useSelector((state) => state.cart)
  const { isOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  },[cartItems, dispatch])

  return (
    <main>
      {isOpen && <Modal />}
      <Navnbar />
      <CartContainer />
    </main>
  );
}

export default App;
