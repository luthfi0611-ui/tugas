
export default function FeatureList() {
  const features = ["Fast", "Declarative", "Powerful", "Fun"];

  return (
    <ul>
      {features.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
  );
}
