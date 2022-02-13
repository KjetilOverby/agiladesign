import React from "react";
import MarginLayout from "../common/MarginLayout";
import Section1Column from "../common/Section1Column";

const CommonSection = ({ image, header, imgSize, marginBottom }) => {
  return (
    <>
      <MarginLayout>
        <div className="container">
          <h1 className="header">{header}</h1>
          <Section1Column>
            <p className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
              asperiores voluptatibus beatae quasi sequi autem inventore ratione
              facilis dicta voluptatum veniam numquam maiores eius explicabo,
              exercitationem labore. Dolore, quae ullam. Facilis necessitatibus,
              ullam eius incidunt ut vitae ab non in voluptatem tempora
              voluptatum, eligendi architecto sint perferendis mollitia
              possimus? Accusantium sunt, repellendus eum vel veniam
              exercitationem quas distinctio quasi praesentium. Minus,
              consectetur voluptas? Quas veniam debitis tempora maxime quasi
              mollitia sint. Quasi adipisci, id nulla tenetur sunt earum aperiam
              illo voluptatibus ullam amet deleniti, consequuntur rerum suscipit
              odit, tempora deserunt!
            </p>
            <div className="image-container">{image}</div>
          </Section1Column>
        </div>
      </MarginLayout>
      <style jsx>
        {`
          .container {
            display: grid;
            place-items: center;
            margin-bottom: ${marginBottom};
          }
          .header {
            color: var(--main-text-color);
            font-weight: 300;
            margin-bottom: 3rem;
          }
          .image-container {
            display: grid;
            place-items: center;
            width: ${imgSize};
            margin-top: -2rem;
          }
        `}
      </style>
    </>
  );
};

export default CommonSection;
