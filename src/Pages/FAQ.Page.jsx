import React, { useState, useEffect } from "react";
import ChatbotIcon from "../Assets/FAQ/Chatbot_Icon.png";
import BackArrow from "../Assets/FAQ/BackArrow.png";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isFAQSelected = true;

  // FAQ Layers
  const [selectedFAQ, setSelectedFAQ] = useState(0);

  const [FAQLayerOne, setFAQLayerOne] = useState(true);
  const [FAQLayerTwo, setFAQLayerTwo] = useState(false);
  const [FAQLayerThree, setFAQLayerThree] = useState(false);
  // const [FAQLayerFour, setFAQLayerFour] = useState(false);

  return (
    <>
      <Navbar />
      <div className="bg-[#c6ffd2] p-10 md:px-20 min-h-[100vh] my-12">
        <div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl bg-[#0a6419] py-4 px-2 md:text-5xl text-center w-52 md:w-[300px] lg:w-[415px] font-bold text-white">
              Kisan-Mate FAQs
            </h1>
          </div>
          {selectedFAQ > 0 ? (
            <>
              <div
                className="w-12 h-12 hover:animate-zoomAnimation hover:cursor-pointer my-8 mx-4"
                onClick={() => {
                  setFAQLayerTwo(false);
                  setFAQLayerThree(false);
                  setFAQLayerOne(true);
                  setSelectedFAQ(0);
                }}
              >
                <img src={BackArrow} alt="..." />
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col items-center">
          {/* FAQ Layers */}
          {isFAQSelected && FAQLayerOne && (
            <div className="pl-6 pt-8">
              <p className="text-center my-4 text-lg font-semibold">
                Please select any option to proceed{" "}
              </p>
              <div className="flex flex-row flex-wrap gap-2 md:gap-8">
                <button
                  onClick={() => {
                    setFAQLayerOne(false);
                    setFAQLayerTwo(true);
                    setSelectedFAQ(1);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  State-wise Crop Info
                </button>
                <button
                  onClick={() => {
                    setFAQLayerOne(false);
                    setFAQLayerTwo(true);
                    setSelectedFAQ(2);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Crop Disease Info
                </button>
                <button
                  onClick={() => {
                    setFAQLayerOne(false);
                    setFAQLayerTwo(true);
                    setSelectedFAQ(3);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Government Schemes
                </button>
                <button
                  onClick={() => {
                    setFAQLayerOne(false);
                    setFAQLayerTwo(true);
                    setSelectedFAQ(4);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Crop Insuarance Schemes
                </button>
                <button
                  onClick={() => {
                    setFAQLayerOne(false);
                    setFAQLayerTwo(true);
                    setSelectedFAQ(5);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Loan Schemes
                </button>
                <button
                  onClick={() => {
                    setFAQLayerOne(false);
                    setFAQLayerTwo(true);
                    setSelectedFAQ(6);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Steps of Organic Farming
                </button>
              </div>
            </div>
          )}
          {FAQLayerTwo && selectedFAQ === 1 && (
            <div className="pl-6 pt-8">
              <p className="text-center my-4 text-lg font-semibold">
                Please select any option to proceed
              </p>
              <div className="flex flex-row flex-wrap gap-2 md:gap-8">
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(1.1);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Jammu and Kashmir
                </button>
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(1.2);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Himachal Pradesh
                </button>
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(1.3);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Punjab
                </button>
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(1.4);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Haryana
                </button>
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(1.5);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Rajasthan
                </button>
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(1.6);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Uttar Pradesh
                </button>
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(1.7);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Bihar
                </button>
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(1.8);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Gujarat
                </button>
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(1.9);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Madhya Pradesh
                </button>
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(1.101);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Jharkhand
                </button>
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(1.11);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Chattisgarh
                </button>
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(1.12);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  West Bengal
                </button>
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(1.13);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Maharashtra
                </button>
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(1.14);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Karnataka
                </button>
              </div>
            </div>
          )}
          {FAQLayerThree && selectedFAQ === 1.1 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />

                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <ul className="text-justify">
                    <li className="my-3">
                      <p>
                        Crops grown: Paddy, Wheat, Maize, Barley, Bajra, Jowar,
                        Gram, Apple, Walnuts
                      </p>
                    </li>
                    <li className="my-3">
                      <p>
                        Soil: Brown Forest soil, Grey Brown Podzolic soil, Red &
                        Yellow Podzolic soil, Hills Forest soil, Mountain Meadow
                        soil, Saline Alkali soil, Alluvial soil
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {FAQLayerThree && selectedFAQ === 1.2 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />

                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <ul className="text-justify">
                    <li className="my-3">
                      <p>
                        Crops grown: Off-season vegetables, vegetable seeds,
                        potato & ginger besides soybean, oilseeds, pulses,
                        fruits
                      </p>
                    </li>
                    <li className="my-3">
                      <p>Soil: Sedimentary soil, Brown soil, Brownish soil</p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {FAQLayerThree && selectedFAQ === 1.3 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <ul className="text-justify">
                    <li className="my-3">
                      <p>
                        Crops grown: Wheat, Rice, Maize, Barley, Pulses,
                        Rapeseed and Mustard, Sunflower, Oil Seeds, Sugarcane,
                        Cotton, Fruits, Vegetables
                      </p>
                    </li>
                    <li className="my-3">
                      <p>
                        Soil: Flood plain soil, Loamy soil, Sandy soil, Desert
                        soil, Kandi Soil, Sierozems, Sodic and Saline soil
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {FAQLayerThree && selectedFAQ === 1.4 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <ul className="text-justify">
                    <li className="my-3">
                      <p>
                        Crops grown: Sugarcane, Barley, Jowar, Bajra, Gram,
                        Rice, Wheat, Mustard, Cotton
                      </p>
                    </li>
                    <li className="my-3">
                      <p>Soil: Salt Affected soil, Alkali Soil, Saline soil</p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {FAQLayerThree && selectedFAQ === 1.5 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <ul className="text-justify">
                    <li className="my-3">
                      <p>
                        Crops grown: Wheat, Sugarcane, Bajra, Baley, Jowar,
                        Maize, Chili, Cotton, Mango, Rice, Vegetables,
                        Groundnut, Oilseeds, Pulses
                      </p>
                    </li>
                    <li className="my-3">
                      <p>
                        Soil: Sandy soil, Saline soil, Alkaline soil, Chalky
                        soil, Clay soil, Loamy soil, Black Lava soil,
                        Nitrogenous soil
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {FAQLayerThree && selectedFAQ === 1.6 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <ul className="text-justify">
                    <li className="my-3">
                      <p>
                        Crops grown: Fruits, Vegetables, Spices, Floriculture,
                        Medicinal/aromatic plants, others like Betel vine,
                        Mushroom, Honey production
                      </p>
                    </li>
                    <li className="my-3">
                      <p>
                        Soil: Sandy soil, Saline soil, Alkaline soil, Chalky
                        soil, Clay soil, Loamy soil, Black Lava soil,
                        Nitrogenous soil
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {FAQLayerThree && selectedFAQ === 1.7 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <ul className="text-justify">
                    <li className="my-3">
                      <p>
                        Crops grown: Rice, Wheat, Maize, Pulses, Vegetables,
                        Fruits, Sugarcane, Jute
                      </p>
                    </li>
                    <li className="my-3">
                      <p>
                        Soil: Sandy soil, Saline soil, Alkaline soil, Chalky
                        soil, Clay soil, Loamy soil, Black Lava soil,
                        Nitrogenous soil
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {FAQLayerThree && selectedFAQ === 1.8 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <ul className="text-justify">
                    <li className="my-3">
                      <p>
                        Crops grown: Rice, Wheat, Jowar, Bajra, Maize, tur,
                        Gram, Cotton, Groundnuts, Dates, Sugarcane
                      </p>
                    </li>
                    <li className="my-3">
                      <p>
                        Soil: Sandy soil, Saline soil, Alkaline soil, Chalky
                        soil, Clay soil, Loamy soil, Black Lava soil,
                        Nitrogenous soil
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {FAQLayerThree && selectedFAQ === 1.9 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <ul className="text-justify">
                    <li className="my-3">
                      <p>
                        Crops grown: Wheat, Maize, Jowar, Gram, Tur, Urad,
                        Moong, Soybean, Groundnuts, Mustard, Cotton, Sugarcane
                      </p>
                    </li>
                    <li className="my-3">
                      <p>
                        Soil: The black soil, Red & Yellow soil, Alluvial soil,
                        Laterite soil, Mixed soil
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {FAQLayerThree && selectedFAQ === 1.101 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <ul className="text-justify">
                    <li className="my-3">
                      <p>
                        Crops grown: Rice, Ragi, Maize, Wheat, Program, Niger,
                        Fruits
                      </p>
                    </li>
                    <li className="my-3">
                      <p>
                        Soil: Sandy soil, Saline soil, Alkaline soil, Chalky
                        soil, Clay soil, Loamy soil, Black Lava soil,
                        Nitrogenous soil
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {FAQLayerThree && selectedFAQ === 1.11 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <ul className="text-justify">
                    <li className="my-3">
                      <p>
                        Crops grown: Rice, Maize, Wheat, Niger, Groundnut,
                        Pulses
                      </p>
                    </li>
                    <li className="my-3">
                      <p>
                        Soil: Black-Cotton soil, Kali soil, Morad soil, Pather
                        soil
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {FAQLayerThree && selectedFAQ === 1.12 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <ul className="text-justify">
                    <li className="my-3">
                      <p>
                        Crops grown: Rice, Jute, Tea, Potatoes, Oilseeds, Betel,
                        Vine, Tobacco, Wheat, Barley, Maize
                      </p>
                    </li>
                    <li className="my-3">
                      <p>
                        Soil: Sandy soil, Saline soil, Alkaline soil, Chalky
                        soil, Clay soil, Loamy soil, Black Lava soil,
                        Nitrogenous soil
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {FAQLayerThree && selectedFAQ === 1.13 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <ul className="text-justify">
                    <li className="my-3">
                      <p>
                        Crops grown: Rice, Jowar, Bajra, Wheat, Pulses, Cotton,
                        Sugarcane, Several Oil Seeds, Sunflower, Groundnuts &
                        Soybean
                      </p>
                    </li>
                    <li className="my-3">
                      <p>
                        Soil: Black-Cotton soil, Kali soil, Morad soil, Pather
                        soil
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {FAQLayerThree && selectedFAQ === 1.14 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <ul className="text-justify">
                    <li className="my-3">
                      <p>
                        Crops grown: Paddy, Jowar, Ragi, Maize, Sunflower,
                        sugarcane, Cotton, Tobacco
                      </p>
                    </li>
                    <li className="my-3">
                      <p>
                        Soil: Black-Cotton soil, Kali soil, Morad soil, Pather
                        soil
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {FAQLayerTwo && selectedFAQ === 2 && (
            <div className="pl-6 pt-8">
              <p className="text-center my-4 text-lg font-semibold">
                Please select any option to proceed{" "}
              </p>
              <div className="flex flex-row flex-wrap gap-2 md:gap-8">
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(2.1);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Barley
                </button>
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(2.2);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Chickpea
                </button>
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(2.3);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Maize
                </button>{" "}
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(2.4);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Sugarcane
                </button>{" "}
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(2.5);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Wheat
                </button>
              </div>
            </div>
          )}
          {FAQLayerThree && selectedFAQ === 2.1 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <ul className="text-justify">
                    <li className="my-3">
                      <p>Yellow Dwarf Virus</p>
                    </li>
                    <li className="my-3">
                      <p>Powdery Mildew</p>
                    </li>
                    <li className="my-3">
                      <p>Root and Crown Rot</p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {FAQLayerThree && selectedFAQ === 2.2 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <ul className="text-justify">
                    <li className="my-3">
                      <p>Ascochyta Blight</p>
                    </li>
                    <li className="my-3">
                      <p>Powdery Mildew</p>
                    </li>
                    <li className="my-3">
                      <p>Botrytis Gray Mold</p>
                    </li>
                    <li className="my-3">
                      <p>Chickpea Rust</p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {FAQLayerThree && selectedFAQ === 2.3 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <ul className="text-justify">
                    <li className="my-3">
                      <p>Corn Smut</p>
                    </li>
                    <li className="my-3">
                      <p>Northern Maize Chlorotic Dwarf Virus</p>
                    </li>
                    <li className="my-3">
                      <p>Corn Leaf Blight</p>
                    </li>
                    <li className="my-3">
                      <p>Gray Leaf Spot</p>
                    </li>
                    <li className="my-3">
                      <p>Fusarium Rot</p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}{" "}
          {FAQLayerThree && selectedFAQ === 2.4 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <ul className="text-justify">
                    <li className="my-3">
                      <p>Red Rot</p>
                    </li>
                    <li className="my-3">
                      <p>Smut</p>
                    </li>
                    <li className="my-3">
                      <p>Leaf Scald</p>
                    </li>
                    <li className="my-3">
                      <p>Mosaic Disease</p>
                    </li>
                    <li className="my-3">
                      <p>Fusarium Wilt</p>
                    </li>
                    <li className="my-3">
                      <p>Pythium Root Rot</p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {FAQLayerThree && selectedFAQ === 2.5 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <ul className="text-justify">
                    <li className="my-3">
                      <p>Black Chaff</p>
                    </li>
                    <li className="my-3">
                      <p>Wheat Streak Mosaic Virus</p>
                    </li>
                    <li className="my-3">
                      <p>Fusarium Head Blight</p>
                    </li>
                    <li className="my-3">
                      <p>Wheat Dwarf Virus</p>
                    </li>
                    <li className="my-3">
                      <p>Bacterial Mosaic</p>
                    </li>
                    <li className="my-3">
                      <p>Cephalosporium Stripe</p>
                    </li>
                    <li className="my-3">
                      <p>Root Gall Nematode</p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {FAQLayerTwo && selectedFAQ === 3 && (
            <div className="pl-6 pt-8">
              <p className="text-center my-4 text-lg font-semibold">
                Please select any option to proceed{" "}
              </p>
              <div className="flex flex-row flex-wrap gap-2 md:gap-8">
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(3.1);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  PM Kisan Yojna
                </button>
              </div>
            </div>
          )}
          {FAQLayerThree && selectedFAQ === 3.1 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <p>
                    PM Kisan is a Central Sector scheme with full funding from
                    Government of India. It has become operational from
                    1.12.2018. Under the scheme an income support of 6,000/- per
                    year in three equal installments will be provided to all
                    land holding farmer families.
                  </p>
                </div>
              </div>
            </>
          )}
          {FAQLayerTwo && selectedFAQ === 4 && (
            <div className="pl-6 pt-8">
              <p className="text-center my-4 text-lg font-semibold">
                Please select any option to proceed{" "}
              </p>
              <div className="flex flex-row flex-wrap gap-2 md:gap-8">
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(4.1);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Pradhan Mantri Fasal Bima Yojana (PMFBY)
                </button>
              </div>
            </div>
          )}
          {FAQLayerThree && selectedFAQ === 4.1 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <p>
                    Crop Insurance is an integrated IT solution and a web-based
                    ecosystem to speed up service delivery, unify fragmented
                    databases, achieve a single view of data, and eliminate
                    manual processes.
                  </p>
                </div>
              </div>
            </>
          )}
          {FAQLayerTwo && selectedFAQ === 5 && (
            <div className="pl-6 pt-8">
              <p className="text-center my-4 text-md font-semibold">
                Please select any option to proceed{" "}
              </p>
              <div className="flex flex-row flex-wrap gap-2 md:gap-8">
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(5.1);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  Kisan Credit Card (KCC) Scheme
                </button>
                <button
                  onClick={() => {
                    setFAQLayerTwo(false);
                    setFAQLayerThree(true);
                    setSelectedFAQ(5.2);
                  }}
                  className="text-md md:text-1xl p-1 md:p-2 border-[1px] font-semibold border-black hover:animate-zoomAnimation"
                >
                  National Bank for Ariculture and Rural Deveopment (NABARD)
                </button>
              </div>
            </div>
          )}
          {FAQLayerThree && selectedFAQ === 5.1 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <p>
                    Kisan Credit Card is a dedicated blog that shares valuable
                    updates, news, and information about Kisan Credit Cards,
                    their applications, and the latest trends in the industry.
                  </p>
                </div>
              </div>
            </>
          )}
          {FAQLayerThree && selectedFAQ === 5.2 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <p>
                    NABARD is India’s apex development bank, established in 1982
                    under an Act of Parliament to promote sustainable and
                    equitable agriculture and rural development
                  </p>
                </div>
              </div>
            </>
          )}
          {FAQLayerTwo && selectedFAQ === 6 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-5 p-4">
                <img
                  src={ChatbotIcon}
                  alt="..."
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                />
                <div className="flex flex-col items-center justify-center bg-[#f5f5f5] p-4 m-4 md:p-10 md:m-8">
                  <ul className="text-justify">
                    <li className="my-3">
                      <p>
                        1. Soil Management: Enhance soil fertility through
                        composting, green manures, and crop rotation. Avoid
                        synthetic fertilizers and pesticides.{" "}
                      </p>
                    </li>
                    <li className="my-3">
                      <p>
                        2. Pest and Disease Control: Use natural predators,
                        beneficial insects, and organic-approved treatments.
                        Implement integrated pest management (IPM) strategies.{" "}
                      </p>
                    </li>
                    <li className="my-3">
                      <p>
                        3. Crop Diversity: Rotate crops and plant a variety of
                        species to improve soil health and reduce pest and
                        disease risks.
                      </p>
                    </li>
                    <li className="my-3">
                      <p>
                        4. Organic Seeds: Use seeds that are grown without
                        synthetic chemicals and are adapted to the local
                        environment.
                      </p>
                    </li>
                    <li className="my-3">
                      <p>
                        5. Weed Management: Employ physical methods like
                        mulching and manual weeding, or use organic herbicides
                        if necessary.
                      </p>
                    </li>
                    <li className="my-3">
                      <p>
                        6. Animal Welfare: Ensure that livestock are raised with
                        access to the outdoors and are fed organic feed. Avoid
                        antibiotics and growth hormones.
                      </p>
                    </li>
                    <li className="my-3">
                      <p>
                        7. Sustainability: Focus on practices that conserve
                        water, protect natural resources, and promote
                        biodiversity.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQPage;
