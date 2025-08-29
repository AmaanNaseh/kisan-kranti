import React, { useState, useEffect } from "react";
import heroPoster1 from "../../Assets/Root_Page/HeroPoster2.png";
import heroPoster2 from "../../Assets/Root_Page/HeroPoster.png";
import heroPoster3 from "../../Assets/Root_Page/HeroPoster3.png";

const Posters = () => {
  var [imgCount, setImgCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setImgCount((imgCount) => {
        return imgCount === 2 ? 0 : imgCount + 1;
      });
    }, 1750);

    return () => clearTimeout(timeout);
  }, [imgCount]);

  if (imgCount === 0) {
    return (
      <div className="w-full h-28 md:h-80">
        <img src={heroPoster1} alt="..." className="w-full h-full" />
      </div>
    );
  } else if (imgCount === 1) {
    return (
      <div className="w-full h-28 md:h-80">
        <img src={heroPoster2} alt="..." className="w-full h-full" />
      </div>
    );
  } else if (imgCount === 2) {
    return (
      <div className="w-full h-28 md:h-80">
        <img src={heroPoster3} alt="..." className="w-full h-full" />
      </div>
    );
  }
};

export default Posters;
