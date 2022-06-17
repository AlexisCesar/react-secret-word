import './Game.css';

const Game = ({ checkLetter }) => {
  return (
    <>
      <div className="game">
        
        <p className="score">
          Score: <span>999</span>
        </p>

        <h2>Guess the word!</h2>

        <h3 className="tip">
          Word tip: <span>#tipGoesHere#</span>
        </h3>

        <div className="wordContainer">
          <span className="letter">A</span>
          <span className="square"></span>
          <span className="square"></span>
          <span className="square"></span>
        </div>

        <div className="letterContainer">
          <p>Try to guess a letter:</p>
          <form>
            <input type="text" name='letter' maxLength={1} required />
            <button className="defaultAppButton" onClick={checkLetter}>Guess</button>
          </form>
        </div>

        <div className="alreadyTriedContainer">
          <p>Already tried:</p>
          <span>a - </span>
          <span>b - </span>
          <span>c</span>
        </div>

      </div>
    </>
  )
}

export default Game