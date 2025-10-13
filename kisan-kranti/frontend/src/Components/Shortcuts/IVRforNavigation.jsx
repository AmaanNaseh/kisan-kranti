import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const IVRforNavigation = () => {
  const [isIVRVisible, setIsIVRVisible] = useState(false);
  const [count, setCount] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  // Page Description
  const speakAboutPage = (selectedLanguage) => {
    var currentPage = location.pathname;
    var text = "Welcome";

    if (currentPage === "/") {
      if (selectedLanguage === "en") {
        text = "In this page, you can explore all the features provided by us";
      } else if (selectedLanguage === "hi") {
        text =
          "इस पृष्ठ में, आप हमारे द्वारा प्रदान की गई सभी सुविधाओं का अन्वेषण कर सकते हैं";
      }
    } else if (currentPage === "/brochure") {
      if (selectedLanguage === "en") {
        text =
          "In this page, you can download our brochure to learn more about our website";
      } else if (selectedLanguage === "hi") {
        text =
          "इस पृष्ठ में, आप हमारी ब्रोशर डाउनलोड कर सकते हैं ताकि आप हमारी वेबसाइट के बारे में और अधिक जान सकें";
      }
    } else if (currentPage === "/developers") {
      if (selectedLanguage === "en") {
        text = "In this page, you can view the profile of developers";
      } else if (selectedLanguage === "hi") {
        text = "इस पृष्ठ में, आप डेवलपर्स का प्रोफ़ाइल देख सकते हैं";
      }
    } else if (currentPage === "/ai-architecture") {
      if (selectedLanguage === "en") {
        text = "In this page, you can view our ML models architecture";
      } else if (selectedLanguage === "hi") {
        text = "इस पृष्ठ में, आप हमारे एमएल मॉडल्स का आर्किटेक्चर देख सकते हैं";
      }
    } else if (currentPage === "/crop-report-generator") {
      if (selectedLanguage === "en") {
        text = "In this page, you can generate crop report";
      } else if (selectedLanguage === "hi") {
        text = "इस पृष्ठ में, आप फसल रिपोर्ट जनरेट कर सकते हैं";
      }
    } else if (currentPage === "/weather-forecast") {
      if (selectedLanguage === "en") {
        text = "In this page, you can gain weather insights";
      } else if (selectedLanguage === "hi") {
        text = "इस पृष्ठ में, आप मौसम से जुड़ी जानकारी प्राप्त कर सकते हैं";
      }
    } else if (currentPage === "/live-crop-price") {
      if (selectedLanguage === "en") {
        text =
          "In this page, you can learn about real-time prices of crops in India";
      } else if (selectedLanguage === "hi") {
        text =
          "इस पृष्ठ में, आप भारत में फसलों के रीयल-टाइम कीमतों के बारे में जान सकते हैं";
      }
    } else if (currentPage === "/plant-inventory") {
      if (selectedLanguage === "en") {
        text =
          "In this page, you can learn about state-wise crop distribution in India";
      } else if (selectedLanguage === "hi") {
        text =
          "इस पृष्ठ में, आप भारत में राज्य-वार फसल वितरण के बारे में जान सकते हैं";
      }
    } else if (currentPage === "/schemes") {
      if (selectedLanguage === "en") {
        text = "In this page, you can explore some of the government schemes";
      } else if (selectedLanguage === "hi") {
        text = "इस पृष्ठ में, आप कुछ सरकारी योजनाओं का अन्वेषण कर सकते हैं";
      }
    } else if (currentPage === "/organic-farming") {
      if (selectedLanguage === "en") {
        text = "In this page, you can learn about Organic Farming Practices";
      } else if (selectedLanguage === "hi") {
        text = "इस पृष्ठ में, आप जैविक कृषि पद्धतियों के बारे में जान सकते हैं";
      }
    } else if (currentPage === "/complaints") {
      if (selectedLanguage === "en") {
        text = "In this page, you can communicate with agriculture officials";
      } else if (selectedLanguage === "hi") {
        text = "इस पृष्ठ में, आप कृषि अधिकारियों से संवाद कर सकते हैं";
      }
    } else if (currentPage === "/faqs") {
      if (selectedLanguage === "en") {
        text = "In this page, you can view FAQs";
      } else if (selectedLanguage === "hi") {
        text = "इस पृष्ठ में, आप अक्सर पूछे जाने वाले सवाल देख सकते हैं";
      }
    } else if (currentPage === "/edukaan") {
      if (selectedLanguage === "en") {
        text = "In this page, you can use our marketing platform - eDukaan";
      } else if (selectedLanguage === "hi") {
        text =
          "इस पृष्ठ में, आप हमारे विपणन प्लेटफ़ॉर्म - eDukaan का उपयोग कर सकते हैं";
      }
    }

    var utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();

    if (selectedLanguage == "en") {
      utterance.voice = voices[0];
    } else if (selectedLanguage == "hi") {
      const hindiVoice = voices.find((voice) => voice.lang === "hi-IN");
      utterance.voice = hindiVoice;
    }

    speechSynthesis.speak(utterance);
  };

  // IVR
  const speakMenu = (selectedLanguage) => {
    if (selectedLanguage == "en") {
      var text = `
    Press 1 for Crop Disease Prediction,
    Press 2 for Crop Report Generation,
    Press 3 for Weather Insights,
    Press 4 for Live Crop Prices,
    Press 5 for Plant Inventory,
    Press 6 for Organic Farming practices,
    Press 7 for Government Schemes,
    Press 8 for E-Dukaan,
    Press 9 for Home
    `;
    } else if (selectedLanguage == "hi") {
      var text = `
    फसल रोग भविष्यवाणी के लिए 1 दबाएं,
    फसल रिपोर्ट निर्माण के लिए 2 दबाएं,
    मौसम जानकारी के लिए 3 दबाएं,
    लाइव फसल मूल्य के लिए 4 दबाएं,
    पौधों की सूची के लिए 5 दबाएं,
    जैविक कृषि पद्धतियों के लिए 6 दबाएं,
    सरकारी योजनाओं के लिए 7 दबाएं,
    ई-दुकान के लिए 8 दबाएं,
    होम पेज के लिए 9 दबाएं।
    `;
    }

    var utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();

    if (selectedLanguage == "en") {
      utterance.voice = voices[0];
    } else if (selectedLanguage == "hi") {
      const hindiVoice = voices.find((voice) => voice.lang === "hi-IN");
      utterance.voice = hindiVoice;
    }

    if (count === 0) {
      setCount(1);
      speechSynthesis.speak(utterance);
    } else {
      setCount(0);
      speechSynthesis.cancel();
      utterance = new SpeechSynthesisUtterance("Stopped");
      speechSynthesis.speak(utterance);
    }

    const handleKeyPress = (e) => {
      speechSynthesis.cancel();

      if (e.key === "1") {
        navigate("/not-deployed");
      } else if (e.key === "2") {
        navigate("/crop-report-generator");
      } else if (e.key === "3") {
        navigate("/weather-forecast");
      } else if (e.key === "4") {
        navigate("/live-crop-price");
      } else if (e.key === "5") {
        navigate("/plant-inventory");
      } else if (e.key === "6") {
        navigate("/organic-farming");
      } else if (e.key === "7") {
        navigate("/schemes");
      } else if (e.key === "8") {
        navigate("/edukaan");
      } else if (e.key === "9") {
        navigate("/");
      } else if (e.key && parseInt(e.key) > 9) {
        utterance = new SpeechSynthesisUtterance("Stopped");
        speechSynthesis.speak(utterance);
      }

      window.removeEventListener("keydown", handleKeyPress);
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  };

  return (
    <>
      {isIVRVisible ? (
        <div className="z-50 fixed bottom-24 left-5 flex flex-col items-center justify-center gap-5">
          <div className=" flex items-center justify-center gap-4">
            <div className="flex items-center justify-center text-white font-bold lg:text-lg">
              <div
                onClick={() => {
                  speakMenu("en");
                }}
                className="bg-blue-500 p-2 hover:scale-110 cursor-pointer border-black border-[2px]"
              >
                Menu
              </div>
              <div
                onClick={() => {
                  speakMenu("hi");
                }}
                className="bg-green-500 p-2 hover:scale-110 cursor-pointer border-black border-[2px]"
              >
                नेविगेशन
              </div>
            </div>

            {count === 1 ? (
              <input
                type="number"
                className="md:hidden w-[50px] p-1 text-center text-black border-b-[2px] border-black"
                onChange={() => {
                  setCount(0);
                }}
              />
            ) : (
              ""
            )}
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center text-white font-bold lg:text-lg">
              <div
                onClick={() => {
                  speakAboutPage("en");
                }}
                className="bg-blue-500 p-2 hover:scale-110 cursor-pointer border-black border-[2px]"
              >
                Help
              </div>
              <div
                onClick={() => {
                  speakAboutPage("hi");
                }}
                className="bg-green-500 p-2 hover:scale-110 cursor-pointer border-black border-[2px]"
              >
                सहायता
              </div>
            </div>

            {count === 1 ? (
              <input
                type="number"
                className="md:hidden w-[50px] p-1 text-center text-black border-b-[2px] border-black"
                onChange={() => {
                  setCount(0);
                }}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}

      {/* Menu Button */}
      <div
        onClick={() => {
          setIsIVRVisible(!isIVRVisible);
        }}
        className="z-50 fixed bottom-5 left-5 w-[50px] h-[50px] rounded-full bg-orange-500 flex items-center justify-center font-bold text-3xl text-white hover:scale-105 cursor-pointer"
      >
        {isIVRVisible ? <FaChevronDown /> : "?"}
      </div>
    </>
  );
};

export default IVRforNavigation;
