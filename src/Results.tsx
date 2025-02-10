import Result from "./Result";
import Element from "./Element";

interface ResultsProps {
  elements: Element[];
  guesses: string[];
  secret: Element;
}

// TODO - logging says that the full results are re-rendered each time, can we do better?
// TODO - Handle making the same guess twice

export default function Results({ elements, guesses, secret }: ResultsProps) {
  const guessComponents = guesses.map(guess => {
    const element = elements.find(e => e.name.toLowerCase() === guess.toLowerCase());

    if(element === undefined) {
      return;
    }
    
    return (
      <Result
        key={element!.name}
        guess={element!}
        secret={secret} />
    );
  });

  return guessComponents;
}
