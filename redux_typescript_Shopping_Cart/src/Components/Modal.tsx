import { useDispatch } from "react-redux";
import { AppDispatch } from "../Store/Store";
import { closeModal } from "../Slices/ModalSlice";
import { clearCart } from "../Slices/cartSlice";
const Modal = () => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4> Remove all items from your shopping cart</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
