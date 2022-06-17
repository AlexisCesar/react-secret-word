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

  const [chosenWord, setChosenWord] = useState("");
  const [chosenTopic, setChosenTopic] = useState("");
  const [letters, setLetters] = useState("");

  const pickRandomCategoryAndWord = () => {
    let categories = Object.keys(words);

    let category = categories[Math.floor(Math.random() * categories.length)];

    let word = words[category][Math.floor(Math.random() * words[category].length)];

    return {
      category, 
      word
    };
  };

  const startGame = () => {
    const { category, word } = pickRandomCategoryAndWord();

    console.log(category + '-' + word);

    let wordLetters = word.toUpperCase().split("");

    console.log(wordLetters);

    setChosenTopic(category);
    setChosenWord(word);
    setLetters(wordLetters);

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
