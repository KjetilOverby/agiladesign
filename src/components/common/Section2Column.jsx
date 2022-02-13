import React from "react";

const Section2Column = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 4rem;
            grid-template-areas: "left right";
          }
        `}
      </style>
    </>
  );
};

export default Section2Column;
