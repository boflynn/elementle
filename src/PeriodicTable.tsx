import Element from "./Element";
import PeriodicTableRow from "./PeriodicTableRow";

interface PeriodicTableProps {
    elements: Element[];
    guesses: string[];
    secret: Element;
}

export default function PeriodicTable({ elements, guesses, secret }: PeriodicTableProps) {
  const distinctRows = [...new Set(elements.sort((a, b) => a.ypos - b.ypos).map(e => e.ypos))];
  const results = distinctRows.map((row) => {
    return <PeriodicTableRow
      elements={elements}
      rowNumber={row}
      guesses={guesses}
      secret={secret}
      key={`periodic-table-row-${row}`} />
  });

  return (
    <div id="periodic-table">
      {results}
    </div>
  )
}