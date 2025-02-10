import ComparisonProps from "./ComparisonProps";

export default function Result({ element, secret }: ComparisonProps) {
  const isMatch = element.category.toLowerCase() == secret.category.toLowerCase();
  const categoryResult = isMatch
    ? `YES IT IS A ${element.category}`
    : `NO IT IS NOT A ${element.category}`;
      
  return (
    <li style={isMatch ? { fontWeight: "bold"} : {}}>{categoryResult}</li>
  );
}
