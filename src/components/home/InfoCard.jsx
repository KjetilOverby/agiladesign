import React from "react";

const InfoCard = ({ icon, header, text }) => {
  return (
    <>
      <div className="container">
        <div className="icon-container">{icon}</div>
        <div className="text-container">
          <h1 className="info-header">{header}</h1>
          <p className="text">{text}</p>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .icon-container {
          background-color: #14c2a5;
          width: 8rem;
          height: 8rem;
          display: grid;
          place-items: center;
          border-radius: 50%;
          margin-bottom: 1rem;
        }
        .info-header {
          font-size: 1.3rem;
          font-weight: 400;
          color: var(--main-text-color);
        }
        .text {
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--main-text-color);
        }
        .text-container {
          display: grid;
          place-items: center;
          text-align: center;
        }
        @media screen and (max-width: 2100px) {
          .icon-container {
            background-color: #14c2a5;
            width: 6rem;
            height: 6rem;
            display: grid;
            place-items: center;
            border-radius: 50%;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default InfoCard;
