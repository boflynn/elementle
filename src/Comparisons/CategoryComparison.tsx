import ComparisonProps from "./ComparisonProps";

export default function CategoryComparison({ guess, secret }: ComparisonProps) {
  const isMatch = guess.category.toLowerCase() == secret.category.toLowerCase();
      
  return (
    <div className={isMatch ? "comparison right" : "comparison wrong"}><p>{guess.category}</p></div>
  );
}
