import "../App.css";

interface PROPS {
  val: string;
  chooseSquare: (str: any) => void;
}

const Square = ({ val, chooseSquare }: PROPS) => {
  return (
    <div className="square" onClick={chooseSquare}>
      {val}
    </div>
  );
};

export default Square;
