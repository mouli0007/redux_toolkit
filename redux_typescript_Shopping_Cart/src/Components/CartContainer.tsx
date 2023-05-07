import { AppDispatch, ROOTSTATE } from "../Store/Store";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../Slices/ModalSlice";
import { getCartItems } from "../Slices/cartSlice";
const CartContainer = () => {
  const dispatch: AppDispatch = useDispatch();
  const { cartItems, total, amount } = useSelector(
    (state: ROOTSTATE) => state.cart
  );

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
        <button
          className="btn loading_"
          onClick={() => dispatch(getCartItems())}
        >
          Refetch the List
        </button>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>

      <div>
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
