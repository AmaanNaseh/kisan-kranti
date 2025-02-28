import React, { useState } from "react";
import { E_Dukaan_Frontend_API, Flask_Backend_API } from "../../Config/Config";

import BrochureHindi from "../../Assets/Brochure/Brochure_Hindi.pdf";
import BrochureEnglish from "../../Assets/Brochure/Brochure_English.pdf";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-green-700 sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3">
          <Link to={"/"}>
            <h1 className="text-3xl text-center font-bold text-white hover:scale-[1.15]">
              किसान Kranti
            </h1>
          </Link>

          <div id="google_translate_element"></div>
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
            } lg:hidden absolute top-[124px] left-0 w-full bg-green-700 text-white p-4 space-y-4`}
          >
            <Link to={"/"}>
              <p className="block py-2 px-4 hover:bg-green-500">Home</p>
            </Link>

            <div className="group">
              <p className="block py-2 px-4 hover:bg-green-500">Features</p>
              <ul className="bg-white text-black shadow-lg mt-2 rounded-lg p-2 space-y-1">
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
                <Link to={"/live-crop-price"}>
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Live Crop Price
                  </li>
                </Link>
                <Link to={"/weather-forecast"}>
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Weather Forecast
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
                <Link to={"/plant-inventory"}>
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Plant Inventory
                  </li>
                </Link>
                <Link to={"/organic-farming"}>
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Learn Organic Farming
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
                <a
                  href={E_Dukaan_Frontend_API}
                  target="_blank"
                  rel="noreferrer"
                  className="decoration-none text-black"
                >
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Kisan E-Dukaan
                  </li>
                </a>
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

            <div className="group">
              <p className="block py-2 px-4 hover:bg-green-500">About</p>
              <ul className="bg-white text-black shadow-lg mt-2 rounded-lg p-2 space-y-1">
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
            </div>
          </div>
          {/* Large Screens */}
          <ul className="hidden lg:flex flex-row justify-center items-center gap-4 text-3xl font-thin list-none">
            <li>
              <Link to={"/"}>
                <p className="text-white border border-gray-400 rounded-full py-2 px-4 hover:bg-green-500">
                  Home
                </p>
              </Link>
            </li>
            <li className="relative group">
              <p className="text-white border border-gray-400 rounded-full py-2 px-4 hover:bg-green-500 cursor-pointer">
                Features
              </p>
              {/* Dropdown Menu on Hover */}
              <ul className="absolute left-0 top-full bg-white shadow-lg text-black w-64 rounded-lg p-2 space-y-1 hidden group-hover:block">
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
                <Link to={"/live-crop-price"}>
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Live Crop Price
                  </li>
                </Link>
                <Link to={"/weather-forecast"}>
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Weather Forecast
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
                <Link to={"/plant-inventory"}>
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Plant Inventory
                  </li>
                </Link>
                <Link to={"/organic-farming"}>
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Learn Organic Farming
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
                <a
                  href={E_Dukaan_Frontend_API}
                  target="_blank"
                  rel="noreferrer"
                  className="decoration-none text-black"
                >
                  <li className="hover:bg-green-500 px-3 py-1 rounded-md text-sm">
                    Kisan E-Dukaan
                  </li>
                </a>
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
            </li>
            <li className="relative group">
              <p className="text-white border border-gray-400 rounded-full py-2 px-4 hover:bg-green-500 cursor-pointer">
                About
              </p>
              <ul className="absolute left-0 top-full bg-white shadow-lg text-black w-52 rounded-lg p-2 space-y-1 hidden group-hover:block">
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
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
