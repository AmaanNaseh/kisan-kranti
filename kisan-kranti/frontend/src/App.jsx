import React, { useEffect, useState } from "react";
import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Navbar & Footer
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// Shortcut Components
import ShortcutsMenu from "./Components/Shortcuts/ShortcutsMenu";

// Pages
import HomePage from "./Pages/Home.Page";
import SchemesPage from "./Pages/Schemes.Page";
import OrganicFarmingPage from "./Pages/OrganicFarming.Page";
import ComplaintsPage from "./Pages/Complaints.Page";
import CropSelectionPage from "./Pages/CropSelection.Page";
import FAQPage from "./Pages/FAQ.Page";
import BrochurePage from "./Pages/Brochure.Page";
import Developers from "./Pages/Developers.Page";
import AIArchitecturePage from "./Pages/AIArchitecture.Page";
import CropReportPage from "./Pages/CropReport.Page";
import LiveCropPricePage from "./Pages/LiveCropPrice.Page";
import WeatherForecastPage from "./Pages/WeatherForecast.Page";
import NotDeployedPage from "./Pages/NotDeployed.Page";
import CropfieldAnalysisPage from "./Pages/CropfieldAnalysis.Page";

// EDukaan
import EDukaanHomePage from "./Pages/EDukaan/Home.Page";
import EDukaanSignUpPage from "./Pages/EDukaan/SignUp.Page";
import EDukaanLoginPage from "./Pages/EDukaan/Login.Page";
import EDukaanAdminPage from "./Pages/EDukaan/Admin.Page";
import EDukaanCategoryPage from "./Pages/EDukaan/Category.Page";
import EDukaanCartPage from "./Pages/EDukaan/Cart.Page";
import EDukaanPurchaseSuccessPage from "./Pages/EDukaan/PurchaseSuccess.Page";
import EDukaanPurchaseCancelPage from "./Pages/EDukaan/PurchaseCancel.Page";

import { useUserStore } from "./Stores/useUserStore";
import { useCartStore } from "./Stores/useCartStore";

import EDukaanNavbar from "./Components/EDukaan/Navbar";
import EDukaanLoadingSpinner from "./Components/EDukaan/LoadingSpinner";
import EdukaanUserDashboardPage from "./Pages/EDukaan/UserDashboard.Page";

const App = () => {
  const [isShortcutsMenuVisible, setIsShortcutsMenuVisible] = useState(false);
  const [language, setLanguage] = useState("en");

  const location = useLocation();
  useEffect(() => {
    const isEdukaanRoute = location.pathname.startsWith("/edukaan");

    if (isEdukaanRoute) {
      document.body.classList.add("edukaan-theme");
    } else {
      document.body.classList.remove("edukaan-theme");
    }
  }, [location.pathname]);

  const { user, checkAuth, checkingAuth } = useUserStore();
  const { getCartItems } = useCartStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!user) return;

    getCartItems();
  }, [getCartItems, user]);

  if (checkingAuth && location.pathname.startsWith("/edukaan")) {
    return <EDukaanLoadingSpinner />;
  }

  return (
    <>
      {location.pathname.includes("edukaan") ? (
        <>
          <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,rgba(10,80,60,0.2)_45%,rgba(0,0,0,0.1)_100%)]" />
              </div>
            </div>

            <div className="relative z-50 pt-20">
              <EDukaanNavbar />
              <Routes>
                <Route path="/edukaan" element={<EDukaanHomePage />} />
                <Route
                  path="/edukaan/signup"
                  element={
                    checkingAuth ? (
                      <EDukaanLoadingSpinner />
                    ) : !user ? (
                      <EDukaanSignUpPage />
                    ) : (
                      <Navigate to="/edukaan" />
                    )
                  }
                />

                <Route
                  path="/edukaan/login"
                  element={
                    checkingAuth ? (
                      <EDukaanLoadingSpinner />
                    ) : !user ? (
                      <EDukaanLoginPage />
                    ) : (
                      <Navigate to="/edukaan" />
                    )
                  }
                />

                <Route
                  path="/edukaan/secret-dashboard"
                  element={
                    user?.role === "admin" ? (
                      <EDukaanAdminPage />
                    ) : (
                      <Navigate to="/edukaan/login" />
                    )
                  }
                />

                <Route
                  path="/edukaan/user-dashboard"
                  element={
                    user ? (
                      <EdukaanUserDashboardPage />
                    ) : (
                      <Navigate to="/edukaan/login" />
                    )
                  }
                />

                <Route
                  path="/edukaan/category/:category"
                  element={<EDukaanCategoryPage />}
                />
                <Route
                  path="/edukaan/cart"
                  element={
                    user ? (
                      <EDukaanCartPage />
                    ) : (
                      <Navigate to="/edukaan/login" />
                    )
                  }
                />

                <Route
                  path="/edukaan/purchase-success"
                  element={
                    user ? (
                      <EDukaanPurchaseSuccessPage />
                    ) : (
                      <Navigate to="/edukaan/login" />
                    )
                  }
                />
                <Route
                  path="/edukaan/purchase-cancel"
                  element={
                    user ? (
                      <EDukaanPurchaseCancelPage />
                    ) : (
                      <Navigate to="/edukaan/login" />
                    )
                  }
                />
              </Routes>
            </div>
            <Toaster />
          </div>
        </>
      ) : (
        <>
          <Navbar
            isShortcutsMenuVisible={isShortcutsMenuVisible}
            setIsShortcutsMenuVisible={setIsShortcutsMenuVisible}
            language={language}
            setLanguage={setLanguage}
          />

          <div className="min-h-[75vh]">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/brochure" element={<BrochurePage />} />
              <Route path="/developers" element={<Developers />} />
              <Route path="/ai-architecture" element={<AIArchitecturePage />} />
              <Route
                path="/crop-report-generator"
                element={<CropReportPage />}
              />
              <Route path="/live-crop-price" element={<LiveCropPricePage />} />
              <Route
                path="/weather-forecast"
                element={<WeatherForecastPage />}
              />
              <Route path="/crop-selection" element={<CropSelectionPage />} />
              <Route path="/schemes" element={<SchemesPage />} />
              <Route path="/organic-farming" element={<OrganicFarmingPage />} />
              <Route
                path="/cropfield-analysis"
                element={<CropfieldAnalysisPage />}
              />
              <Route path="/complaints" element={<ComplaintsPage />} />
              <Route path="/faqs" element={<FAQPage />} />
              <Route path="/not-deployed" element={<NotDeployedPage />} />
            </Routes>
          </div>

          <Footer />
        </>
      )}

      {/* Common in All Pages */}
      <ShortcutsMenu
        isShortcutsMenuVisible={isShortcutsMenuVisible}
        setIsShortcutsMenuVisible={setIsShortcutsMenuVisible}
        language={language}
      />
    </>
  );
};

export default App;
