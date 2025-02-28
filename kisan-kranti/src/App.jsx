import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home.Page";
import SchemesPage from "./Pages/Schemes.Page";
import OrganicFarmingPage from "./Pages/OrganicFarming.Page";
import ComplaintsPage from "./Pages/Complaints.Page";
import PlantInventoryPage from "./Pages/PlantInventory.Page";
import FAQPage from "./Pages/FAQ.Page";
import BrochurePage from "./Pages/Brochure.Page";
import Developers from "./Pages/Developers.Page";
import AIArchitecturePage from "./Pages/AIArchitecture.Page";
import CropReportPage from "./Pages/CropReport.Page";
import CropPricePage from "./Pages/CropPrice.Page";
import WeatherForecastPage from "./Pages/WeatherForecast.Page";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brochure" element={<BrochurePage />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/ai-architecture" element={<AIArchitecturePage />} />
        <Route path="/crop-report-generator" element={<CropReportPage />} />
        <Route path="/live-crop-price" element={<CropPricePage />} />
        <Route path="/weather-forecast" element={<WeatherForecastPage />} />
        <Route path="/plant-inventory" element={<PlantInventoryPage />} />
        <Route path="/schemes" element={<SchemesPage />} />
        <Route path="/organic-farming" element={<OrganicFarmingPage />} />
        <Route path="/complaints" element={<ComplaintsPage />} />
        <Route path="/faqs" element={<FAQPage />} />
      </Routes>
    </>
  );
};

export default App;
