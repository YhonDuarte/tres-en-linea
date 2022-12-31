import './ScoreBoard.css'

const ScoreBoard = ({o , x}) => {
return(

    <div className="score-board">
            <div>{x}</div> 
            <div>{o}</div> 
                </div>
)
}

export default ScoreBoard