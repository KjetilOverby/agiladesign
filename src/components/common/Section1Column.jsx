import React from "react";

const Section1Column = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>
        {`
          .container {
            text-align: center;
            margin: 0 15rem;
            display: grid;
            place-items: center;
          }
          @media screen and (max-width: 2100px) {
            .container {
              margin: 0 8rem;
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

export default Section1Column;
