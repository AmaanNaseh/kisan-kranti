import React from "react";

const NotDeployedPage = () => {
  return (
    <>
      <div className="flex flex-col my-10 items-center justify-center">
        <p className="text-justify m-10 font-bold text-xl">
          Sorry the requested content is not deployed due to technological
          constraints, please see the video demonstration of requested feature
          below.
        </p>
        <div className="w-[325px] h-[200px] md:w-[500px] md:h-[300px] lg:w-[750px] lg:h-[400px] mb-10">
          <iframe
            src="https://www.youtube.com/embed/3dOvQQYMEvE"
            title="Crop Disease Prediction Page of Kisan Kranti"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default NotDeployedPage;
