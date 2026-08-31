import React from 'react';

const JoinDiscord = () => {
  return (
    <div className="join-discord-container mt-5">
      <div className="join-discord-left">
        <img
          src="/assets/images/big-discord-icon.svg"
          alt="Discord Icon"
          className="discord-icon"
        />
      </div>
      <div className="join-discord-right">
        <h1 className="join-discord-title">Join Our Discord Community</h1>
        <p className="join-discord-description">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
        <button className="join-discord-button">
          <img src="/assets/images/big-discord-icon.svg" alt="Discord" className="button-discord-icon" />
          Join Discord
        </button>
      </div>
    </div>
  );
};

export default JoinDiscord;
