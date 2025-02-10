import ComparisonProps from "./ComparisonProps";

export default function Result({ element, secret }: ComparisonProps) {
  const numberResult = element.number < secret.number
    ? "too early, guess later in the table"
    : element.number > secret.number
      ? "too far, guess earlier in the table"
      : "THAT'S IT!";
      
  return (
    <li>{numberResult}</li>
  );
}
