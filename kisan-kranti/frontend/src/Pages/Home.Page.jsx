import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Flask_Backend_API } from "../Config/Config";

import heroPoster from "../Assets/Homepage/KisanBg1.jpg";
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
import BrochureIcon from "../Assets/Homepage/Disclaimer.png";
import DevelopersIcon from "../Assets/Homepage/Developers.png";
import AIArchitectureIcon from "../Assets/Homepage/AIArchitecture.png";
import SignupIcon from "../Assets/Homepage/SignupIcon.png";
import LoginIcon from "../Assets/Homepage/LoginIcon.png";
import MsgIcon from "../Assets/Homepage/MsgIcon.png";
import CropReportIcon from "../Assets/Homepage/ReportIcon.png";
import CropFieldIcon from "../Assets/Homepage/CropField.png";
import BuyFertilizerIcon from "../Assets/Homepage/Buy_Fertilizer_Icon.png";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    // naseh.amaan@gmail.com
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
      {/* Hero Section - Split Screen Design */}
      <div className="w-full min-h-[650px] lg:min-h-[750px] bg-gradient-to-br from-[#0d5c2a] via-[#1B7D3A] to-[#2a9d4e] relative overflow-hidden">
        {/* Animated Bubble Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-float"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${Math.random() * 6 + 8}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[600px]">
            {/* Left Content */}
            <motion.div
              className="flex flex-col justify-center space-y-8 lg:space-y-10 text-left z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Main Heading */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-white text-center leading-none tracking-tight">
                  किसान
                  <br />
                  <span className="italic font-light text-white/95">
                    Kranti
                  </span>
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-white text-center leading-relaxed max-w-2xl font-normal">
                  Revolutionizing Agriculture with AI-Powered Solutions for
                  Better Yields and Sustainable Farming
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col items-center justify-center md:flex-row gap-5 lg:justify-start lg:items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/crop-selection"
                    className="inline-flex items-center justify-center gap-3 bg-white text-[#1B7D3A] px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl group"
                  >
                    Get Started
                    <svg
                      className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </motion.div>
                <a
                  href="https://youtu.be/Tqrw3qK2Pe4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.button
                    className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/15 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                    Watch Demo
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative flex items-center justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <motion.div
                className="relative w-full max-w-[700px] lg:max-w-[800px] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={heroPoster}
                  alt="Indian Farmer with Ox"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* What We Provide */}

      <h2 className="mt-20 hidden lg:block text-3xl font-bold text-[#163A1C] text-center">
        We provide end-to-end solution for a crop in 4 stages
      </h2>
      <div className="hidden lg:flex items-center justify-center gap-60 relative">
        <div className="w-[450px] lg:w-[600px]">
          <img src={PhoneIcon} alt="Phone" className="w-full" />
        </div>

        {/* Arrows */}
        <div className="absolute left-[48%] flex flex-col items-center justify-center gap-[110px]">
          <div className="w-[300px] h-[4px] bg-[#389347] relative">
            <div className="w-[20px] h-[20px] rounded-full bg-[#389347] absolute left-0 top-[50%] translate-y-[-50%]"></div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#389347] absolute right-0 top-[50%] translate-y-[-50%]"></div>
          </div>

          <div className="w-[300px] h-[4px] bg-[#389347] relative">
            <div className="w-[20px] h-[20px] rounded-full bg-[#389347] absolute left-0 top-[50%] translate-y-[-50%]"></div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#389347] absolute right-0 top-[50%] translate-y-[-50%]"></div>
          </div>

          <div className="w-[300px] h-[4px] bg-[#389347] relative">
            <div className="w-[20px] h-[20px] rounded-full bg-[#389347] absolute left-0 top-[50%] translate-y-[-50%]"></div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#389347] absolute right-0 top-[50%] translate-y-[-50%]"></div>
          </div>

          <div className="w-[300px] h-[4px] bg-[#389347] relative">
            <div className="w-[20px] h-[20px] rounded-full bg-[#389347] absolute left-0 top-[50%] translate-y-[-50%]"></div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#389347] absolute right-0 top-[50%] translate-y-[-50%]"></div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 lg:gap-10 text-lg md:text-2xl lg:text-4xl font-bold text-white">
          <div className="group bg-[#389347] p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-w-[200px]">
            <h3 className="text-center text-base font-semibold text-white">
              Crop Selection
            </h3>
          </div>
          <div className="group bg-[#389347] p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-w-[200px]">
            <h3 className="text-center text-base font-semibold text-white">
              Crop Growth
            </h3>
          </div>
          <div className="group bg-[#389347] p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-w-[200px]">
            <h3 className="text-center text-base font-semibold text-white">
              Crop Treatment
            </h3>
          </div>
          <div className="group bg-[#389347] p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-w-[200px]">
            <h3 className="text-center text-base font-semibold text-white">
              Crop Marketing
            </h3>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* About Section - Sidebar */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#163A1C] mb-6 text-center lg:text-left">
              About Us
            </h2>
            <div className="flex flex-col gap-4">
              <Link to={"/brochure"}>
                <div className="group flex items-center gap-4 p-4 bg-[#F8ED8C] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 flex-shrink-0">
                    <img
                      src={BrochureIcon}
                      alt="Brochure"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-gray-800">
                    Brochure
                  </h3>
                </div>
              </Link>

              <Link to={"/developers"}>
                <div className="group flex items-center gap-4 p-4 bg-[#EAB5C9] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 flex-shrink-0">
                    <img
                      src={DevelopersIcon}
                      alt="Developers"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-gray-800">
                    Developers
                  </h3>
                </div>
              </Link>

              <Link to={"/ai-architecture"}>
                <div className="group flex items-center gap-4 p-4 bg-[#A5E6F2] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 flex-shrink-0">
                    <img
                      src={AIArchitectureIcon}
                      alt="AI Architecture"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-gray-800">
                    AI Architecture
                  </h3>
                </div>
              </Link>
            </div>
          </div>

          {/* Farmer's Corner - Main Content */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#163A1C] mb-6 text-center lg:text-left">
              Farmer's Corner
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to={"/crop-selection"}>
                <div className="group bg-[#389347] p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 mx-auto mb-4">
                    <img
                      src={PlantInventoryIcon}
                      alt="Crop Selection"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-center text-base font-semibold text-white">
                    Crop Selection
                  </h3>
                </div>
              </Link>

              <Link to={"/weather-forecast"}>
                <div className="group bg-[#A5E6F2] p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 mx-auto mb-4">
                    <img
                      src={ClimateIcon}
                      alt="Weather Forecast"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-center text-base font-semibold text-gray-800">
                    Weather Forecast
                  </h3>
                </div>
              </Link>

              <Link to={"/cropfield-analysis"}>
                <div className="group bg-[#E5C18F] p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 mx-auto mb-4">
                    <img
                      src={CropFieldIcon}
                      alt="Crop Field Analysis"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-center text-base font-semibold text-gray-800">
                    Crop Field Analysis
                  </h3>
                </div>
              </Link>

              <a href={Flask_Backend_API} className="block">
                <div className="group bg-[#C6FFD2] p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 mx-auto mb-4">
                    <img
                      src={SoilHealthIcon}
                      alt="Crop Disease Prediction"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-center text-base font-semibold text-gray-800">
                    Crop Disease Prediction
                  </h3>
                </div>
              </a>

              <Link to={"/crop-report-generator"}>
                <div className="group bg-[#B9DEA6] p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 mx-auto mb-4">
                    <img
                      src={CropReportIcon}
                      alt="Crop Report Generator"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-center text-base font-semibold text-gray-800">
                    Crop Report Generator
                  </h3>
                </div>
              </Link>

              <a
                href="https://www.google.com/maps/search/agronomist+near+me"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div className="group bg-[#F59D9D] p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 mx-auto mb-4">
                    <img
                      src={CheckupIcon}
                      alt="Crop Health Checkup"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-center text-base font-semibold text-gray-800">
                    Crop Health Checkup
                  </h3>
                </div>
              </a>

              <Link to={"/live-crop-price"}>
                <div className="group bg-[#EEF199] p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 mx-auto mb-4">
                    <img
                      src={BuyFertilizerIcon}
                      alt="Live Crop Price"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-center text-base font-semibold text-gray-800">
                    Live Crop Price
                  </h3>
                </div>
              </Link>

              <Link to={"/edukaan"}>
                <div className="group bg-[#ffd700] p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 mx-auto mb-4">
                    <img
                      src={MarketIcon}
                      alt="E-Dukaan"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-center text-base font-semibold text-gray-800">
                    E-Dukaan
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Kisan Seva Kendra Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#163A1C] mb-12">
            Kisan Seva Kendra
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <Link to={"/schemes"}>
              <div className="group bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-200">
                <div className="w-20 h-20 mx-auto mb-4">
                  <img
                    src={GovtSchemesIcon}
                    alt="Kisan Welfare Schemes"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-center text-sm font-semibold text-gray-800">
                  Kisan Welfare Schemes
                </h3>
              </div>
            </Link>

            <Link to={"/complaints"}>
              <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-orange-200">
                <div className="w-20 h-20 mx-auto mb-4">
                  <img
                    src={ComplaintIcon}
                    alt="Complain to Pradhan"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-center text-sm font-semibold text-gray-800">
                  Complain to Pradhan
                </h3>
              </div>
            </Link>

            <Link to={"/organic-farming"}>
              <div className="group bg-gradient-to-br from-lime-50 to-lime-100 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-lime-200">
                <div className="w-20 h-20 mx-auto mb-4">
                  <img
                    src={OrganicFarmingIcon}
                    alt="Learn Organic Farming"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-center text-sm font-semibold text-gray-800">
                  Learn Organic Farming
                </h3>
              </div>
            </Link>

            <a
              href="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/10/20/07/20241020074834-6ZC6PNEK.json"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-200">
                <div className="w-20 h-20 mx-auto mb-4">
                  <img
                    src={ChatbotIcon}
                    alt="Kisan-Mate Chatbot"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-center text-sm font-semibold text-gray-800">
                  Kisan-Mate (Chatbot)
                </h3>
              </div>
            </a>

            <Link to={"/faqs"}>
              <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-purple-200">
                <div className="w-20 h-20 mx-auto mb-4">
                  <img
                    src={FAQIcon}
                    alt="FAQs"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-center text-sm font-semibold text-gray-800">
                  FAQs
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Kisan E-Dukaan Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#163A1C] mb-12">
          Kisan E-Dukaan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <Link to={"/edukaan/signup"}>
            <div className="group bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-300">
              <div className="w-24 h-24 mx-auto mb-4">
                <img
                  src={SignupIcon}
                  alt="Signup"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-center text-xl font-bold text-gray-800">
                Signup
              </h3>
              <p className="text-center text-sm text-gray-600 mt-2">
                Create your account
              </p>
            </div>
          </Link>

          <Link to={"/edukaan/login"}>
            <div className="group bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-300">
              <div className="w-24 h-24 mx-auto mb-4">
                <img
                  src={LoginIcon}
                  alt="Login"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-center text-xl font-bold text-gray-800">
                Login
              </h3>
              <p className="text-center text-sm text-gray-600 mt-2">
                Access your account
              </p>
            </div>
          </Link>

          <Link to={"/edukaan"}>
            <div className="group bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-yellow-300">
              <div className="w-24 h-24 mx-auto mb-4">
                <img
                  src={MarketIcon}
                  alt="E-Dukaan"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-center text-xl font-bold text-gray-800">
                E-Dukaan
              </h3>
              <p className="text-center text-sm text-gray-600 mt-2">
                Browse marketplace
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Connect with Us Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#163A1C] mb-12">
            Connect with Us
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Info Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <img src={MsgIcon} className="w-16 h-16" alt="message icon" />
                <h3 className="text-2xl md:text-3xl font-bold text-[#163A1C]">
                  Send us a message
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                We warmly invite you to connect with us through our contact form
                or the details provided below. Your insights, inquiries, and
                suggestions are deeply valued, inspiring us to continually
                enhance our services and better serve the needs of our vibrant
                community.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-100">
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label
                    className="block text-base font-semibold text-gray-700 mb-2"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-base font-semibold text-gray-700 mb-2"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <input
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-base font-semibold text-gray-700 mb-2"
                    htmlFor="message"
                  >
                    Your Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors resize-none"
                    name="message"
                    rows={5}
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>

                <button
                  className="w-full bg-[#163A1C] hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                  type="submit"
                >
                  Send Message
                </button>

                {result && (
                  <p className="text-center text-base font-semibold text-green-600 mt-4">
                    {result}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
