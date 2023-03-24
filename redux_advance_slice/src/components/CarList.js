import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store/slices/carsSlice";
function CarList() {
  const dispatch = useDispatch();

  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const handleCarDelete = (id) => {
    //
    dispatch(removeCar(id));
    console.log(id);
  };

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    const { id, cost } = car;
    return (
      <div key={id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${cost}
        </p>

        <button
          className="button is-danger"
          onClick={() => handleCarDelete(id)}
        >
          Delete
        </button>
      </div>
    );
  });

  return <div className="car-list">{renderedCars}</div>;
}

export default CarList;
