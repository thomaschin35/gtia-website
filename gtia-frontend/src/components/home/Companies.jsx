import React from "react";

const companies = [
  { name: "Amazon", logo: "/assets/images/amazon.png" },
  { name: "Stanford University", logo: "/assets/images/stanford.png" },
  { name: "Google", logo: "/assets/images/google.png" },
  { name: "J&J", logo: "/assets/images/jnj.png" },
  { name: "Carnegie Mellon University", logo: "/assets/images/cmu.png" }
  
];

const Companies = () => {
  return (
    <section className="companies-section py-4 py-md-5">
      <div className="container text-center">
        <div className="section-title-text mb-3 mb-md-5">Our Alumni Are Currently At...</div>
        <div className="companies-logos d-flex flex-wrap align-items-center justify-content-center gap-3 gap-md-5">
          {companies.map((company, idx) => (
            <div className="company-logo-wrapper" key={idx}>
              <img
                src={company.logo}
                alt={company.name}
                className="company-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;


