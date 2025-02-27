import { useState } from "react";

import './App.css'
import GuessForm from './GuessForm'
import PeriodicTable from './PeriodicTable'
import Results from './Results'
import elements from './assets/elements.json';

function App() {
  const [secretElement] = useState(() => elements[Math.floor(Math.random() * elements.length)]);
  const [guesses, setGuesses] = useState<string[]>([]);

  console.log(secretElement.name);
  function handleGuess(guess: string): void {
    const updatedGuesses = [...guesses, guess];

    setGuesses(updatedGuesses);
  }

  return (
    <>
      <h1>Elementle</h1>

      <PeriodicTable
        elements={elements}
        guesses={guesses}
        secret={secretElement} />

      <Results
        elements={elements}
        guesses={guesses}
        secret={secretElement} />

      <GuessForm
        onGuess={handleGuess}
        elements={elements} />
    </>
  )
}

export default App
