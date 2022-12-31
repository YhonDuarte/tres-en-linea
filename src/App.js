import { useState } from "react";
import Board from "./componentes/board/Board";
import "./App.css"
import ScoreBoard from "./componentes/ScoreBoard/ScoreBoard";
import Reset from "./componentes/reset/Reset";

const winningPositions= [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]  
];
const App=() =>{
 
  const [turn, setTurno] = useState('x')
  const [winningSquares, setWinningSquares] = useState([])
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [score, setScort] = useState({
    x: 0,
    o: 0,
  })

  const checkForWinner = newSquares => {
     for(let i = 0; i < winningPositions.length; i++){
      const [a,b,c] = winningPositions[i];
      if(newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]){
      // hay un ganador
      endGame(newSquares[a], winningPositions[i])
      return  
      }
    }

    if(!newSquares.includes(null)){
      // empate
      endGame(null, Array.from(Array(10).keys()))
        return
    }
         setTurno( turn === 'x' ? 'o' : 'x')
       
  }

  const handleClick = square => {
      let newSquare = [...squares ];
      newSquare.splice(square, 1, turn);
      setSquares(newSquare)
      checkForWinner(newSquare)
    
  }


  const endGame = (result, winningPositions) => {
       
      if(result !== null){
        setTurno(null)
        setScort({
          ...score,
          [result]: score[result] + 1,
        })
      }
  setWinningSquares(winningPositions)
   setTimeout(reset,2000)
  }
  const reset = () => {
        setTurno('x')
        setSquares(Array(9).fill(null))
        setWinningSquares([])
      }
  return (
    <div className="container">
      {!squares.includes(null) & turn !== null ? <div className="titulo empate">EMPATE</div> : turn === null ? <div className="titulo genial">¡GENIAL!</div> : <div className="titulo">TRES EN LINEA</div> 
       }
        {  }
      <Board 
      winningSquares={winningSquares}
      squares={squares}
      onClick={handleClick}
      turn={turn}
      />
      <ScoreBoard o={score.o} x={score.x}/>
      <Reset setSquares={setSquares} setTurno={setTurno} setScort={setScort}/>
    </div>

  );
}

export default App;