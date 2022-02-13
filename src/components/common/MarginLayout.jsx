import React from "react";

const MarginLayout = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>
        {`
          .container {
            margin: 0 35rem;
          }
          @media screen and (max-width: 2100px) {
            .container {
              margin: 0 25rem;
            }
          }
          @media screen and (max-width: 1700px) {
            .container {
              margin: 0 15rem;
            }
          }
          @media screen and (max-width: 1500px) {
            .container {
              margin: 0 10rem;
            }
          }
          @media screen and (max-width: 1300px) {
            .container {
              margin: 0 7rem;
            }
          }
          @media screen and (max-width: 1000px) {
            .container {
              margin: 0 1rem;
            }
          }
          @media screen and (max-width: 756px) {
            .container {
              margin: 0 0.5rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default MarginLayout;
