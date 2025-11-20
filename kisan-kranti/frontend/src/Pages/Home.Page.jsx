import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sprout, ArrowRight, Play, Leaf } from "lucide-react";

import { Helmet } from "react-helmet";

import { Flask_Backend_API } from "../Config/Config";

import heroPoster from "../Assets/Homepage/HeroPoster.jpg";
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
import CropReportIcon from "../Assets/Homepage/ReportIcon.png";
import CropFieldIcon from "../Assets/Homepage/CropField.png";
import BuyFertilizerIcon from "../Assets/Homepage/Buy_Fertilizer_Icon.png";

const HomePage = ({ darkMode }) => {
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
      <Helmet>
        <title>
          Kisan Kranti – AI Farming Solutions, Crop Insights & E-Dukaan
        </title>
        <meta
          name="description"
          content="Kisan Kranti empowers Indian farmers with AI-driven crop disease prediction, crop health reports, weather forecasts, live crop prices, e-dukaan marketplace, organic farming tutorials, and government schemes."
        />
        <link rel="canonical" href="https://www.kisankranti.tech/" />
      </Helmet>

      {/* Hero Section - Modern Design */}
      <div
        className={`w-full min-h-[700px] relative overflow-hidden ${
          darkMode ? "bg-emerald-900" : "bg-white"
        }`}
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Gradient Orbs */}
          <motion.div
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-green-100/40 via-emerald-50/30 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-green-50/50 via-lime-50/30 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-emerald-100/30 via-green-100/20 to-lime-100/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 12 + 4}px`,
                height: `${Math.random() * 12 + 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor:
                  i % 4 === 0
                    ? "#86efac"
                    : i % 4 === 1
                    ? "#4ade80"
                    : i % 4 === 2
                    ? "#22c55e"
                    : "#10b981",
                opacity: 0.15,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Animated Leaf Icons */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`leaf-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -60, 0],
                rotate: [0, 360],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: Math.random() * 8 + 10,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            >
              <Leaf className="w-8 h-8 text-green-500" />
            </motion.div>
          ))}

          {/* Animated Sprout Icons */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`sprout-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                scale: [0.8, 1.2, 0.8],
                opacity: [0.06, 0.12, 0.06],
              }}
              transition={{
                duration: Math.random() * 7 + 8,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            >
              <Sprout className="w-10 h-10 text-emerald-500" />
            </motion.div>
          ))}

          {/* Animated Grid Pattern */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at center, transparent 0%, transparent 50%, rgba(34, 197, 94, 0.03) 50%, rgba(34, 197, 94, 0.03) 100%)`,
              backgroundSize: "50px 50px",
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Animated Waves */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{
              background:
                "linear-gradient(to top, rgba(34, 197, 94, 0.05), transparent)",
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Pulsing Rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-green-300/20 rounded-full"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Floating Bubbles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`bubble-${i}`}
              className="absolute rounded-full border-2 border-green-200/30"
              style={{
                width: `${Math.random() * 60 + 30}px`,
                height: `${Math.random() * 60 + 30}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 30 - 15, 0],
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.25, 0.1],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Decorative Lines with Animation */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 border-l-2 border-t-2 border-green-200/30 rounded-tl-3xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 border-r-2 border-b-2 border-green-200/30 rounded-br-3xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        {/* Subtle Top Border */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[650px]">
            {/* Left Content */}
            <motion.div
              className="flex flex-col items-center justify-center space-y-10 text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 px-4 py-2 rounded-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Sprout className="w-4 h-4 text-green-600" />
                <span className="text-green-700">AI-Powered Agriculture</span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                className="space-y-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight">
                  किसान
                  <br />
                  <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent italic">
                    Kranti
                  </span>
                </h1>
                <p className="text-xl md:text-2xl leading-relaxed max-w-xl">
                  Revolutionizing Agriculture with AI-Powered Solutions for
                  Better Yields and Sustainable Farming
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.a
                  href="/crop-selection"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="https://youtu.be/Tqrw3qK2Pe4"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-gray-800 px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-green-300 hover:bg-green-50/50 transition-all duration-300 shadow-sm hover:shadow-md"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                    <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                  </div>
                  Watch Demo
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative flex items-center justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              {/* Image Container with Enhanced Styling */}
              <div className="relative w-full max-w-[600px] lg:max-w-[650px]">
                {/* Decorative Elements Around Image */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-3xl blur-2xl" />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-tr from-lime-400/20 to-green-400/20 rounded-3xl blur-2xl" />

                {/* Main Image Card */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl shadow-green-900/10 border border-green-100/50 bg-white p-3"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative rounded-2xl overflow-hidden">
                    {/* Replace with your actual image */}
                    <img
                      src={heroPoster}
                      alt="Poster"
                      className="w-full h-[450px] object-cover"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* What We Provide */}
      <h2 className="mt-20 hidden lg:block text-3xl font-bold text-center">
        We provide end-to-end solution for a crop in 4 stages
      </h2>
      <div className="hidden lg:flex items-center justify-center gap-60 relative">
        <div className="w-[450px] lg:w-[600px]">
          <img src={PhoneIcon} alt="Phone" className="w-full" />
        </div>

        {/* Arrows */}
        <div className="absolute left-[48%] flex flex-col items-center justify-center gap-[110px]">
          <div className="w-[300px] h-[4px] bg-green-600 relative">
            <div className="w-[20px] h-[20px] rounded-full bg-green-600 absolute left-0 top-[50%] translate-y-[-50%]"></div>
            <div className="w-[20px] h-[20px] rounded-full bg-green-600 absolute right-0 top-[50%] translate-y-[-50%]"></div>
          </div>

          <div className="w-[300px] h-[4px] bg-green-600 relative">
            <div className="w-[20px] h-[20px] rounded-full bg-green-600 absolute left-0 top-[50%] translate-y-[-50%]"></div>
            <div className="w-[20px] h-[20px] rounded-full bg-green-600 absolute right-0 top-[50%] translate-y-[-50%]"></div>
          </div>

          <div className="w-[300px] h-[4px] bg-green-600 relative">
            <div className="w-[20px] h-[20px] rounded-full bg-green-600 absolute left-0 top-[50%] translate-y-[-50%]"></div>
            <div className="w-[20px] h-[20px] rounded-full bg-green-600 absolute right-0 top-[50%] translate-y-[-50%]"></div>
          </div>

          <div className="w-[300px] h-[4px] bg-green-600 relative">
            <div className="w-[20px] h-[20px] rounded-full bg-green-600 absolute left-0 top-[50%] translate-y-[-50%]"></div>
            <div className="w-[20px] h-[20px] rounded-full bg-green-600 absolute right-0 top-[50%] translate-y-[-50%]"></div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 lg:gap-10 text-lg md:text-2xl lg:text-4xl font-bold text-white">
          <div className="group bg-green-600 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-w-[200px]">
            <h3 className="text-center text-base font-semibold text-white">
              Crop Selection
            </h3>
          </div>
          <div className="group bg-green-600 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-w-[200px]">
            <h3 className="text-center text-base font-semibold text-white">
              Crop Growth
            </h3>
          </div>
          <div className="group bg-green-600 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-w-[200px]">
            <h3 className="text-center text-base font-semibold text-white">
              Crop Treatment
            </h3>
          </div>
          <div className="group bg-green-600 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-w-[200px]">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
            Connect with Us
          </h2>

          <div className="flex items-center justify-center">
            {/* Contact Form */}
            <div className="bg-white w-[325px] md:w-[500px] p-8 rounded-2xl shadow-lg">
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
                  className="w-full bg-green-500 hover:bg-green-600 rounded text-white cursor-pointer px-4 py-2 font-bold"
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
