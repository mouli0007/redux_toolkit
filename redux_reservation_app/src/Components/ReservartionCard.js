import React from "react";
import { useDispatch } from "react-redux";
import { remove_reservation } from "../Features/reservationSlice";
import { add_customer } from "../Features/customerSlice";
const ReservartionCard = ({ name, index }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="reservation-card-container"
        onClick={() => {
          dispatch(remove_reservation(index));
          dispatch(
            add_customer({
              id: Date.now().toString(),
              name,
              food: [],
            })
          );
        }}
      >
        {name}
      </div>
    </>
  );
};

export default ReservartionCard;
