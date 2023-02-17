import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReservartionCard from "./Components/ReservartionCard";
import { add_reservation } from "./Features/reservationSlice";
import Customer_Card from "./Components/Customer_Card";

function App() {
  const [reservation_name, setreservation_name] = useState("");
  const reservations = useSelector((state) => state.reservtion.value);
  const customers = useSelector((state) => state.customers.value);

  console.log(customers);
  const dispatch = useDispatch();

  const handle_add_reservation = () => {
    if (!reservation_name) return;

    dispatch(add_reservation(reservation_name));
    setreservation_name("");
  };
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name_, index) => {
                return (
                  <>
                    <ReservartionCard name={name_} index={index} />
                  </>
                );
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              type="text"
              placeholder="name..."
              className="input_2"
              value={reservation_name}
              onChange={(e) => setreservation_name(e.target.value)}
            />
            <button onClick={handle_add_reservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => {
            return <Customer_Card {...customer} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
