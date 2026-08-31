import React from "react";
import EboardCard from "./EboardCard";

const Eboard = () => {
  // Actual executive board data from the image
  const eboardMembers = [
    {
      position: "EXECUTIVE VICE PRESIDENT",
      name: "THOMAS CHIN",
      country: "MALAYSIA",
      dateOfIssue: "AUG 2022",
      dateOfExpiration: "DEC 2026",
      serialNumber: "012345678",
      imageUrl: "/assets/images/avatar.png",
      layoutClass: "card-top-left"
    },
    {
      position: "VICE PRESIDENT - EXTERNAL AFFAIRS",
      name: "VICTORY LADIPO",
      country: "NIGERIA",
      dateOfIssue: "AUG 2022",
      dateOfExpiration: "MAY 2027",
      serialNumber: "012345679",
      imageUrl: "/assets/images/avatar.png",
      layoutClass: "card-top-center"
    },
    {
      position: "VICE PRESIDENT - INTERNAL",
      name: "CASSIDY DAILLY",
      country: "UNITED STATES",
      dateOfIssue: "XXXX",
      dateOfExpiration: "XXXX",
      serialNumber: "012345680",
      imageUrl: "/assets/images/avatar.png",
      layoutClass: "card-top-right"
    },
    {
      position: "PRESIDENT",
      name: "MARIE WIBISANA",
      country: "INDONESIA",
      dateOfIssue: "AUG 2023",
      dateOfExpiration: "MAY 2027",
      serialNumber: "012345681",
      imageUrl: "/assets/images/avatar.png",
      layoutClass: "card-middle-left"
    },
    {
      position: "VICE PRESIDENT - FINANCE",
      name: "CONNOR CORRIGAN",
      country: "JAPAN",
      dateOfIssue: "XXXX",
      dateOfExpiration: "XXXX",
      serialNumber: "012345682",
      imageUrl: "/assets/images/avatar.png",
      layoutClass: "card-middle-center"
    },
    {
      position: "VICE PRESIDENT - OUTREACH",
      name: "HAELIN LEE",
      country: "SOUTH KOREA",
      dateOfIssue: "XXXX",
      dateOfExpiration: "XXXX",
      serialNumber: "012345683",
      imageUrl: "/assets/images/avatar.png",
      layoutClass: "card-middle-right"
    },
    {
      position: "VICE PRESIDENT - MARKETING",
      name: "YERIN KIM",
      country: "SOUTH KOREA",
      dateOfIssue: "XXXX",
      dateOfExpiration: "XXXX",
      serialNumber: "012345684",
      imageUrl: "/assets/images/avatar.png",
      layoutClass: "card-bottom-center"
    }
  ];

  return (
    <section className="eboard-section">
      <div className="eboard-container">
        <div className="eboard-header">
        <img 
            src="/assets/images/about/plane_trail.svg" 
            alt="Plane Trail" 
            className="plane-trail"
          />
          <h2 className="eboard-title">Our Executive Board</h2>
          
        </div>
        <div className="eboard-cards-scattered">
          {eboardMembers.map((member, index) => (
            <EboardCard
              key={index}
              position={member.position}
              name={member.name}
              country={member.country}
              dateOfIssue={member.dateOfIssue}
              dateOfExpiration={member.dateOfExpiration}
              serialNumber={member.serialNumber}
              imageUrl={member.imageUrl}
              layoutClass={member.layoutClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eboard;
