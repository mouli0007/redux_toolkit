import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    //
    let cost = data
      .filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .reduce((tot, acc) => tot + acc.cost, 0);
    return cost;
  });

  return <div className="car-value">Total Cost : ${totalCost}</div>;
}

export default CarValue;
