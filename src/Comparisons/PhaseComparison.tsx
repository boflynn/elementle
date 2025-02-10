import ComparisonProps from "./ComparisonProps";

export default function PhaseComparison({ guess, secret }: ComparisonProps) {
  const isMatch = guess.phase.toLowerCase() == secret.phase.toLowerCase();
      
  return (
    <div className={isMatch ? "comparison right" : "comparison wrong"}><p>{guess.phase}</p></div>
  );
}
