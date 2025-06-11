import React from 'react';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">GTIA</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/events">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/guide">Guide</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resources">Resources</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-primary ms-2" href="/join">JOIN US</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header; 