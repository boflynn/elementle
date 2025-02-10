import ComparisonProps from "./ComparisonProps";

export default function SymbolComparison({ guess, secret }: ComparisonProps) {
  return (
    <div className={`comparison ${guess.symbol < secret.symbol ? "low" : "high"}`}>
      <p>
        {guess.symbol > secret.symbol ? "←" : ""}
        &nbsp;{guess.symbol}&nbsp;
        {guess.symbol < secret.symbol ? "→" : ""}
      </p>
    </div>
  );
}
