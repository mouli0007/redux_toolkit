import React from "react";
import { clear_cart } from "../features/cartSlice";
import { close_modal } from "../features/modalSlice";
import { useDispatch } from "react-redux";
const Modal = () => {
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(clear_cart());
    dispatch(close_modal());
  };
  return (
    <>
      <aside className="modal-container">
        <div className="modal">
          <h4>Remove All Items</h4>
          <div className="btn-container">
            <button
              type="button"
              className="btn confirm-btn"
              onClick={clearCart }
            >
              Confirm
            </button>
            <button
              type="button"
              className="btn clear-btn"
              onClick={() => dispatch(close_modal())}
            >
              cancel
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Modal;
