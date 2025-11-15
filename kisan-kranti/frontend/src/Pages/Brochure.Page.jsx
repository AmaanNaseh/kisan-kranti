import React from "react";
import { Helmet } from "react-helmet";

import Brochure from "../Assets/Brochure/Brochure.png";
import BrochureHindi from "../Assets/Brochure/Brochure_Hindi.pdf";
import BrochureEnglish from "../Assets/Brochure/Brochure_English.pdf";

const BrochurePage = () => {
  return (
    <>
      <Helmet>
        <title>
          Download Kisan Kranti Brochure | AI Farming & Farmer Tools
        </title>
        <meta
          name="description"
          content="Get the official Kisan Kranti brochure to explore all features, AI tools, crop disease prediction, weather forecasts, e-dukaan, and government schemes for farmers."
        />
        <link rel="canonical" href="https://www.kisankranti.tech/brochure" />
      </Helmet>

      <div className="my-10 mb-24 flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-40 text-white font-semibold">
          <a
            href={BrochureEnglish}
            download
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md"
          >
            Download Brochure (English)
          </a>
          <a
            href={BrochureHindi}
            download
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md"
          >
            Download Brochure (Hindi)
          </a>
        </div>
        <div className="w-[350px] md:w-[700px] lg:w-[1200px] border-[3px] border-black">
          <img src={Brochure} alt="Brochure" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default BrochurePage;
