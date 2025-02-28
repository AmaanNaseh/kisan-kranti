import React from "react";
import BrochureHindi from "../Assets/Brochure/Brochure_Hindi.pdf";
import BrochureEnglish from "../Assets/Brochure/Brochure_English.pdf";

const BrochurePage = () => {
  return (
    <>
      <div className="flex items-center gap-4 my-10">
        <div className="w-[49%] h-[100vh]">
          <iframe
            src={BrochureHindi}
            title="Hindi Brochure"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="w-[49%] h-[100vh]">
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
