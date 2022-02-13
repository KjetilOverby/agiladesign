import React from "react";
import styles from "../../../styles/starpage/TextSection.module.css";
import InfoCard from "../home/InfoCard";
import { MdImportantDevices } from "react-icons/md";
import { GiEarthAmerica } from "react-icons/gi";
import { FaServer } from "react-icons/fa";

const TextSection = () => {
  return (
    <div className={styles.container}>
      <InfoCard
        icon={
          <GiEarthAmerica
            style={{ width: "60%", height: "60%", color: "#99f1e4" }}
          />
        }
        header="Domain"
        text="Use your own or purchase a new. We can help you with a new domain."
      />
      <InfoCard
        icon={
          <MdImportantDevices
            style={{ width: "50%", height: "50%", color: "#99f1e4" }}
          />
        }
        header="Responsive"
        text="Today it is very important that webpages are responsive. Our webpages are always built responsive."
      />
      <InfoCard
        icon={
          <FaServer style={{ width: "50%", height: "50%", color: "#99f1e4" }} />
        }
        header="Hosting"
        text="We host our webpages width HTTPS/SSL as default for better safety. "
      />
    </div>
  );
};

export default TextSection;
