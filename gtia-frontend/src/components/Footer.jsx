import React from "react";

const Footer = () => {
  return (
    <footer className="custom-footer pt-5">
      <div className="footer-main container d-flex flex-wrap justify-content-between align-items-start gap-5 pb-4">
        {/* Left Help Box */}
        <div className="footer-help-box">
          <h2 className="footer-help-title mb-3">
            Have a problem?
            <br />
            We're here to help.
          </h2>
          <a href="mailto:gtia@gatech.edu" className="footer-help-link">
            Talk to us{" "}
            <span className="footer-help-icon">
              <i className="bi bi-envelope-fill"></i>
            </span>
          </a>
        </div>
        {/* Right Links */}
        {/* <div > */}
          <div className="footer-links d-flex flex-wrap gap-5 justify-content-md-end">
            <div className="footer-link-col">
              <div className="footer-link-title">About</div>
              <a href="#" className="footer-link">
                Our Mission
              </a>
              <a href="#" className="footer-link">
                Our Story
              </a>
              <a href="#" className="footer-link">
                Our Exec Board
              </a>
              <a href="#" className="footer-link">
                Our Committees
              </a>
            </div>
            <div className="footer-link-col">
              <div className="footer-link-title">Resources</div>
              <a href="#" className="footer-link">
                Interactive Guide
              </a>
              <a href="#" className="footer-link">
                Transition to ATL
              </a>
              <a href="#" className="footer-link">
                Academic Resources
              </a>
              <a href="#" className="footer-link">
                Career Resources
              </a>
            </div>
            <div className="footer-link-col">
              <div className="footer-link-title">Events</div>
              <a href="#" className="footer-link">
                Annual Events
              </a>
              <a href="#" className="footer-link">
                Internal Events
              </a>
              <a href="#" className="footer-link">
                Workshops
              </a>
            </div>
            <div className="footer-link-col">
              <div className="footer-link-title">Connect</div>
              <a href="#" className="footer-link">
                Join Us
              </a>
              <a href="#" className="footer-link">
                Sponsor Us
              </a>
              <div className="footer-socials d-flex gap-3 mt-3">
                <a href="#" className="footer-social">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="footer-social">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="footer-social">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
      {/* Bottom Bar */}
      <div className="footer-bottom-bar d-flex justify-content-between align-items-center px-4">
        <span className="footer-copyright">
          Copyright © International Ambassadors at Georgia Tech{" "}
          {new Date().getFullYear()}
        </span>
        <img
          src="/assets/images/gtia-gold-logo.png"
          alt="GTIA Logo"
          className="footer-logo"
          height={48}
        />
      </div>
    </footer>
  );
};

export default Footer;
