import ComparisonProps from "./ComparisonProps";

export default function Result({ element, secret }: ComparisonProps) {
  const isMatch = element.phase.toLowerCase() == secret.phase.toLowerCase();
  const phaseResult = isMatch
    ? `YES IT IS A ${element.phase}`
    : `NO IT IS NOT A ${element.phase}`;
      
  return (
    <li style={isMatch ? { fontWeight: "bold"} : {}}>{phaseResult}</li>
  );
}
