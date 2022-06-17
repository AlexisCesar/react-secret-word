import './GameOver.css';

const GameOver = ({ retry }) => {
  return (
    <>
      <h2>Game Over</h2>
      <button className="defaultAppButton" onClick={retry}>Play Again</button>
    </>
  )
}

export default GameOver