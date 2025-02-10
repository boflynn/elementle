import ComparisonProps from "./ComparisonProps";

export default function NameComparison({ guess, secret }: ComparisonProps) {
  return (
    <div className={`comparison ${guess.name < secret.name ? "low" : "high"}`}>
      <p>
        {guess.name > secret.name ? "←" : ""}
        &nbsp;{guess.name}&nbsp;
        {guess.name < secret.name ? "→" : ""}
      </p>
    </div>
  );
}
