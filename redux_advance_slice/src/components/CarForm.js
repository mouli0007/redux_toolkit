import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost } from "../store/slices/formslice";
import { addCar } from "../store/slices/carsSlice";
function CarForm() {
  // For Dispatching an action
  const disptach = useDispatch();

  // For Getting the state
  const { name, cost } = useSelector((store) => store.form);

  const handleNameChange = (e) => {
    disptach(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    const cost_num = +e.target.value;
    disptach(changeCost(cost_num));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !cost) return;
    disptach(addCar({ name, cost }));
    // disptach(changeName(""));
    // disptach(changeCost(0));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              type="text"
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
        </div>

        <div className="field-group">
          <div className="field">
            <label className="label">Cost</label>
            <input
              type="number"
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="feild">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
