import React from 'react';

const DecorativePath = ({ className = "" }) => {
  return (
    <div className={`decorative-path ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1201" height="375" viewBox="0 0 1201 375" fill="none">
        <path 
          d="M0 5.74892C74.2404 -8.30184 229.712 17.4832 257.677 233.03C285.642 448.576 494.714 367.271 595.754 299.676C727.256 188.219 1031.81 27.1669 1198 274.612" 
          stroke="#B3A369" 
          strokeOpacity="0.34" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeDasharray="30 30"
        />
      </svg>
    </div>
  );
};

export default DecorativePath;