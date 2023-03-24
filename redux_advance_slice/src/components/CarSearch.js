import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store/slices/carsSlice";
function CarSearch() {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((store) => store.cars);

  // const updated_data = data.filter((car) =>
  //   car.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const handleSearchTerm = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };
  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search feild is-horizontal">
        <label className="label">Search</label>
        <input
          type="text"
          className="input"
          value={searchTerm}
          onChange={handleSearchTerm}
        />
      </div>
    </div>
  );
}

export default CarSearch;
