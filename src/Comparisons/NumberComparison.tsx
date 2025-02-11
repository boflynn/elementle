import ComparisonProps from "./ComparisonProps";

export default function NumberComparison({ guess, secret }: ComparisonProps) {
  const additionalClass = guess.number < secret.number
    ? "low"
    :  guess.number > secret.number
      ? "high"
      : "right";

  return (
    <div className={`comparison ${additionalClass}`}>
      <p>
        {guess.number > secret.number ? "←" : ""}
        &nbsp;{guess.number}&nbsp;
        {guess.number < secret.number ? "→" : ""}
      </p>
    </div>
  );
}
