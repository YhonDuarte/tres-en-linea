import './square.css'
import classnames from 'classnames'
const Square = ({value, onClick, turn, winner})=> {
    const handleClick= ()=> {
      (turn !== null && value === null) && onClick();
    }
    let squareClass= classnames({
        square: true,
        [`square--${value}`]: value !== null,
        winner: winner,
    })
    return (
        <div className={squareClass} onClick={() => handleClick()}/>
    )
}

export default Square