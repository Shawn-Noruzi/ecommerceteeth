import { useState } from "react";
import Hero from "../components/Hero";
import Head from "next/head";

import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
export default function Faq() {
  const [openBoxes, setOpenBoxes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  console.log("openBoxes", openBoxes);
  return (
    <div className="">
      <Head>
        <title>Beautiful Bright Smile | Products</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta name="description" content="Shop Teeth Whitening Products" />
        <meta property="og:title" content="Beautiful Bright Smile" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Beautiful Bright Smile Products"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Beautiful Bright Smile" />
      </Head>
      <Hero faq />
      <div className="mt-12 mx-auto max-w-screen-2xl relative px-4">
        <div className="flex flex-col">
          <div
            onClick={() =>
              setOpenBoxes((prev) => {
                return prev.map((v, i) => {
                  if (i === 0) return !v;
                  return v;
                });
              })
            }
            className="flex justify-between mb-4"
          >
            <h2 className="faqTitleFont">
              What are the ingredients in your gels?
            </h2>
            <img
              alt="arrow"
              src="/Assets/home/arrow.png"
              className={
                openBoxes[0] === true
                  ? "rotate-90  transition-all arrowFaq"
                  : " -rotate-90 transition-all arrowFaq"
              }
            />
          </div>
          <div
            className={
              openBoxes[0] === true
                ? "opacity-100 max-h-screen transition-all duration-300 ease-in"
                : " ease-out max-h-0 opacity-0 transition-all duration-300"
            }
          >
            <h2 className="faqTextFont">
              Our current gels and ingredients can be found on our ingredients
              page: www.beautifulbrightsmile.com/ingredients <br />
              <br /> All gels are Health Canada and FDA registered.
            </h2>

            <div className="socialIconContainer">
              <FacebookShareButton
                url={"https://www.beautifulbrightsmile.com"}
                quote=" What are the ingredients in your gels?"
                hashtag="Beautiful Bright Smile"
                className="mr-4"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <TwitterShareButton
                url={"https://www.beautifulbrightsmile.com"}
                title="FAQ Beautiful Bright Smile"
                hashtags={["white smile", "dental"]}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>
          </div>
        </div>
        <div className="divider" />

        <div className="flex flex-col">
          <div
            onClick={() =>
              setOpenBoxes((prev) => {
                return prev.map((v, i) => {
                  if (i === 1) return !v;
                  return v;
                });
              })
            }
            className="flex justify-between mb-4"
          >
            <h2 className="faqTitleFont">
              Is it safe to book a treatment or use an at home kit if I have
              crowns or fillings?
            </h2>
            <img
              alt="arrow"
              src="/Assets/home/arrow.png"
              className={
                openBoxes[1] === true
                  ? "rotate-90  transition-all arrowFaq"
                  : " -rotate-90 transition-all arrowFaq"
              }
            />
          </div>
          <div
            className={
              openBoxes[1] === true
                ? "opacity-100 max-h-screen transition-all duration-300 ease-in"
                : " ease-out max-h-0 opacity-0 transition-all duration-300"
            }
          >
            <h2 className="faqTextFont">
              Yes! All Beautiful Bright Smile products are safe on restorations
              (composite or porcelain). The gel will lift any stain that has
              accumulated on these pieces and restore them to the color they
              where when placed. We strongly recommed the peroxide free formula
              for porcelain pieces (crowns, veneers, bridges).
            </h2>

            <div className="socialIconContainer">
              <FacebookShareButton
                url={"https://www.beautifulbrightsmile.com"}
                quote=" What are the ingredients in your gels?"
                hashtag="Beautiful Bright Smile"
                className="mr-4"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <TwitterShareButton
                url={"https://www.beautifulbrightsmile.com"}
                title="FAQ Beautiful Bright Smile"
                hashtags={["white smile", "dental"]}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>
          </div>
        </div>
        <div className="divider" />

        <div className="flex flex-col">
          <div
            onClick={() =>
              setOpenBoxes((prev) => {
                return prev.map((v, i) => {
                  if (i === 2) return !v;
                  return v;
                });
              })
            }
            className="flex justify-between mb-4"
          >
            <h2 className="faqTitleFont">
            Is it safe to whiten my teeth when I am pregnant?
            </h2>
            <img
              alt="arrow"
              src="/Assets/home/arrow.png"
              className={
                openBoxes[2] === true
                  ? "rotate-90  transition-all arrowFaq"
                  : " -rotate-90 transition-all arrowFaq"
              }
            />
          </div>
          <div
            className={
              openBoxes[2] === true
                ? "opacity-100 max-h-screen transition-all duration-300 ease-in"
                : " ease-out max-h-0 opacity-0 transition-all duration-300"
            }
          >
            <h2 className="faqTextFont">
            We do NOT recommend using products containing peroxide when pregnant or nursing. 

We do however recommend our PURE kits and treatements for nursing mommas and if pregnant please consult your doctor with our PURE ingredient list before using!
            </h2>

            <div className="socialIconContainer">
              <FacebookShareButton
                url={"https://www.beautifulbrightsmile.com"}
                quote=" What are the ingredients in your gels?"
                hashtag="Beautiful Bright Smile"
                className="mr-4"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <TwitterShareButton
                url={"https://www.beautifulbrightsmile.com"}
                title="FAQ Beautiful Bright Smile"
                hashtags={["white smile", "dental"]}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>
          </div>
        </div>
        <div className="divider" />

        <div className="flex flex-col">
          <div
            onClick={() =>
              setOpenBoxes((prev) => {
                return prev.map((v, i) => {
                  if (i === 3) return !v;
                  return v;
                });
              })
            }
            className="flex justify-between mb-4"
          >
            <h2 className="faqTitleFont">
            Will this cause sensitivity?
            </h2>
            <img
              alt="arrow"
              src="/Assets/home/arrow.png"
              className={
                openBoxes[3] === true
                  ? "rotate-90  transition-all arrowFaq"
                  : " -rotate-90 transition-all arrowFaq"
              }
            />
          </div>
          <div
            className={
              openBoxes[3] === true
                ? "opacity-100 max-h-screen transition-all duration-300 ease-in"
                : " ease-out max-h-0 opacity-0 transition-all duration-300"
            }
          >
            <h2 className="faqTextFont">
            Our gels are very gentle on your teeth, that being said we cannot guarantee no sensitivity at all. For in studio treatments we have our after treatment remineralisation gel which soothes the dehydrated teeth, helping to eliminate any sensitivity.

We also offer peroxide free solutions which do not contain acidic agents. </h2>

            <div className="socialIconContainer">
              <FacebookShareButton
                url={"https://www.beautifulbrightsmile.com"}
                quote=" What are the ingredients in your gels?"
                hashtag="Beautiful Bright Smile"
                className="mr-4"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <TwitterShareButton
                url={"https://www.beautifulbrightsmile.com"}
                title="FAQ Beautiful Bright Smile"
                hashtags={["white smile", "dental"]}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>
          </div>
        </div>
        <div className="divider" />
      </div>
    </div>
  );
}
