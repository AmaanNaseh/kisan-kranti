import React, { useState } from "react";
import { Flask_Backend_API } from "../../Config/Config";
import { Link } from "react-router-dom";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import InstallButton from "../InstallButton/InstallButton";

import BrochureHindi from "../../Assets/Brochure/Brochure_Hindi.pdf";
import BrochureEnglish from "../../Assets/Brochure/Brochure_English.pdf";
import PhoneIcon from "../../Assets/Navbar/Phone.png";
import GTranslator from "../GTranslator/GTranslator";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-green-700 sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3">
          <Link to={"/"}>
            <h1 className="text-3xl text-center font-bold text-white hover:scale-[1.15]">
              किसान <br className="md:hidden" /> Kranti
            </h1>
          </Link>

          <GTranslator />

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <XIcon className="w-8 h-8 text-white" />
              ) : (
                <MenuIcon className="w-8 h-8 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:hidden absolute top-[137px] md:top-[108px] text-sm left-0 w-full bg-green-700 text-white p-4 space-y-4`}
          >
            <Link to={"/"}>
              <p className="block py-2 px-4 hover:bg-green-500">Home</p>
            </Link>

            <div className="group text-sm">
              <p className="block py-2 px-4 hover:bg-green-500">Features</p>
              <ul className="bg-white text-black text-sm shadow-lg mt-2 rounded-lg p-2 space-y-1">
                <Link to={"/crop-selection"}>
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Crop Selection
                  </li>
                </Link>

                <Link to={"/weather-forecast"}>
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Weather Forecast
                  </li>
                </Link>

                <a
                  href={Flask_Backend_API}
                  className="decoration-none text-black"
                >
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Crop Disease Prediction
                  </li>
                </a>

                <Link to={"/crop-report-generator"}>
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Crop Report Generator
                  </li>
                </Link>

                <a
                  href="https://www.google.com/maps/search/agronomist+near+me"
                  target="_blank"
                  rel="noreferrer"
                  className="decoration-none text-black"
                >
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Crop Health Checkup
                  </li>
                </a>

                <Link to={"/live-crop-price"}>
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Live Crop Price
                  </li>
                </Link>

                <Link to={"/edukaan"}>
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Kisan E-Dukaan
                  </li>
                </Link>

                <Link to={"/schemes"}>
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Kisan Welfare Schemes
                  </li>
                </Link>

                <Link to={"/complaints"}>
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Complain to Pradhan
                  </li>
                </Link>

                <Link to={"/organic-farming"}>
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Learn Organic Farming
                  </li>
                </Link>

                <Link to={"/brochure"}>
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Brochure
                  </li>
                </Link>

                <Link to={"/ai-architecture"}>
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    AI Architecture
                  </li>
                </Link>
                <a
                  href="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/10/20/07/20241020074834-6ZC6PNEK.json"
                  className="decoration-none text-black"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Chatbot
                  </li>
                </a>
                <Link to={"/faqs"}>
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    FAQs
                  </li>
                </Link>
              </ul>
            </div>
            <InstallButton />

            {/* <div className="group text-sm">
              <p className="block py-2 px-4 hover:bg-green-500">About</p>
              <ul className="bg-white text-black shadow-lg mt-2 rounded-lg p-2 space-y-1 text-sm">
                <a
                  href="https://youtu.be/QwbhA1V4NrI"
                  target="_blank"
                  rel="noreferrer"
                  className="decoration-none text-black"
                >
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    How to Use? (Hindi)
                  </li>
                </a>
                <a
                  href="https://youtu.be/LVCE_83GQlY"
                  target="_blank"
                  rel="noreferrer"
                  className="decoration-none text-black"
                >
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    How to Use? (English)
                  </li>
                </a>
                <a
                  href={BrochureHindi}
                  download="Kisan_Kranti_Brochure_Hindi.pdf"
                  className="decoration-none text-black"
                >
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Download Brochure (Hindi)
                  </li>
                </a>
                <a
                  href={BrochureEnglish}
                  download="Kisan_Kranti_Brochure_English.pdf"
                  className="decoration-none text-black"
                >
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Download Brochure (English)
                  </li>
                </a>
              </ul>
            </div> */}
          </div>

          {/* Large Screens Menu */}
          <div className="hidden lg:flex flex-row justify-center items-center gap-4 text-3xl font-thin list-none">
            <Link to={"/"}>
              <p className="text-white border border-gray-400 rounded-full py-2 px-4 hover:bg-green-500">
                Home
              </p>
            </Link>

            <div
              className="group"
              onClick={() => {
                setIsVisible(!isVisible);
              }}
            >
              <p className="text-white border border-gray-400 rounded-full py-2 px-4 hover:bg-green-500 cursor-pointer flex items-center justify-center gap-3">
                Features
                {isVisible ? (
                  <FaChevronUp className="text-2xl p-1 border-[1px] border-white rounded-full" />
                ) : (
                  <FaChevronDown className="text-2xl p-1 border-[1px] border-white rounded-full" />
                )}
              </p>

              {/* Dropdown Menu on Hover */}
              <div
                className={`absolute w-full left-0 top-[108px] bg-white shadow-lg text-black p-10 min-h-[400px] ${
                  isVisible
                    ? "flex items-center justify-center gap-12"
                    : "hidden"
                }`}
              >
                <div className="flex flex-wrap items-start justify-start gap-16">
                  {/* Selection & Growth */}
                  <div className="flex flex-col justify-center gap-4">
                    <h1 className="text-sm font-semibold border-b-[2px] border-black text-center">
                      Crop Selection & Growth
                    </h1>
                    <ul className="flex flex-col justify-center gap-2">
                      <Link to={"/crop-selection"}>
                        <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                          Crop Selection
                        </li>
                      </Link>

                      <Link to={"/weather-forecast"}>
                        <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                          Weather Forecast
                        </li>
                      </Link>

                      <Link to={"/organic-farming"}>
                        <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                          Learn Organic Farming
                        </li>
                      </Link>
                    </ul>
                  </div>
                  {/* Treatment */}
                  <div className="flex flex-col justify-center gap-4">
                    <h1 className="text-sm font-semibold border-b-[2px] border-black text-center">
                      Crop Treatment
                    </h1>
                    <ul className="flex flex-col justify-center gap-2">
                      <a
                        href={Flask_Backend_API}
                        className="decoration-none text-black"
                      >
                        <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                          Crop Disease Prediction
                        </li>
                      </a>

                      <Link to={"/crop-report-generator"}>
                        <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                          Crop Report Generator
                        </li>
                      </Link>

                      <a
                        href="https://www.google.com/maps/search/agronomist+near+me"
                        target="_blank"
                        rel="noreferrer"
                        className="decoration-none text-black"
                      >
                        <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                          Crop Health Checkup
                        </li>
                      </a>
                    </ul>
                  </div>
                  {/* Marketing */}
                  <div className="flex flex-col justify-center gap-4">
                    <h1 className="text-sm font-semibold border-b-[2px] border-black text-center">
                      Crop Marketing
                    </h1>
                    <ul className="flex flex-col justify-center gap-2">
                      <Link to={"/live-crop-price"}>
                        <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                          Live Crop Price
                        </li>
                      </Link>

                      <Link to={"/edukaan"}>
                        <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                          Kisan E-Dukaan
                        </li>
                      </Link>
                    </ul>
                  </div>
                  {/* Seva Kendra */}
                  <div className="flex flex-col justify-center gap-4">
                    <h1 className="text-sm font-semibold border-b-[2px] border-black text-center">
                      Kisan Seva Kendra
                    </h1>
                    <ul className="flex flex-col justify-center gap-2">
                      <Link to={"/schemes"}>
                        <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                          Kisan Welfare Schemes
                        </li>
                      </Link>

                      <Link to={"/complaints"}>
                        <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                          Complain to Pradhan
                        </li>
                      </Link>

                      <a
                        href="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/10/20/07/20241020074834-6ZC6PNEK.json"
                        className="decoration-none text-black"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                          Chatbot
                        </li>
                      </a>

                      <Link to={"/faqs"}>
                        <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                          FAQs
                        </li>
                      </Link>
                    </ul>
                  </div>
                  {/* Assets */}
                  <div className="flex flex-col justify-center gap-4">
                    <h1 className="text-sm font-semibold border-b-[2px] border-black text-center">
                      Assets
                    </h1>
                    <ul className="flex flex-col justify-center gap-2">
                      <a
                        href={BrochureHindi}
                        download="Kisan_Kranti_Brochure_Hindi.pdf"
                        className="decoration-none text-black"
                      >
                        <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                          Download Brochure (Hindi)
                        </li>
                      </a>
                      <a
                        href={BrochureEnglish}
                        download="Kisan_Kranti_Brochure_English.pdf"
                        className="decoration-none text-black"
                      >
                        <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                          Download Brochure (English)
                        </li>
                      </a>

                      {/* <a
                  href="https://youtu.be/QwbhA1V4NrI"
                  target="_blank"
                  rel="noreferrer"
                  className="decoration-none text-black"
                >
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    How to Use? (Hindi)
                  </li>
                </a>
                <a
                  href="https://youtu.be/LVCE_83GQlY"
                  target="_blank"
                  rel="noreferrer"
                  className="decoration-none text-black"
                >
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    How to Use? (English)
                  </li>
                </a> */}
                    </ul>
                  </div>
                  {/* About Kisan Kranti */}
                  <div className="flex flex-col justify-center gap-4">
                    <h1 className="text-sm font-semibold border-b-[2px] border-black text-center">
                      About Kisan Kranti
                    </h1>
                    <ul className="flex flex-col justify-center gap-2">
                      <Link to={"/brochure"}>
                        <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                          Brochure
                        </li>
                      </Link>

                      <Link to={"/ai-architecture"}>
                        <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                          AI Architecture
                        </li>
                      </Link>

                      <Link to={"/developers"}>
                        <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                          Developers
                        </li>
                      </Link>

                      <a
                        href="https://github.com/AmaanNaseh/kisan-kranti"
                        target="_blank"
                        rel="noreferrer"
                        className="decoration-none text-black"
                      >
                        <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                          Software
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-5">
                  <div className="w-[300px]">
                    <img src={PhoneIcon} alt="..." className="w-full" />
                  </div>
                  <div className="font-bold flex items-center justify-center gap-5 text-lg">
                    <p className="text-green-700">किसान Kranti: </p>
                    <div className="bg-green-500 rounded-full hover:scale-105 text-sm">
                      <InstallButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <InstallButton />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
