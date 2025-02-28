import React from "react";

const NotDeployedPage = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <p className="text-justify m-10 text-red-700 font-bold text-xl">
          Sorry the requested content is not deployed due to technological
          constraints, please see the video demonstration of requested feature
          in "About" section of Navbar or Footer.
        </p>
      </div>
    </>
  );
};

export default NotDeployedPage;
