import React, { useEffect } from "react";
import { Barley } from "../Dataset/Barley";
import { Chickpea } from "../Dataset/Chickpea";
import { Maize } from "../Dataset/Maize";
import { Sugarcane } from "../Dataset/Sugarcane";
import { Wheat } from "../Dataset/Wheat";

import BarleyCircle from "../Assets/Plant_Inventory_Page/BarleyCircle.jpg";
import ChickpeaCircle from "../Assets/Plant_Inventory_Page/ChickpeaCircle.jpg";
import MaizeCircle from "../Assets/Plant_Inventory_Page/MaizeCircle.jpg";
import SugarcaneCircle from "../Assets/Plant_Inventory_Page/SugarcaneCircle.jpeg";
import WheatCircle from "../Assets/Plant_Inventory_Page/WheatCircle.jpg";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import IndiaMap from "../Components/IndiaMap/IndiaMap";

const PlantInventoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-center items-center my-12 md:my-20">
        <IndiaMap />
      </div>
      <div className="flex flex-row items-center justify-center flex-wrap md:flex-nowrap gap-20 my-10">
        <div className="flex flex-col items-center justify-center">
          <img
            src={BarleyCircle}
            alt="..."
            className="w-[100px] h-[100px] rounded-full"
          />

          <h1 className="text-1xl font-semibold">Barley</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={ChickpeaCircle}
            alt="..."
            className="w-[100px] h-[100px] rounded-full"
          />

          <h1 className="text-1xl font-semibold">Chickpea</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={MaizeCircle}
            alt="..."
            className="w-[100px] h-[100px] rounded-full"
          />

          <h1 className="text-1xl font-semibold">Maize</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={SugarcaneCircle}
            alt="..."
            className="w-[100px] h-[100px] rounded-full"
          />

          <h1 className="text-1xl font-semibold">Sugarcane</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={WheatCircle}
            alt="..."
            className="w-[100px] h-[100px] rounded-full"
          />
          <h1 className="text-1xl font-semibold">Wheat</h1>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-12 mx-12 my-10">
        {/* Barley*/}
        {Barley.map((barley) => {
          return (
            <>
              <div className="bg-[#D6C9A7] w-[380px] min-h-[670px] h-full p-3 ">
                <div className="flex flex-col justify-center items-center mb-4 w-full h-[200px]">
                  <img
                    src={barley.ImageUrl}
                    alt="..."
                    className="w-full h-full"
                  />
                </div>
                <h2 className="my-1">
                  <span className="font-semibold">Name: </span>
                  <span>{barley.Name}</span>
                </h2>
                <h2 className="my-1">
                  <span className="font-semibold">Genus: </span>
                  <span>{barley.Genus}</span>
                </h2>
                <h2 className="my-1">
                  <span className="font-semibold">Species: </span>
                  <span>{barley.Species}</span>
                </h2>
                <h2 className="my-1">
                  <span className="font-semibold">Location: </span>
                  <span>{barley.Location}</span>
                </h2>
                <div>
                  <h2 className="font-semibold">Varieties</h2>
                  <div className="flex flex-row flex-wrap gap-2 pl-4">
                    {barley.Varieties.map((variety) => {
                      return (
                        <>
                          <div>
                            <h3 className="font-semibold">
                              Variety {variety.index}
                            </h3>
                            <h3>
                              <span className="font-semibold">Code: </span>
                              <span>{variety.code}</span>
                            </h3>
                            <h3>
                              <span className="font-semibold">Type: </span>
                              <span>{variety.type}</span>
                            </h3>

                            {/* {variety.index > 1 ? "" : ""} */}
                            <p
                              className={`${
                                variety.usage.length > 20 ? "max-w-40" : ""
                              }`}
                            >
                              <span className="font-semibold">Usage: </span>
                              <span>{variety.usage}</span>
                            </p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold">
                    Diseases found in {barley.Name} ({barley.Species})
                  </h2>
                  <ul className="pl-5">
                    <li>{barley.Diseases.disease1}</li>

                    <li>{barley.Diseases.disease2}</li>
                    <li>{barley.Diseases.disease3}</li>
                  </ul>
                </div>
              </div>
            </>
          );
        })}
        {/* Chickpea */}
        {Chickpea.map((chickpea) => {
          return (
            <>
              <div className="bg-[#F0E2A0] w-[380px] min-h-[670px] h-full p-3 ">
                <div className="flex flex-col justify-center items-center mb-4 w-full h-[200px]">
                  <img
                    src={chickpea.ImageUrl}
                    alt="..."
                    className="w-full h-full"
                  />
                </div>
                <h2 className="my-1">
                  <span className="font-semibold">Name: </span>
                  <span>{chickpea.Name}</span>
                </h2>
                <h2 className="my-1">
                  <span className="font-semibold">Genus: </span>
                  <span>{chickpea.Genus}</span>
                </h2>
                <h2 className="my-1">
                  <span className="font-semibold">Species: </span>
                  <span>{chickpea.Species}</span>
                </h2>
                <h2 className="my-1">
                  <span className="font-semibold">Location: </span>
                  <span>{chickpea.Location}</span>
                </h2>
                <div>
                  <h2 className="font-semibold">Varieties</h2>
                  <div className="flex flex-row flex-wrap gap-2 pl-4">
                    {chickpea.Varieties.map((variety) => {
                      return (
                        <>
                          <div>
                            <h3 className="font-semibold">
                              Variety {variety.index}
                            </h3>
                            <h3>
                              <span className="font-semibold">Code: </span>
                              <span>{variety.code}</span>
                            </h3>
                            <h3>
                              <span className="font-semibold">Type: </span>
                              <span>{variety.type}</span>
                            </h3>

                            {/* {variety.index > 1 ? "" : ""} */}
                            <p
                              className={`${
                                variety.usage.length > 20 ? "max-w-40" : ""
                              }`}
                            >
                              <span className="font-semibold">Usage: </span>
                              <span>{variety.usage}</span>
                            </p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold">
                    Diseases found in {chickpea.Name} ({chickpea.Species})
                  </h2>
                  <ul className="pl-5">
                    <li>{chickpea.Diseases.disease1}</li>

                    <li>{chickpea.Diseases.disease2}</li>
                    <li>{chickpea.Diseases.disease3}</li>
                  </ul>
                </div>
              </div>
            </>
          );
        })}
        {/* Maize */}
        {Maize.map((maize) => {
          return (
            <>
              <div className="bg-[#F9C74F] w-[380px] min-h-[670px] h-full p-3 ">
                <div className="flex flex-col justify-center items-center mb-4 w-full h-[200px]">
                  <img
                    src={maize.ImageUrl}
                    alt="..."
                    className="w-full h-full"
                  />
                </div>
                <h2 className="my-1">
                  <span className="font-semibold">Name: </span>
                  <span>{maize.Name}</span>
                </h2>
                <h2 className="my-1">
                  <span className="font-semibold">Genus: </span>
                  <span>{maize.Genus}</span>
                </h2>
                <h2 className="my-1">
                  <span className="font-semibold">Species: </span>
                  <span>{maize.Species}</span>
                </h2>
                <h2 className="my-1">
                  <span className="font-semibold">Location: </span>
                  <span>{maize.Location}</span>
                </h2>
                <div>
                  <h2 className="font-semibold">Varieties</h2>
                  <div className="flex flex-row flex-wrap gap-2 pl-4">
                    {maize.Varieties.map((variety) => {
                      return (
                        <>
                          <div>
                            <h3 className="font-semibold">
                              Variety {variety.index}
                            </h3>
                            <h3>
                              <span className="font-semibold">Code: </span>
                              <span>{variety.code}</span>
                            </h3>
                            <h3>
                              <span className="font-semibold">Type: </span>
                              <span>{variety.type}</span>
                            </h3>

                            {/* {variety.index > 1 ? "" : ""} */}
                            <p
                              className={`${
                                variety.usage.length > 20 ? "max-w-40" : ""
                              }`}
                            >
                              <span className="font-semibold">Usage: </span>
                              <span>{variety.usage}</span>
                            </p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold">
                    Diseases found in {maize.Name} ({maize.Species})
                  </h2>
                  <ul className="pl-5">
                    <li>{maize.Diseases.disease1}</li>
                    <li>{maize.Diseases.disease2}</li>
                    <li>{maize.Diseases.disease3}</li>
                  </ul>
                </div>
              </div>
            </>
          );
        })}
        {/* Sugarcane */}
        {Sugarcane.map((sugarcane) => {
          return (
            <>
              <div className="bg-[#9B9B7A] w-[380px] min-h-[670px] h-full p-3 ">
                <div className="flex flex-col justify-center items-center mb-4 w-full h-[200px]">
                  <img
                    src={sugarcane.ImageUrl}
                    alt="..."
                    className="w-full h-full"
                  />
                </div>
                <h2 className="my-1">
                  <span className="font-semibold">Name: </span>
                  <span>{sugarcane.Name}</span>
                </h2>
                <h2 className="my-1">
                  <span className="font-semibold">Genus: </span>
                  <span>{sugarcane.Genus}</span>
                </h2>
                <h2 className="my-1">
                  <span className="font-semibold">Species: </span>
                  <span>{sugarcane.Species}</span>
                </h2>
                <h2 className="my-1">
                  <span className="font-semibold">Location: </span>
                  <span>{sugarcane.Location}</span>
                </h2>
                <div>
                  <h2 className="font-semibold">Varieties</h2>
                  <div className="flex flex-row flex-wrap gap-2 pl-4">
                    {sugarcane.Varieties.map((variety) => {
                      return (
                        <>
                          <div>
                            <h3 className="font-semibold">
                              Variety {variety.index}
                            </h3>
                            <h3>
                              <span className="font-semibold">Code: </span>
                              <span>{variety.code}</span>
                            </h3>
                            <h3>
                              <span className="font-semibold">Type: </span>
                              <span>{variety.type}</span>
                            </h3>

                            {/* {variety.index > 1 ? "" : ""} */}
                            <p
                              className={`${
                                variety.usage.length > 20 ? "max-w-40" : ""
                              }`}
                            >
                              <span className="font-semibold">Usage: </span>
                              <span>{variety.usage}</span>
                            </p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold">
                    Diseases found in {sugarcane.Name} ({sugarcane.Species})
                  </h2>
                  <ul className="pl-5">
                    <li>{sugarcane.Diseases.disease1}</li>
                    <li>{sugarcane.Diseases.disease2}</li>
                    <li>{sugarcane.Diseases.disease3}</li>
                    <li>{sugarcane.Diseases.disease4}</li>
                    <li>{sugarcane.Diseases.disease5}</li>
                    <li>{sugarcane.Diseases.disease6}</li>
                  </ul>
                </div>
              </div>
            </>
          );
        })}
        {/* Wheat */}
        {Wheat.map((wheat) => {
          return (
            <>
              <div className="bg-[#F5D6A3] w-[380px] min-h-[670px] h-full p-3 ">
                <div className="flex flex-col justify-center items-center mb-4 w-full h-[200px]">
                  <img
                    src={wheat.ImageUrl}
                    alt="..."
                    className="w-full h-full"
                  />
                </div>
                <h2 className="my-1">
                  <span className="font-semibold">Name: </span>
                  <span>{wheat.Name}</span>
                </h2>
                <h2 className="my-1">
                  <span className="font-semibold">Genus: </span>
                  <span>{wheat.Genus}</span>
                </h2>
                <h2 className="my-1">
                  <span className="font-semibold">Species: </span>
                  <span>{wheat.Species}</span>
                </h2>
                <h2 className="my-1">
                  <span className="font-semibold">Location: </span>
                  <span>{wheat.Location}</span>
                </h2>
                <div>
                  <h2 className="font-semibold">Varieties</h2>
                  <div className="flex flex-row flex-wrap gap-2 pl-4">
                    {wheat.Varieties.map((variety) => {
                      return (
                        <>
                          <div>
                            <h3 className="font-semibold">
                              Variety {variety.index}
                            </h3>
                            <h3>
                              <span className="font-semibold">Code: </span>
                              <span>{variety.code}</span>
                            </h3>
                            <h3>
                              <span className="font-semibold">Type: </span>
                              <span>{variety.type}</span>
                            </h3>

                            {/* {variety.index > 1 ? "" : ""} */}
                            <p
                              className={`${
                                variety.usage.length > 20 ? "max-w-40" : ""
                              }`}
                            >
                              <span className="font-semibold">Usage: </span>
                              <span>{variety.usage}</span>
                            </p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold">
                    Diseases found in {wheat.Name} ({wheat.Species})
                  </h2>
                  <ul className="pl-5">
                    <li>{wheat.Diseases.disease1}</li>
                    <li>{wheat.Diseases.disease2}</li>
                    <li>{wheat.Diseases.disease3}</li>
                    <li>{wheat.Diseases.disease4}</li>
                  </ul>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default PlantInventoryPage;
