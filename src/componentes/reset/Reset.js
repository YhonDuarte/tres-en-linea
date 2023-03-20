import './reset.css'
      const Reset = ({setSquares, setTurno, setScort}) => {

       const handleClick= () => {
            setSquares(Array(9).fill(null))
            setTurno('x')
        }
        const handlePoint= () => {
            setSquares(Array(9).fill(null))
            setTurno('x')
            setScort({
                x:0,
                o:0,
            })
        }
    return(
        <div className="reset">
              <button onClick={handleClick}>
            Nueva partida
        </button>
        <button onClick={handlePoint}>
            Resetear puntaje
        </button>

        </div>
      
    )
}

export default Reset