import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

import { Flask_Backend_API } from "../Config/Config";

import heroPoster from "../Assets/Homepage/HeroPoster.png";
import SoilHealthIcon from "../Assets/Homepage/Soil_Health_Icon.png";
import ClimateIcon from "../Assets/Homepage/Climate_Icon.png";
import CheckupIcon from "../Assets/Homepage/Crop_Health_Icon.png";
import PlantInventoryIcon from "../Assets/Homepage/Plant_Inventory_Icon.png";
import GovtSchemesIcon from "../Assets/Homepage/Govt_Schemes_Icon.png";
import MarketIcon from "../Assets/Homepage/Market_Icon.png";
import OrganicFarmingIcon from "../Assets/Homepage/Organic_Farming_Icon.png";
import ComplaintIcon from "../Assets/Homepage/Complaint_Icon.png";
import ChatbotIcon from "../Assets/Homepage/Chatbot_Icon.png";
import FAQIcon from "../Assets/Homepage/FAQIcon.jpg";
import PhoneIcon from "../Assets/Homepage/Phone.png";
import HeaderBg from "../Assets/Homepage/header_background.png";
import BrochureIcon from "../Assets/Homepage/Disclaimer.png";
import DevelopersIcon from "../Assets/Homepage/Developers.png";
import AIArchitectureIcon from "../Assets/Homepage/AIArchitecture.png";
import VtLine from "../Assets/Homepage/VtLine.png";
import HzLine from "../Assets/Homepage/HzLine.png";
import SignupIcon from "../Assets/Homepage/SignupIcon.png";
import LoginIcon from "../Assets/Homepage/LoginIcon.png";
import ContactBg from "../Assets/Homepage/ContactBg.png";
import MsgIcon from "../Assets/Homepage/MsgIcon.png";
import CropReportIcon from "../Assets/Homepage/ReportIcon.png";
import BuyFertilizerIcon from "../Assets/Homepage/Buy_Fertilizer_Icon.png";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8cad7eaf-eddb-494f-9a6c-97cef3d3eeb7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-28 md:h-80 relative">
        <img src={heroPoster} alt="..." className="w-full h-full" />
        <h1 className="absolute text-center z-20 p-2 text-white mix-blend-multiply bg-green-700 text-3xl md:text-5xl lg:text-7xl font-bold top-[15%] left-[50%] translate-x-[-50%] translate-y-[-15%]">
          KISAN KRANTI
        </h1>
      </div>

      <div className="w-full relative mb-10">
        <img
          src={HeaderBg}
          className="cover z-[-1] w-full h-full"
          alt="header background"
        />

        <h1 className="absolute text-xl z-10 text-white md:text-3xl lg:text-7xl font-bold text-center left-[50%] translate-x-[-50%] top-[1%]">
          What we Provide?
        </h1>

        <div className="w-[200px] md:w-[300px] lg:w-[500px] absolute top-[54%] translate-y-[-54%] right-0 lg:left-[50%] lg:translate-x-[-50%]">
          <img src={PhoneIcon} alt="phone icon" />
        </div>

        <h1 className="absolute md:py-2 md:px-5 rounded-lg lg:max-w-[440px] my-1 p-1 bg-white text-black text-[8px] md:text-lg lg:text-2xl font-bold left-1 top-[20%] lg:left-[5%] lg:top-[25%]">
          Crop Disease Prediction
        </h1>
        <h1 className="absolute md:py-2 md:px-5 rounded-lg lg:max-w-[440px] my-1 p-1 bg-white text-black text-[8px] md:text-lg lg:text-2xl font-bold left-1 top-[40%] lg:left-[5%] lg:top-[50%]">
          Crop Health Report Generation
        </h1>
        <h1 className="absolute md:py-2 md:px-5 rounded-lg lg:max-w-[440px] my-1 p-1 bg-white text-black text-[8px] md:text-lg lg:text-2xl font-bold left-1 top-[60%] lg:left-[65%] lg:top-[25%]">
          E-Dukaan for Kisan Business
        </h1>
        <h1 className="absolute md:py-2 md:px-5 rounded-lg lg:max-w-[440px] my-1 p-1 bg-white text-black text-[8px] md:text-lg lg:text-2xl font-bold left-1 top-[80%] lg:left-[65%] lg:top-[50%]">
          24x7 Chatbot
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row my-10">
        <div className="lg:w-[25%] px-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="bg-[#163A1C] px-4 py-2 rounded-lg text-white font-bold text-center text-3xl">
              About Kisan Kranti
            </h1>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap lg:flex-col items-center justify-center gap-10 py-10">
            <Link to={"/brochure"}>
              <div className="flex items-center justify-evenly gap-2 min-w-[300px] w-full h-[100px] bg-[#F1EF82] hover:border-[2px] hover:border-black hover:animate-zoomAnimation">
                <div className="w-[80px] h-[80px]">
                  <img src={BrochureIcon} alt="..." className="w-full h-full" />
                </div>
                <h1 className=" text-black font-bold text-center">Brochure</h1>
              </div>
            </Link>

            <Link to={"/developers"}>
              <div className="flex items-center justify-evenly gap-2 min-w-[300px] w-full h-[100px] bg-[#EAB5C9] hover:border-[2px] hover:border-black hover:animate-zoomAnimation">
                <div className="w-[80px] h-[80px]">
                  <img
                    src={DevelopersIcon}
                    alt="..."
                    className="w-full h-full"
                  />
                </div>
                <h1 className=" text-black font-bold text-center">
                  Developers
                </h1>
              </div>
            </Link>

            <Link to={"/ai-architecture"}>
              <div className="flex items-center justify-evenly gap-2 min-w-[300px] w-full h-[100px] bg-[#A5E6F2] hover:border-[2px] hover:border-black hover:animate-zoomAnimation">
                <div className="w-[80px] h-[80px]">
                  <img
                    src={AIArchitectureIcon}
                    alt="..."
                    className="w-full h-full"
                  />
                </div>
                <h1 className=" text-black font-bold text-center">
                  AI Architecture
                </h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:w-[70%] flex flex-col items-center justify-center relative">
          <div className="flex flex-col items-center justify-center">
            <h1 className="bg-[#163A1C] px-4 py-2 rounded-lg text-white font-bold text-center text-3xl mb-4 lg:text-4xl">
              Farmer's Corner
            </h1>
          </div>
          <img
            src={VtLine}
            className="w-[2px] h-[95%] absolute left-0 hidden lg:block"
            alt="line"
          />

          <img
            src={HzLine}
            className="w-[90%] h-[2px] absolute bottom-0 hidden lg:block"
            alt="line"
          />

          <div className="hidden md:flex items-center justify-center lg:ml-[5%] my-10 gap-1">
            {/* first div */}
            <div className="flex flex-col items-center gap-1">
              <Link to={"/weather-forecast"}>
                <div className="flex flex-col items-center justify-center gap-2 w-[150px] h-[125px] lg:w-[200px] lg:h-[175px] bg-[#A5E6F2] hover:border-[2px] hover:border-black hover:animate-zoomAnimation">
                  <div className="w-[75px] h-[75px] lg:w-[100px] lg:h-[100px] px-auto">
                    <img
                      src={ClimateIcon}
                      alt="..."
                      className="w-full h-full"
                    />
                  </div>
                  <h1 className=" text-black font-bold text-center">
                    Weather Forecast
                  </h1>
                </div>
              </Link>

              <Link to={"/live-crop-price"}>
                <div className="flex flex-col items-center justify-center gap-2 w-[150px] h-[175px] lg:w-[200px] lg:h-[225px] hover:border-[2px] bg-[#EEF199] hover:border-black hover:animate-zoomAnimation">
                  <div className="w-[75px] h-[75px] lg:w-[100px] lg:h-[100px]">
                    <img
                      src={BuyFertilizerIcon}
                      alt="..."
                      className="w-full h-full"
                    />
                  </div>
                  <h1 className=" text-black font-bold text-center">
                    Live Crop Price
                  </h1>
                </div>
              </Link>
            </div>
            {/* Second div */}
            <div className="flex flex-col items-center gap-1">
              <a
                href={Flask_Backend_API}
                className="decoration-none text-black"
              >
                <div className="flex flex-col items-center justify-center gap-2 w-[350px] h-[150px] lg:w-[400px] lg:h-[200px] bg-[#C6FFD2] hover:border-[2px] hover:border-black hover:cursor-pointer hover:animate-zoomAnimation">
                  <div className="w-[75px] h-[75px] lg:w-[100px] lg:h-[100px] px-auto">
                    <img
                      src={SoilHealthIcon}
                      alt="..."
                      className="w-full h-full"
                    />
                  </div>

                  <h1 className=" text-black font-bold text-center ">
                    Crop Disease Prediction
                  </h1>
                </div>
              </a>

              <Link to={"/crop-report-generator"}>
                <div className="flex flex-col items-center justify-center gap-2 w-[350px] h-[150px] lg:w-[400px] lg:h-[200px] bg-[#B9DEA6] hover:border-[2px] hover:border-black hover:cursor-pointer hover:animate-zoomAnimation">
                  <div className="w-[75px] h-[75px] lg:w-[100px] lg:h-[100px] px-auto">
                    <img
                      src={CropReportIcon}
                      alt="..."
                      className="w-full h-full"
                    />
                  </div>

                  <h1 className=" text-black font-bold text-center ">
                    Crop Report Generator
                  </h1>
                </div>
              </Link>
            </div>
            {/* Third div */}
            <div className="flex flex-col items-center gap-1">
              <Link to={"/plant-inventory"}>
                <div className="flex flex-col items-center justify-center gap-2 w-[150px] h-[175px] lg:w-[200px] lg:h-[225px] bg-[#389347] hover:border-[2px] hover:border-black hover:animate-zoomAnimation">
                  <div className="w-[75px] h-[75px] lg:w-[100px] lg:h-[100px]">
                    <img
                      src={PlantInventoryIcon}
                      alt="..."
                      className="w-full h-full"
                    />
                  </div>
                  <h1 className=" text-black font-bold text-center">
                    Plant Inventory
                  </h1>
                </div>
              </Link>
              <a
                href="https://www.google.com/maps/search/agronomist+near+me"
                target="_blank"
                rel="noreferrer"
                className="decoration-none text-black"
              >
                <div className="flex flex-col items-center justify-center gap-2 w-[150px] h-[125px] lg:w-[200px] lg:h-[175px] bg-[#F59D9D] hover:border-[2px] hover:border-black hover:animate-zoomAnimation">
                  <div className="w-[75px] h-[75px] lg:w-[100px] lg:h-[100px]">
                    <img
                      src={CheckupIcon}
                      alt="..."
                      className="w-full h-full"
                    />
                  </div>
                  <h1 className=" text-black font-bold text-center">
                    Crop Health Checkup
                  </h1>
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-16 m-8 p-8 md:hidden">
            <a href={Flask_Backend_API} className="decoration-none text-black">
              <div className="flex flex-col items-center justify-center gap-2 w-[200px] h-[200px] bg-[#C6FFD2] hover:border-[2px] hover:border-black hover:cursor-pointer hover:animate-zoomAnimation">
                <div className="w-[100px] h-[100px] px-auto">
                  <img
                    src={SoilHealthIcon}
                    alt="..."
                    className="w-full h-full"
                  />
                </div>

                <h1 className=" text-black font-bold text-center ">
                  Crop Disease Prediction
                </h1>
              </div>
            </a>
            <Link to={"/weather-forecast"}>
              <div className="flex flex-col items-center justify-center gap-2 w-[200px] h-[200px] bg-[#A5E6F2] hover:border-[2px] hover:border-black hover:animate-zoomAnimation">
                <div className="w-[100px] h-[100px] px-auto">
                  <img src={ClimateIcon} alt="..." className="w-full h-full" />
                </div>
                <h1 className=" text-black font-bold text-center">
                  Weather Forecast
                </h1>
              </div>
            </Link>
            <Link to={"/plant-inventory"}>
              <div className="flex flex-col items-center justify-center gap-2 w-[200px] h-[200px] bg-[#B9DEA6] hover:border-[2px] hover:border-black hover:animate-zoomAnimation">
                <div className="w-[100px] h-[100px]">
                  <img
                    src={PlantInventoryIcon}
                    alt="..."
                    className="w-full h-full"
                  />
                </div>
                <h1 className=" text-black font-bold text-center">
                  Plant Inventory
                </h1>
              </div>
            </Link>
            <Link to={"/organic-farming"}>
              <div className="flex flex-col items-center justify-center gap-2 w-[200px] h-[200px] hover:border-[2px] bg-[#EEF199] hover:border-black hover:animate-zoomAnimation">
                <div className="w-[100px] h-[100px]">
                  <img
                    src={OrganicFarmingIcon}
                    alt="..."
                    className="w-full h-full"
                  />
                </div>
                <h1 className=" text-black font-bold text-center">
                  Learn Organic Farming
                </h1>
              </div>
            </Link>
            <a
              href="https://www.google.com/maps/search/agronomist+near+me"
              className="decoration-none text-black"
            >
              <div className="flex flex-col items-center justify-center gap-2 w-[200px] h-[200px] bg-[#389347] hover:border-[2px] hover:border-black hover:animate-zoomAnimation">
                <div className="w-[100px] h-[100px]">
                  <img src={CheckupIcon} alt="..." className="w-full h-full" />
                </div>
                <h1 className=" text-black font-bold text-center">
                  Crop Health Checkup
                </h1>
              </div>
            </a>

            <Link to={"/faqs"}>
              <div className="flex flex-col items-center justify-center gap-2 w-[200px] h-[200px] bg-[#F59D9D] hover:border-[2px] hover:border-black hover:animate-zoomAnimation">
                <div className="w-[100px] h-[100px]">
                  <img src={FAQIcon} alt="..." className="w-full h-full" />
                </div>
                <h1 className=" text-black font-bold text-center">FAQs</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="my-10 md:my-20">
        <div className="flex flex-col items-center justify-center my-10">
          <h1 className="bg-[#163A1C] px-4 py-2 rounded-lg text-white font-bold text-center text-3xl mb-4 lg:text-5xl">
            Kisan Seva Kendra
          </h1>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-8 md:gap-12 md:px-12">
          <Link to={"/schemes"}>
            <div className="flex flex-col items-center justify-center gap-2 w-[200px] h-[200px] hover:border-[2px] hover:border-black hover:animate-zoomAnimation">
              <div className="w-[100px] h-[100px]">
                <img
                  src={GovtSchemesIcon}
                  alt="..."
                  className="w-full h-full"
                />
              </div>
              <h1 className=" text-black font-bold text-center">
                Kisan Welfare Schemes
              </h1>
            </div>
          </Link>

          <Link to={"/complaints"}>
            <div className="flex flex-col items-center justify-center gap-2 w-[200px] h-[200px] hover:border-[2px] hover:border-black hover:animate-zoomAnimation">
              <div className="w-[100px] h-[100px]">
                <img src={ComplaintIcon} alt="..." className="w-full h-full" />
              </div>
              <h1 className=" text-black font-bold text-center">
                Complain to Pradhan
              </h1>
            </div>
          </Link>

          <Link to={"/organic-farming"}>
            <div className="flex flex-col items-center justify-center gap-2 w-[200px] h-[200px] hover:border-[2px] hover:border-black hover:animate-zoomAnimation">
              <div className="w-[100px] h-[100px]">
                <img
                  src={OrganicFarmingIcon}
                  alt="..."
                  className="w-full h-full"
                />
              </div>
              <h1 className=" text-black font-bold text-center">
                Learn Organic Farming
              </h1>
            </div>
          </Link>

          <a
            href="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/10/20/07/20241020074834-6ZC6PNEK.json"
            className="decoration-none text-black"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex flex-col items-center justify-center gap-2 w-[200px] h-[200px] hover:border-[2px] hover:border-black hover:animate-zoomAnimation">
              <div className="w-[100px] h-[100px]">
                <img src={ChatbotIcon} alt="..." className="w-full h-full" />
              </div>
              <h1 className=" text-black font-bold text-center">
                Kisan-Mate (Chatbot)
              </h1>
            </div>
          </a>

          <Link to={"/faqs"}>
            <div className="flex flex-col items-center justify-center gap-2 w-[200px] h-[200px] hover:border-[2px] hover:border-black hover:animate-zoomAnimation">
              <div className="w-[100px] h-[100px]">
                <img src={FAQIcon} alt="..." className="w-full h-full" />
              </div>
              <h1 className=" text-black font-bold text-center">FAQs</h1>
            </div>
          </Link>
        </div>
      </div>

      <div className="my-10 md:my-20 lg:my-32">
        <div className="flex flex-col items-center justify-center">
          <h1 className="bg-[#163A1C] mb-8 px-4 py-2 rounded-lg text-white font-bold text-center text-3xl lg:text-5xl">
            Kisan E-Dukaan
          </h1>
        </div>
        <div className="flex flex-col items-center gap-10 lg:justify-evenly lg:flex-row my-10">
          <a
            href="https://kisan-kranti-e-dukaan.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="decoration-none text-black"
          >
            <div className="flex items-center justify-evenly gap-2 min-w-[300px] h-[100px] bg-[#F1EF82] hover:border-[2px] hover:border-black hover:animate-zoomAnimation">
              <div className="w-[80px] h-[80px]">
                <img src={SignupIcon} alt="..." className="w-full h-full" />
              </div>

              <h1 className=" text-black font-bold text-center">Signup</h1>
            </div>
          </a>
          <a
            href="https://kisan-kranti-e-dukaan.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="decoration-none text-black"
          >
            <div className="flex items-center justify-evenly gap-2 min-w-[300px] h-[100px] bg-[#F1EF82] hover:border-[2px] hover:border-black hover:animate-zoomAnimation">
              <div className="w-[80px] h-[80px]">
                <img src={LoginIcon} alt="..." className="w-full h-full" />
              </div>

              <h1 className=" text-black font-bold text-center">Login</h1>
            </div>
          </a>
          <a
            href="https://kisan-kranti-e-dukaan.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="decoration-none text-black"
          >
            <div className="flex items-center justify-evenly gap-2 min-w-[300px] h-[100px] bg-[#F1EF82] hover:border-[2px] hover:border-black hover:animate-zoomAnimation">
              <div className="w-[80px] h-[80px]">
                <img src={MarketIcon} alt="..." className="w-full h-full" />
              </div>

              <h1 className=" text-black font-bold text-center">E-Dukaan</h1>
            </div>
          </a>
        </div>
      </div>

      <div className="my-10 mt-12">
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="bg-[#163A1C] px-4 py-2 rounded-lg text-white font-bold text-center text-3xl lg:text-5xl">
            Connect with Us
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-evenly md:gap-16 my-12">
          <div className="md:basis-[32%]">
            <div className="flex flex-wrap items-center justify-evenly my-7">
              <h1 className="bg-[#163A1C] px-4 py-2 rounded-lg text-white font-bold text-center text-3xl">
                Send us a message
              </h1>
              <img
                src={MsgIcon}
                className="w-[50px] md:w-[75px]"
                alt="message icon"
              />
            </div>
            <p className="text-justify my-2">
              We warmly invite you to connect with us through our contact form
              or the details provided below. Your insights, inquiries, and
              suggestions are deeply valued, inspiring us to continually enhance
              our services and better serve the needs of our vibrant community.
            </p>
          </div>
          <div className="relative">
            <div className="mx-auto my-2 w-[350px] md:w-[400px]">
              <img
                src={ContactBg}
                className="w-full h-full bg-cover opacity-95"
                alt="contact background"
              />
            </div>
            <div className="absolute left-[50%] translate-x-[-50%] top-[45%] translate-y-[-50%] flex flex-col items-center justify-center my-10">
              <form
                onSubmit={onSubmit}
                className="flex flex-col items-start justify-center gap-4"
              >
                <label
                  className="text-xl font-semibold text-white"
                  htmlFor="name"
                >
                  Enter Name:
                </label>
                <input
                  className="mx-auto px-4 py-2"
                  type="text"
                  name="name"
                  required
                />
                <label
                  className="text-xl font-semibold text-white"
                  htmlFor="email"
                >
                  Enter Email:
                </label>
                <input
                  className="mx-auto px-4 py-2"
                  type="email"
                  name="email"
                  required
                />
                <label
                  className="text-xl font-semibold text-white"
                  htmlFor="message"
                >
                  Enter your message:
                </label>
                <textarea
                  className="resize-none mx-auto px-6 py-2"
                  name="message"
                  rows={5}
                  required
                ></textarea>

                <button
                  className="mx-auto bg-green-500 hover:bg-green-400 hover:scale-[1.05] border-none outline-none px-4 py-2 text-white font-semibold rounded-md"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
              <span className="text-lg font-semibold">{result}</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
