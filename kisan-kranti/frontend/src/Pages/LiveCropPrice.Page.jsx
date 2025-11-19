import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet";

import TopArrow from "../Assets/FAQ/TopArrow.png";

const LiveCropPricePage = () => {
  const [priceData, setPriceData] = useState(null);
  const [isArrowVisible, setIsArrowVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 350 ? setIsArrowVisible(true) : setIsArrowVisible(false);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // dhruvtaneja19 (gmail same) API key for data.gov.in current daily price various commodities Mandi is being used
  // old key: 579b464db66ec23bdd0000011cb4948b19304b6360cf41538f21b882

  const fetchData = async () => {
    document.getElementById("loader").style.display = "block";
    await fetch(
      "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001784906faa2f94e75444ad1b3f5674668&offset=0&limit=all&format=csv&format=json"
    )
      .then((res) => res.json())
      .then((liveData) => {
        setPriceData(liveData);
        console.log(liveData);
        console.log(priceData);
        document.getElementById("loader").style.display = "none";
      });
  };

  return (
    <>
      <Helmet>
        <title>Live Crop Prices in India | Kisan Kranti Market Insights</title>
        <meta
          name="description"
          content="Check real-time crop prices across Indian states to make informed decisions for selling crops through Kisan Kranti."
        />
        <link
          rel="canonical"
          href="https://www.kisankranti.tech/live-crop-price"
        />
      </Helmet>

      <div
        className="min-h-[75vh] my-10 py-10 px-12"
        name="LiveCropPricePageTop"
      >
        <div className="flex flex-col items-center justify-center">
          <button
            className="bg-green-500 hover:bg-green-600 rounded text-white cursor-pointer px-4 py-2 font-bold text-2xl hover:animate-zoomAnimation"
            onClick={fetchData}
          >
            Fetch Live Price Data
          </button>
          <div
            id="loader"
            className="my-4 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full w-12 h-12 animate-spin hidden"
          ></div>
        </div>

        {isArrowVisible ? (
          <Link
            to="LiveCropPricePageTop"
            smooth={true}
            duration={700}
            offset={-150}
          >
            <img
              className="w-[50px] fixed left-0 bottom-0 overflow-y-scroll ml-4 mb-4 cursor-pointer"
              src={TopArrow}
              alt="arrow"
            />
          </Link>
        ) : (
          ""
        )}

        {priceData !== null ? (
          <>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-x-4 gap-y-8 mt-16">
              {priceData.records.map((record) => {
                return (
                  <>
                    <div className="flex flex-col items-start justify-center bg-[#ffffff] shadow-xl z-20 p-5">
                      <p>
                        <span className="font-bold mr-1">State:</span>{" "}
                        {record.state}
                      </p>
                      <p>
                        <span className="font-bold mr-1">District:</span>{" "}
                        {record.district}
                      </p>
                      <p>
                        <span className="font-bold mr-1">Market:</span>{" "}
                        {record.market}
                      </p>
                      <p>
                        <span className="font-bold mr-1">Commodity:</span>{" "}
                        {record.commodity}
                      </p>
                      <p>
                        <span className="font-bold mr-1">Minimum price:</span> ₹
                        {record.min_price}
                      </p>
                      <p>
                        <span className="font-bold mr-1">Maximum price:</span> ₹
                        {record.max_price}
                      </p>
                      <p>
                        <span className="font-bold mr-1">Modal price:</span> ₹
                        {record.modal_price}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default LiveCropPricePage;
