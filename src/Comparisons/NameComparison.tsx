import ComparisonProps from "./ComparisonProps";

export default function Result({ element, secret }: ComparisonProps) {
  const comparison = element.name.toLowerCase().localeCompare(secret.name.toLowerCase());
  const nameResult = comparison < 0
    ? "too early, guess later in the alphabet"
    : comparison > 0
      ? "too far, guess earlier in the alphabet"
      : "THAT'S IT!";
      
  return (
    <li>{nameResult}</li>
  );
}
