import React, { useState } from "react";
import IndiaMapImg from "../../Assets/Plant_Inventory_Page/IndiaMapImg.png";

const IndiaMap = () => {
  const [crops, setCrops] = useState(
    "Please click any state name to see details"
  );

  const [soil, setSoil] = useState(
    "Please click any state name to see details"
  );

  const [mapState, setMapState] = useState("");

  return (
    <>
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] relative">
          <img
            src={IndiaMapImg}
            alt="..."
            className="absolute z-[-1] w-full md:w-[500px] "
          />

          <button
            onClick={() => {
              setMapState("Jammu and Kashmir");
              setCrops(
                "Paddy, Wheat, Maize, Barley, Bajra, Jowar, Gram, Apple, Walnuts"
              );
              setSoil(
                "Brown Forest soil, Grey Brown Podzolic soil, Red & Yellow Podzolic soil, Hills Forest soil, Mountain Meadow soil, Saline Alkali soil, Alluvial soil"
              );
            }}
            className="absolute text-xs md:text-lg font-semibold hover:cursor-pointer hover:animate-zoomAnimation left-[35px] top-[15px] md:left-[75px] md:top-[30px]"
          >
            Jammu and Kashmir
          </button>
          <button
            onClick={() => {
              setMapState("Himachal Pradesh");
              setCrops(
                "Off-season vegetables, vegetable seeds, potato & ginger besides soybean, oilseeds, pulses, fruits"
              );
              setSoil("Sedimentary soil, Brown soil, Brownish soil");
            }}
            className="absolute text-xs md:text-lg font-semibold hover:cursor-pointer hover:animate-zoomAnimation left-[55px] top-[42px] md:left-[100px] md:top-[68px]"
          >
            Himachal Pradesh
          </button>
          <button
            onClick={() => {
              setMapState("Punjab");
              setCrops(
                "Wheat, Rice, Maize, Barley, Pulses, Rapeseed and Mustard, Sunflower, Oil Seeds, Sugarcane, Cotton, Fruits, Vegetables"
              );
              setSoil(
                "Flood plain soil, Loamy soil, Sandy soil, Desert soil, Kandi Soil, Sierozems, Sodic and Saline soil"
              );
            }}
            className="absolute text-xs md:text-lg font-semibold hover:cursor-pointer hover:animate-zoomAnimation left-[45px] top-[50px] md:left-[85px] md:top-[83px]"
          >
            Punjab
          </button>
          <button
            onClick={() => {
              setMapState("Haryana");
              setCrops(
                "Sugarcane, Barley, Jowar, Bajra, Gram, Rice, Wheat, Mustard, Cotton"
              );
              setSoil("Salt Affected soil, Alkali Soil, Saline soil");
            }}
            className="absolute text-xs md:text-lg font-semibold hover:cursor-pointer hover:animate-zoomAnimation left-[58px] top-[65px] md:left-[100px] md:top-[110px]"
          >
            Haryana
          </button>
          <button
            onClick={() => {
              setMapState("Rajasthan");
              setCrops(
                "Wheat, Sugarcane, Bajra, Baley, Jowar, Maize, Chili, Cotton, Mango, Rice, Vegetables, Groundnut, Oilseeds, Pulses"
              );
              setSoil(
                "Sandy soil, Saline soil, Alkaline soil, Chalky soil, Clay soil, Loamy soil, Black Lava soil, Nitrogenous soil"
              );
            }}
            className="absolute text-xs md:text-lg font-semibold hover:cursor-pointer hover:animate-zoomAnimation left-[25px] top-[90px] md:left-[50px] md:top-[143px]"
          >
            Rajasthan
          </button>
          <button
            onClick={() => {
              setMapState("Uttar Pradesh");
              setCrops(
                "Fruits, Vegetables, Spices, Floriculture, Medicinal/aromatic plants, others like Betel vine, Mushroom, Honey production"
              );
              setSoil(
                "Sandy soil, Saline soil, Alkaline soil, Chalky soil, Clay soil, Loamy soil, Black Lava soil, Nitrogenous soil"
              );
            }}
            className="absolute text-xs md:text-lg font-semibold hover:cursor-pointer hover:animate-zoomAnimation left-[85px] top-[85px] md:left-[175px] md:top-[137px]"
          >
            Uttar Pradesh
          </button>
          <button
            onClick={() => {
              setMapState("Gujarat");
              setCrops(
                "Rice, Wheat, Jowar, Bajra, Maize, tur, Gram, Cotton, Groundnuts, Dates, Sugarcane"
              );
              setSoil(
                "Sandy soil, Saline soil, Alkaline soil, Chalky soil, Clay soil, Loamy soil, Black Lava soil, Nitrogenous soil"
              );
            }}
            className="absolute text-xs md:text-lg font-semibold hover:cursor-pointer hover:animate-zoomAnimation left-[8px] top-[120px] md:left-[20px] md:top-[190px]"
          >
            Gujarat
          </button>
          <button
            onClick={() => {
              setMapState("Bihar");
              setCrops(
                "Rice, Wheat, Maize, Pulses, Vegetables, Fruits, Sugarcane, Jute"
              );
              setSoil(
                "Sandy soil, Saline soil, Alkaline soil, Chalky soil, Clay soil, Loamy soil, Black Lava soil, Nitrogenous soil"
              );
            }}
            className="absolute text-xs md:text-lg font-semibold hover:cursor-pointer hover:animate-zoomAnimation left-[162px] top-[95px] md:left-[278px] md:top-[158px]"
          >
            Bihar
          </button>
          <button
            onClick={() => {
              setMapState("Jharkhand");
              setSoil(
                "Sandy soil, Saline soil, Alkaline soil, Chalky soil, Clay soil, Loamy soil, Black Lava soil, Nitrogenous soil"
              );
            }}
            className="absolute text-xs md:text-lg font-semibold hover:cursor-pointer hover:animate-zoomAnimation left-[140px] top-[115px] md:left-[235px] md:top-[200px]"
          >
            Jharkhand
          </button>
          <button
            onClick={() => {
              setMapState("West Bengal");
              setCrops(
                "Rice, Jute, Tea, Potatoes, Oilseeds, Betel, Vine, Tobacco, Wheat, Barley, Maize"
              );
              setSoil(
                "Sandy soil, Saline soil, Alkaline soil, Chalky soil, Clay soil, Loamy soil, Black Lava soil, Nitrogenous soil"
              );
            }}
            className="absolute text-xs md:text-lg font-semibold hover:cursor-pointer hover:animate-zoomAnimation left-[175px] top-[125px] md:left-[315px] md:top-[190px]"
          >
            West Bengal
          </button>
          <button
            onClick={() => {
              setMapState("Madhya Pradesh");
              setCrops(
                "Wheat, Maize, Jowar, Gram, Tur, Urad, Moong, Soybean, Groundnuts, Mustard, Cotton, Sugarcane"
              );
              setSoil(
                "The black soil, Red & Yellow soil, Alluvial soil, Laterite soil, Mixed soil"
              );
            }}
            className="absolute text-xs md:text-lg font-semibold hover:cursor-pointer hover:animate-zoomAnimation left-[55px] top-[125px] md:left-[95px] md:top-[205px]"
          >
            Madhya Pradesh
          </button>
          <button
            onClick={() => {
              setMapState("Maharashtra");
              setCrops(
                "Rice, Jowar, Bajra, Wheat, Pulses, Cotton, Sugarcane, Several Oil Seeds, Sunflower, Groundnuts & Soybean"
              );
              setSoil("Black-Cotton soil, Kali soil, Morad soil, Pather soil");
            }}
            className="absolute text-xs md:text-lg font-semibold hover:cursor-pointer hover:animate-zoomAnimation left-[45px] top-[155px] md:left-[75px] md:top-[265px]"
          >
            Maharashtra
          </button>
          <button
            onClick={() => {
              setMapState("Chattisgarh");
              setCrops("Rice, Maize, Wheat, Niger, Groundnut, Pulses");
              setSoil("Black-Cotton soil, Kali soil, Morad soil, Pather soil");
            }}
            className="absolute text-xs md:text-lg font-semibold hover:cursor-pointer hover:animate-zoomAnimation left-[110px] top-[140px] md:left-[180px] md:top-[230px]"
          >
            Chattisgarh
          </button>
          <button
            onClick={() => {
              setMapState("Karnataka");
              setCrops(
                "Paddy, Jowar, Ragi, Maize, Sunflower, sugarcane, Cotton, Tobacco"
              );
              setSoil("Black-Cotton soil, Kali soil, Morad soil, Pather soil");
            }}
            className="absolute text-xs md:text-lg font-semibold hover:cursor-pointer hover:animate-zoomAnimation left-[40px] top-[200px] md:left-[90px] md:top-[325px]"
          >
            Karnataka
          </button>
        </div>
        <div className="w-[250px] h-[350px] bg-[#F5F5F5] px-2 flex flex-col gap-1 md:w-[300px] md:h-[300px]">
          <h1 className="font-semibold text-1xl md:text-2xl text-center">
            State-wise Crop data of
          </h1>
          <h1 className="font-bold text-1xl md:text-2xl p-2 text-center text-blue-600">
            {mapState}
          </h1>
          <p className="text-sm md:text-md my-1 text-justify">
            <span className="font-bold">Crops grown:</span>{" "}
            <span className="lg:text-1xl lg:ml-3">{crops}</span>
          </p>
          <p className="text-sm md:text-md my-1 text-justify">
            <span className="font-bold">Soil:</span>{" "}
            <span className="lg:text-1xl lg:ml-3">{soil}</span>
          </p>
          <div className="flex flex-row items-center justify-center my-3 md:mt-4">
            <button
              onClick={() => {
                setMapState("");
                setCrops("Please click any state name to see details");
                setSoil("Please click any state name to see details");
              }}
              className="p-2 w-16 text-white text-md font-bold bg-blue-500 rounded-lg md:w-24 md:text-1xl mb-2"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndiaMap;
