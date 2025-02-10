import { useState } from "react";

import './App.css'
import GuessForm from './GuessForm'
import Results from './Results'
import elements from './assets/elements.json';

function App() {
  const [secretElement] = useState(() => elements[Math.floor(Math.random() * elements.length)]);
  const [guesses, setGuesses] = useState<string[]>([]);

  function handleGuess(guess: string): void {
    const updatedGuesses = [...guesses, guess];

    setGuesses(updatedGuesses);
  }

  return (
    <>
      <h1>Elementle</h1>
      
      <Results
        elements={elements}
        guesses={guesses}
        secret={secretElement} />
      
      <GuessForm
        onGuess={handleGuess}  />
    </>
  )
}

export default App
