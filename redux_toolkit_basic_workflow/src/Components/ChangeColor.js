import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { change_color, clear_color } from "../Features/theme";
const ChangeColor = () => {
  const [color, setColor] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={() => dispatch(change_color(color))} type="submit">
        Change_Color
      </button>
      <button
        onClick={() => {
          dispatch(clear_color());
          setColor("");
        }}
      >
        Clear_color
      </button>
    </div>
  );
};

export default ChangeColor;
