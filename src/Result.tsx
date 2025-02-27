import NameComparison from './Comparisons/NameComparison'
import NumberComparison from './Comparisons/NumberComparison'
import PhaseComparison from './Comparisons/PhaseComparison'
import CategoryComparison from './Comparisons/CategoryComparison'
import SymbolComparison from './Comparisons/SymbolComparison'
import Element from "./Element";

interface ResultsFormProps {
  guess: Element;
  secret: Element;
}

export default function Result({ guess, secret }: ResultsFormProps) { 
  return (
    <div>
      <div className="result">
        <NameComparison guess={guess} secret={secret} />
        <NumberComparison guess={guess} secret={secret} />
        <PhaseComparison guess={guess} secret={secret} />
        <CategoryComparison guess={guess} secret={secret} />
        <SymbolComparison guess={guess} secret={secret} />
      </div>
    </div>
  );
}
