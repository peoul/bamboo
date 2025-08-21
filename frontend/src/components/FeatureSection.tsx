import "./featureSection.css";

import { features } from "../assets/feature.json";
import FeaturedCard from "./FeatureCard";

const FeatureSection = () => {
  return (
    <section className="feature" id="feature_section">
      <h2>Our Features</h2>

      <div className="feature_list">
        {features.map((item) => {
          return (
            <FeaturedCard title={item.title} description={item.description} />
          );
        })}
      </div>
    </section>
  );
};

export default FeatureSection;
