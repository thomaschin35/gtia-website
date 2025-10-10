import React from "react";

const EboardCard = ({
  position,
  name,
  country,
  dateOfIssue,
  dateOfExpiration,
  serialNumber,
  imageUrl = "/assets/images/avatar.png", // Default avatar image
  layoutClass = "", // Layout positioning class
}) => {
  return (
    <div className={`eboard-card ${layoutClass}`}>
      <div className="card-content">
        <div className="card-main">
          <div className="position-title">{position}</div>
          <div className="member-info">
            <div className="member-image">
              <img src={imageUrl} alt={name} />
            </div>
            <div className="member-details">
              <div className="detail-group">
                <div className="detail-label">Name</div>
                <div className="detail-value name">{name}</div>
              </div>
              <div className="detail-group">
                <div className="detail-label">Country</div>
                <div className="detail-value">{country}</div>
              </div>
              <div className="detail-group">
                <div className="detail-label">Date of Issue</div>
                <div className="detail-value">{dateOfIssue}</div>
              </div>
              <div className="detail-group">
                <div className="detail-label">Date of Expiration</div>
                <div className="detail-value">{dateOfExpiration}</div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-100 "> */}
            {/* asdfasfd asdfas */}
          <div className="serial-number">{serialNumber}</div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default EboardCard;
