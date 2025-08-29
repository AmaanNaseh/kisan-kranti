import React from "react";
import BrochureHindi from "../Assets/Brochure/Brochure_Hindi.pdf";
import BrochureEnglish from "../Assets/Brochure/Brochure_English.pdf";

const BrochurePage = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-4 my-10 mx-4">
        <div className="h-[500px] lg:w-[49%] lg:h-[100vh]">
          <iframe
            src={BrochureHindi}
            title="Hindi Brochure"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="h-[500px] lg:w-[49%] lg:h-[100vh]">
          <iframe
            src={BrochureEnglish}
            title="English"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
    </>
  );
};

export default BrochurePage;
