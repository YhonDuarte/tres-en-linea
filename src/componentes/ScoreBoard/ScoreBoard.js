import './ScoreBoard.css'


const ScoreBoard = ({o , x, turn}) => {
 
return(
    <div className='containerBoar'>
    <h1>Puntuacion:</h1>
    <div className="score-board">
        
            <div>{x}</div> 


          <div className={`square--${ turn === "x" ? 'xturn' : 'oturn' }` } ></div>


            <div className='circulo'>{o}</div> 
                </div>
    </div>
)
}

export default ScoreBoard