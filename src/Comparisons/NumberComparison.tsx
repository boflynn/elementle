import ComparisonProps from "./ComparisonProps";

export default function NumberComparison({ guess, secret }: ComparisonProps) {
  return (
    <div className={`comparison ${guess.number < secret.number ? "low" : "high"}`}>
      <p>
        {guess.number > secret.number ? "←" : ""}
        &nbsp;{guess.number}&nbsp;
        {guess.number < secret.number ? "→" : ""}
      </p>
    </div>
  );
}
