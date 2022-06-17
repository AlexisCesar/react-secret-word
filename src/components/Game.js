import './Game.css';

const Game = ({ checkLetter }) => {
  return (
    <>
      <h2>Game</h2>
      <button className="defaultAppButton" onClick={checkLetter}>Game Over Test Button</button>
    </>
  )
}

export default Game