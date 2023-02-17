import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  add_food_to_customer,
  remove_reservation_menu,
} from "../Features/customerSlice";
const Customer_Card = ({ id, name, food }) => {
  const dispatch = useDispatch();

  const [cus_food, setcus_Food] = useState("");
  return (
    <>
      <div className="customer-food-card-container">
        <p>{name}</p>
        <div className="customer-foods-container">
          <div className="customer-food">
            {food.map((fo, index) => {
              return (
                <>
                  <p key={index}>{fo}</p>
                </>
              );
            })}
          </div>
          <div className="customer-food-input-container">
            <input
              value={cus_food}
              placeholder="food..."
              onChange={(e) => setcus_Food(e.target.value)}
            />

            <button
              onClick={() => {
                if (!cus_food) return;
                dispatch(
                  add_food_to_customer({
                    id,
                    food: cus_food,
                  })
                );
                setcus_Food("");
              }}
            >
              Add
            </button>

            <button onClick={() => dispatch(remove_reservation_menu(id))}>
              Remove Reservation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer_Card;
