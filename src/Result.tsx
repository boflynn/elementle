import NameComparison from './Comparisons/NameComparison'
import NumberComparison from './Comparisons/NumberComparison'
import PhaseComparison from './Comparisons/PhaseComparison'
import CategoryComparison from './Comparisons/CategoryComparison'
import Element from "./Element";

interface ResultsFormProps {
    element: Element;
    secret: Element;
}

export default function Result({ element, secret }: ResultsFormProps) {
  // TODO - Could this do a dependency injection thing to add all comparisons?

  return (
    <div>
      <p>{element.name}</p>
      <ul>
        <NameComparison element={element} secret={secret} />
        <NumberComparison element={element} secret={secret} />
        <PhaseComparison element={element} secret={secret} />
        <CategoryComparison element={element} secret={secret} />
      </ul>
    </div>
  );
}
