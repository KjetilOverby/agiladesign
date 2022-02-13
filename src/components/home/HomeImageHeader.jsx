import React from "react";
import Image from "next/image";
import logo from "../../../assets/agiladesignLogo.png";
import styles from "../../../styles/Home.module.css";

const HomeImageHeader = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className="header">Websites & Webapplications</h1>
        <div className="logo-container">
          <Image src={logo} />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            background: linear-gradient(#ffffff1a, #ffffff),
              url("https://media.istockphoto.com/photos/panorama-of-eagle-soaring-high-picture-id138075251?k=20&m=138075251&s=612x612&w=0&h=7kZ1Jfo50MCjgg2ZR1HCDYGzi-jlifCLIdyxByjMIcU=");
            background-position: 0% 35%;
            background-repeat: no-repeat;
            background-size: cover;
            height: 60vh;
          }
          .header {
            margin-top: 3rem;
            font-size: 3rem;
            font-weight: 300;
            color: #1b425c;
          }
          .logo-container {
            width: 20%;
            margin-bottom: 8rem;
          }
          @media screen and (max-width: 756px) {
            .logo-container {
              width: 80%;
              margin-bottom: 0rem;
            }
            .container {
              background-position: 50% 35%;
              height: 25vh;
            }
            .header {
              font-size: 1.5rem;
              margin-top: 1.5rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default HomeImageHeader;
