import './App.css';
import CartContainer from './components/CartContainer';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navnbar from './components/Navnbar';
import { calculateTotals } from './features/cart/CartSlice';

function App() {
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  },[cartItems, dispatch])

  return (
    <main>
      <Navnbar />
      <CartContainer />
    </main>
  );
}

export default App;
