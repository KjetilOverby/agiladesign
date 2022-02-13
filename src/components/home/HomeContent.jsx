import React from "react";
import Image from "next/image";
import logo from "../../../assets/agiladesignLogo.png";
import HomeImageHeader from "./HomeImageHeader";
import HomeSection from "./HomeSection";
import HomeSection2 from "./HomeSection2";
import CommonSection from "./CommonSection";
import domain from "../../../assets/domain.jpg";
import server from "../../../assets/server.jpg";
import responsive from "../../../assets/responsive.jpg";

const HomeContent = () => {
  return (
    <>
      <div className="container">
        <div className="first-section">
          <HomeImageHeader />
          <HomeSection />
        </div>
        <h1 className="header">Web Development</h1>
        <HomeSection2 />
        <CommonSection
          image={<Image src={domain} />}
          header="Domain"
          imgSize="60%"
          marginBottom="5rem"
        />
        <CommonSection
          image={<Image src={server} />}
          header="Hosting"
          imgSize="60%"
          marginBottom="5rem"
        />
        <CommonSection
          image={<Image src={responsive} imgSize="100%" />}
          header="Responsive Design"
          marginBottom="0"
        />
      </div>

      <style jsx>
        {`
          .container {
            grid-area: content;
            min-height: 100vh;
          }
          .header {
            text-align: center;
          }
          .first-section {
            background: rgb(247, 247, 247);
          }
        `}
      </style>
    </>
  );
};

export default HomeContent;
