import ComparisonProps from "./ComparisonProps";

export default function NameComparison({ guess, secret }: ComparisonProps) {
  const additionalClass = guess.name < secret.name
    ? "low"
    :  guess.name > secret.name
      ? "high"
      : "right";

  return (
    <div className={`comparison ${additionalClass}`}>
      <p>
        {guess.name > secret.name ? "←" : ""}
        &nbsp;{guess.name}&nbsp;
        {guess.name < secret.name ? "→" : ""}
      </p>
    </div>
  );
}
