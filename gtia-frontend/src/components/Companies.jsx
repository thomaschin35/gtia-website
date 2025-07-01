import React from "react";

const companies = [
  { name: "Amazon", logo: "/assets/images/amazon.png" },
  { name: "Stanford University", logo: "/assets/images/stanford.png" },
  { name: "Google", logo: "/assets/images/google.png" },
  { name: "J&J", logo: "/assets/images/jnj.png" },
  { name: "Carnegie Mellon University", logo: "/assets/images/cmu.png" },
  { name: "Carnegie Mellon University", logo: "/assets/images/cmu.png" },
  { name: "Carnegie Mellon University", logo: "/assets/images/cmu.png" },
  { name: "Carnegie Mellon University", logo: "/assets/images/cmu.png" },
  { name: "Carnegie Mellon University", logo: "/assets/images/cmu.png" },
  
];

const Companies = () => {
  return (
    <section className="companies-section py-5">
      <div className="container text-center">
        <h2 className="section-title mb-5">Our Alumni Are Currently At...</h2>
        <div className="companies-logos d-flex flex-wrap align-items-center gap-5">
          {companies.map((company, idx) => (
            <div className="company-logo-wrapper" key={idx}>
              <img
                src={company.logo}
                alt={company.name}
                className="company-logo"
                height={64}
                style={{ maxWidth: "180px", width: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
