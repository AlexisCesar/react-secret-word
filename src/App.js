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

const TOTAL_GUESSES = 3;
const SCORE_PRIZE = 100;

function App() {

  const [currentStage, setCurrentStage] = useState(stages[0].name);
  const [gameWords] = useState(words);

  const [chosenWord, setChosenWord] = useState("");
  const [chosenTopic, setChosenTopic] = useState("");
  const [letters, setLetters] = useState("");

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [remainingGuesses, setRemainingGuesses] = useState(TOTAL_GUESSES);
  const [score, setScore] = useState(0);

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

    let wordLetters = word.toUpperCase().split("");

    setChosenTopic(category);
    setChosenWord(word);
    setLetters(wordLetters);

    setCurrentStage(stages[1].name);
  };

  const checkLetter = (letter) => {
    
    if(guessedLetters.includes(letter) | wrongLetters.includes(letter)) {
      return;
    }

    setGuessedLetters((actualGuessedLetters) => [
      ...actualGuessedLetters, letter
    ])

    if(letters.includes(letter)) {
      setScore(score + SCORE_PRIZE);
    } else {
      setRemainingGuesses(remainingGuesses - 1);

      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        letter
      ]);
    }

  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if(remainingGuesses <= 0) {
      clearLetterStates();

      setCurrentStage(stages[2].name);
    }
  }, [remainingGuesses]);

  const retry = () => {
    setScore(0);
    setRemainingGuesses(TOTAL_GUESSES);

    setCurrentStage(stages[0].name);
  };

  return (
    <div className="App">
      {currentStage == stages[0].name && <StartMenu startGame={startGame} />}
      {currentStage == stages[1].name && <Game checkLetter={checkLetter} gameSettings={
        {
          chosenTopic: chosenTopic, 
          chosenWord: chosenWord,
          letters: letters,
          guessedLetters: guessedLetters,
          wrongLetters: wrongLetters,
          remainingGuesses: remainingGuesses,
          score: score
        }
      } />}
      {currentStage == stages[2].name && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
