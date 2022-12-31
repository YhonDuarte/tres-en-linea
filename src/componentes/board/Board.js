import Square from "../Square/Square";
import "./board.css";
const Board = ({ squares, onClick, turn, winningSquares }) => {
  const createSquares = (values) =>
    values.map((value) => {

     return  (<Square
     winner={winningSquares.includes(value)}
       onClick={() => {onClick(value);}}
        value={squares[value]}
        key={value}
      turn={turn} />)     
    });
  
  return (
    <div className="board">
      <div className="row">{createSquares([0, 1, 2])}</div>
      <div className="row">{createSquares([3, 4, 5])}</div>
      <div className="row">{createSquares([6, 7, 8])}</div>
    </div>
  );
};

export default Board;
