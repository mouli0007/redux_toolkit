import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import {
  clear_cart,
  recreate_cart,
  calculate_total,
} from "../features/cartSlice";
import { open_modal } from "../features/modalSlice";
// import cartItems from "../cartItems";

const CartContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculate_total());
  });

  const clear_Cart_ = () => {};
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  if (amount === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is Currently Empty !</h4>
          <button
            className="btn clear-btn move_"
            onClick={() => dispatch(recreate_cart())}
          >
            recreate_cart
          </button>
        </header>
      </section>
    );
  }
  return (
    <>
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <div>
            {cartItems.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div className="cart-total">
              <h4>
                Total <span>${total}</span>
              </h4>
            </div>

            {cartItems.length > 0 && (
              <button
                className="btn clear-btn"
                onClick={() => dispatch(open_modal())}
              >
                Clear_cart
              </button>
            )}

            {cartItems.length === 0 && (
              <button
                className="btn clear-btn"
                onClick={() => dispatch(recreate_cart())}
              >
                recreate_cart
              </button>
            )}
          </footer>
        </header>
      </section>
    </>
  );
};

export default CartContainer;
