import React from "react";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import PageLayout from "../src/components/common/PageLayout";

const projects = () => {
  return (
    <PageLayout>
      <HeaderComponent />
      <FooterComponent />
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </PageLayout>
  );
};

export default projects;
