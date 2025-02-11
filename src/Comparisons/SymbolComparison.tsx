import ComparisonProps from "./ComparisonProps";

export default function SymbolComparison({ guess, secret }: ComparisonProps) {
  const additionalClass = guess.symbol < secret.symbol
    ? "low"
    :  guess.symbol > secret.symbol
      ? "high"
      : "right";

  return (
    <div className={`comparison ${additionalClass}`}>
      <p>
        {guess.symbol > secret.symbol ? "←" : ""}
        &nbsp;{guess.symbol}&nbsp;
        {guess.symbol < secret.symbol ? "→" : ""}
      </p>
    </div>
  );
}
