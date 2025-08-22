import "./featureCard.css";

interface featuresProps {
  title: string;
  description: string;
}

const FeaturedCard = ({ title, description }: featuresProps) => {
  return (
    <div className="featured_card">
      <div className="feature_content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
