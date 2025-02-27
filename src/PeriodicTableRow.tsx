import Element from "./Element";
import PeriodicTableElement from "./PeriodicTableElement";

interface PeriodicTableRowProps {
  elements: Element[];
  rowNumber: number;
  guesses: string[];
  secret: Element;
}

export default function PeriodicTableRow({ elements, rowNumber, guesses, secret }: PeriodicTableRowProps) {
  const columns = elements.filter(e => e.ypos === rowNumber)!.sort((a, b) => a.xpos - b.xpos)
    .map((ee) => {
      return <PeriodicTableElement
        elements={elements}
        guesses={guesses}
        secret={secret}
        element={ee}
        key={`periodic-table-element-${ee.number}`} />
    }
    );

  return (
    <>
      {columns}
    </>
  );
}