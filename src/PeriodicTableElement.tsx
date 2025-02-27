import Element from "./Element";

interface PeriodicTableElementProps {
  element: Element;
  elements: Element[];
  guesses: string[];
  secret: Element;
}

export default function PeriodicTableElement({ elements, element, guesses, secret }: PeriodicTableElementProps) {
  let stillValid = true;

  for (const guess of guesses) {
    const guessElement = elements.find(e => e.name.toLowerCase() === guess.toLowerCase())!;
    if(guessElement.name < secret.name && element.name <= guessElement.name) { stillValid = false; break;}
    if(guessElement.name > secret.name && element.name >= guessElement.name) { stillValid = false; break;}
    if(guessElement.number < secret.number && element.number <= guessElement.number) { stillValid = false; break;}
    if(guessElement.number > secret.number && element.number >= guessElement.number) { stillValid = false; break;}

    if(guessElement.phase !== secret.phase && element.phase === guessElement.phase) { stillValid = false; break;}
    if(guessElement.phase === secret.phase && element.phase !== guessElement.phase) { stillValid = false; break;}
    if(guessElement.category !== secret.category && element.category === guessElement.category) { stillValid = false; break;}
    if(guessElement.category === secret.category && element.category !== guessElement.category) { stillValid = false; break;}
  }

  const stillValidClass = stillValid ? "" : "invalid";

  return (
    <div
      className={`element ${stillValidClass}`}
      style={{ gridColumn: element.xpos, gridRow: element.ypos }}>
      <span className="number">{element.number}</span><br />
      <span className="symbol">{element.symbol}</span><br />
      <span className="name">{element.name}</span>
    </div>
  )
}