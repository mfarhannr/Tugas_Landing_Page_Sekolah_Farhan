import React from "react";

function Features() {
  return (
    <section className="py-5" id="features">
      <div className="container">
      
      </div>
    </section>
  );
}

// FeatureCard component
function FeatureCard({ imageUrl, title }) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card feature-card shadow rounded-lg">
        <img src={imageUrl} alt={title} className="card-img-top" />
        <div className="card-body text-center py-3">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
}

export default Features;
