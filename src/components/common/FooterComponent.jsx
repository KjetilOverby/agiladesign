import React from "react";
import styles from "../../../styles/common/Footer.module.css";
import Image from "next/image";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import logo from "../../../assets/agilalogounderlineAF.png";

const FooterComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <div className={styles.logoContainer}>
          <Image src={logo} />
        </div>

        <br />
      </div>
      <div className={styles.secondContainer}>
        <div>
          <p className={styles.text}>Adress: 2270 Flisa, Innlandet, Norway</p>
          <p className={styles.text}>Phone: 97541236</p>
          <p className={styles.text}>Email: agiladesign80@gmail.com</p>
        </div>
      </div>

      <div className={styles.thirdContainer}>
        <div className={styles.copyrightContainer}>
          <div>
            {
              <AiOutlineCopyrightCircle
                style={{ color: "var(--footer-text" }}
              />
            }
          </div>
          <p className={`${styles.logo}`}>
            Agila Design 2022. All rights reserved.
          </p>
        </div>
      </div>
      <div className={styles.iconContainer}>
        <FaFacebookSquare
          style={{
            color: "var(--footer-text)",
            fontSize: "2.1rem",
            marginRight: "1rem",
          }}
        />
        <AiFillLinkedin
          style={{ color: "var(--footer-text)", fontSize: "2.3rem" }}
        />
      </div>
    </div>
  );
};

export default FooterComponent;
