import "./App.css";
import Navbar from "./Components/Navbar";
import CartContainer from "./Components/CartContainer";
import { calculateTotals, getCartItems } from "./Slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, ROOTSTATE } from "./Store/Store";
import { useEffect } from "react";
import Modal from "./Components/Modal";

const App = () => {
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  const { cartItems, isLoading } = useSelector(
    (state: ROOTSTATE) => state.cart
  );
  const { isOpen } = useSelector((state: ROOTSTATE) => state.modal);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  if (isLoading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;
