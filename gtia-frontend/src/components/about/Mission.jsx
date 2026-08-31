import React from "react";

const Mission = () => {
  return (
    <section className="mission-section" id="mission">
      <div className="mission-container">
        <div className="mission-content">
          <div className="mission-header">
            <h1 className="mission-title">Our Mission</h1>
            <div className="mission-cards">
              <div className="mission-card">
                <div className="card-top">
                  <img
                    src="/assets/images/about/mission-support.svg"
                    alt="Guide"
                    className="card-icon"
                  />
                  <div className="card-text">
                    <h1 className="card-title">Support</h1>
                    <p className="card-subtitle">International Students</p>
                  </div>
                </div>
                <p className="card-description">
                  We aim to support incoming international students in
                  integrating with the Georgia Tech community, fostering their
                  early personal growth, and promoting and enhancing the
                  Institute’s diversity. <br />
                </p>
              </div>

              <div className="mission-card">
                <div className="card-top">
                  <img
                    src="/assets/images/about/mission-celebrate.svg"
                    alt="Connect"
                    className="card-icon"
                  />
                  <div className="card-text">
                    <h1 className="card-title">Celebrate</h1>
                    <p className="card-subtitle">Cultural Diversity</p>
                  </div>
                </div>
                <p className="card-description">
                  We engage the general student body in events and activities
                  that promote international culture and diversity, many of
                  which are supported by the Office of International Education.
                </p>
              </div>

              <div className="mission-card">
                <div className="card-top">
                  <img
                    src="/assets/images/about/mission-enrich.svg"
                    alt="Empower"
                    className="card-icon"
                  />
                  <div className="card-text">
                    <h1 className="card-title">Enrich</h1>
                    <p className="card-subtitle">Member Experiences</p>
                  </div>
                </div>
                <p className="card-description">
                  We aim to foster a culture that encourages our members to
                  consider how they can support and advocate for Georgia Tech’s
                  international community at large. <br />
                  We continuously promote honest and sometimes difficult
                  discussions, with the aim of broadening the perspectives of
                  our members and increasing member engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mission-bottom">
          <p className="mission-tagline">
            "Bringing <span className="quote-light-gold-letter">Georgia Tech</span> to the world and the <span className="quote-light-gold-letter">world</span> to Georgia Tech"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
