import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import CartContainer from "./Components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems } from "./features/cartSlice";
import Modal from "./Components/Modal";
function App() {
  const isModal = useSelector((state) => state.modal.isOpen);
  const { isLoading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <>
      <main>
        {isModal && <Modal />}
        <Navbar />
        <CartContainer />
      </main>
    </>
  );
}
export default App;
