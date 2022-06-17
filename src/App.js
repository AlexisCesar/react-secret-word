// CSS imports
import './App.css';

// React imports
import { useState, useCallback, useEffect } from 'react';

// Data imports
import { words } from './data/words';

// Components imports
import StartMenu from './components/StartMenu';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
];

function App() {

  const [currentStage, setCurrentStage] = useState(stages[0].name);
  const [gameWords] = useState(words);

  const startGame = () => {
    setCurrentStage(stages[1].name);
  };

  const checkLetter = () => {
    setCurrentStage(stages[2].name);
  };

  const retry = () => {
    setCurrentStage(stages[0].name);
  };

  return (
    <div className="App">
      {currentStage == stages[0].name && <StartMenu startGame={startGame} />}
      {currentStage == stages[1].name && <Game checkLetter={checkLetter} />}
      {currentStage == stages[2].name && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
