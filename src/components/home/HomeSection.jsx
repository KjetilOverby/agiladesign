import React from "react";
import MarginLayout from "../common/MarginLayout";
import Section1Column from "../common/Section1Column";
import Image from "next/image";
import Section2Column from "../common/Section2Column";
import screenstack from "../../../assets/screenstack.jpg";

const HomeSection = () => {
  return (
    <>
      <MarginLayout>
        <div className="container">
          <h1 className="header">Do I really need a website?</h1>
          <Section1Column>
            <div className="text-container">
              <p className="text">
                In today’s world, we live in a very digital age. At the point
                within our history, consumers now expect an established website
                and online presence. Without those key features, some consumers
                may deem your company less professional, or perhaps even
                untrustworthy. Trust is one of the most important relationships
                you can make with an audience. Most people judge everything on
                face-value, and if you lack a common business feature like a
                website, people may boot your company to the side. With that
                being said, your company’s website will often be the first place
                a consumer looks at to find reviews or credentials, so you don’t
                want to give a consumer any reason to doubt your business.
              </p>

              <p className="text">
                Now, you’re probably wondering – can I just make my own website?
                Yes, you can. There are free links online that make it possible
                to create a free website for your business. In regards to those
                free website builders, the only caveat is oftentimes your
                website link will have their business name in the link. For
                example, if I create a free website through “website.com” (not a
                real thing), and my business is called “fishing”, my website
                link could be read as “fishing.website.com” or something along
                those lines. If that doesn’t bother you then you have options.
                Conversely, you can always hire a professional to build your
                website for you. Here are some pros and cons. Pro: they have
                more knowledge than you, they can build it faster, they know
                what works, they know what doesn’t work, and more importantly,
                you really don’t have to do much. Cons: you have to pay them.
                Your website is a critical part of your business and if you want
                a professional who is going to know exactly what to do and what
                is going to be effective, you always have that option as well.
                In closing, a website is going to be one of the most important
                aspects of your business. Your website doesn’t need to be
                extravagant or expensive, it just needs to be there. Regardless
                of if you think you need a website or not – create a website! It
                will only benefit your business and direct traffic to your
                products or services.
              </p>
              <div className="img-container">
                {/* <img
                style={{ width: "60%", marginTop: "5rem" }}
                src="https://www.pngkey.com/png/full/432-4327195_the-easiest-way-to-build-landing-pages-for.png"
                alt=""
              /> */}
                <Image src={screenstack} />
              </div>
            </div>
          </Section1Column>
        </div>
      </MarginLayout>
      <style jsx>
        {`
          .container {
            margin-top: 2rem;
            margin-bottom: 5rem;
          }
          .header {
            text-align: center;
            font-weight: 100;
            margin-bottom: 5rem;
          }
          .img-container {
            padding-bottom: 5rem;
          }

          @media screen and (max-width: 756px) {
            .container {
              margin-top: 3rem;
              margin-bottom: 5rem;
            }
            .header {
              margin: 3rem;
            }
            .img-container {
            }
          }
        `}
      </style>
    </>
  );
};

export default HomeSection;
