import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaInfo } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const ShortcutsMenu = ({
  isShortcutsMenuVisible,
  setIsShortcutsMenuVisible,
  language,
}) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toLowerCase() === "s" && e.altKey) {
        const newState = !isShortcutsMenuVisible;
        setIsShortcutsMenuVisible(newState);

        const utterance = new SpeechSynthesisUtterance(
          newState ? "Shortcuts Activated" : "Shortcuts De-Activated"
        );
        window.speechSynthesis.speak(utterance);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isShortcutsMenuVisible]);

  // Speak Page Info
  const location = useLocation();

  const speakPageInfo = () => {
    var currentPage = location.pathname;
    var text = "Welcome";

    if (currentPage === "/") {
      if (language === "en") {
        text = "In this page, you can explore all the features provided by us";
      } else if (language === "hi") {
        text =
          "इस पृष्ठ में, आप हमारे द्वारा प्रदान की गई सभी सुविधाओं का अन्वेषण कर सकते हैं";
      }
    } else if (currentPage === "/brochure") {
      if (language === "en") {
        text =
          "In this page, you can download our brochure to learn more about our website";
      } else if (language === "hi") {
        text =
          "इस पृष्ठ में, आप हमारी ब्रोशर डाउनलोड कर सकते हैं ताकि आप हमारी वेबसाइट के बारे में और अधिक जान सकें";
      }
    } else if (currentPage === "/developers") {
      if (language === "en") {
        text = "In this page, you can view the profile of developers";
      } else if (language === "hi") {
        text = "इस पृष्ठ में, आप डेवलपर्स का प्रोफ़ाइल देख सकते हैं";
      }
    } else if (currentPage === "/ai-architecture") {
      if (language === "en") {
        text = "In this page, you can view our ML models architecture";
      } else if (language === "hi") {
        text = "इस पृष्ठ में, आप हमारे एमएल मॉडल्स का आर्किटेक्चर देख सकते हैं";
      }
    } else if (currentPage === "/crop-report-generator") {
      if (language === "en") {
        text = "In this page, you can generate crop report";
      } else if (language === "hi") {
        text = "इस पृष्ठ में, आप फसल रिपोर्ट जनरेट कर सकते हैं";
      }
    } else if (currentPage === "/weather-forecast") {
      if (language === "en") {
        text = "In this page, you can gain weather insights";
      } else if (language === "hi") {
        text = "इस पृष्ठ में, आप मौसम से जुड़ी जानकारी प्राप्त कर सकते हैं";
      }
    } else if (currentPage === "/live-crop-price") {
      if (language === "en") {
        text =
          "In this page, you can learn about real-time prices of crops in India";
      } else if (language === "hi") {
        text =
          "इस पृष्ठ में, आप भारत में फसलों के रीयल-टाइम कीमतों के बारे में जान सकते हैं";
      }
    } else if (currentPage === "/plant-inventory") {
      if (language === "en") {
        text =
          "In this page, you can learn about state-wise crop distribution in India";
      } else if (language === "hi") {
        text =
          "इस पृष्ठ में, आप भारत में राज्य-वार फसल वितरण के बारे में जान सकते हैं";
      }
    } else if (currentPage === "/schemes") {
      if (language === "en") {
        text = "In this page, you can explore some of the government schemes";
      } else if (language === "hi") {
        text = "इस पृष्ठ में, आप कुछ सरकारी योजनाओं का अन्वेषण कर सकते हैं";
      }
    } else if (currentPage === "/organic-farming") {
      if (language === "en") {
        text = "In this page, you can learn about Organic Farming Practices";
      } else if (language === "hi") {
        text = "इस पृष्ठ में, आप जैविक कृषि पद्धतियों के बारे में जान सकते हैं";
      }
    } else if (currentPage === "/complaints") {
      if (language === "en") {
        text = "In this page, you can communicate with agriculture officials";
      } else if (language === "hi") {
        text = "इस पृष्ठ में, आप कृषि अधिकारियों से संवाद कर सकते हैं";
      }
    } else if (currentPage === "/faqs") {
      if (language === "en") {
        text = "In this page, you can view FAQs";
      } else if (language === "hi") {
        text = "इस पृष्ठ में, आप अक्सर पूछे जाने वाले सवाल देख सकते हैं";
      }
    } else if (currentPage === "/edukaan") {
      if (language === "en") {
        text = "In this page, you can use our marketing platform - eDukaan";
      } else if (language === "hi") {
        text =
          "इस पृष्ठ में, आप हमारे विपणन प्लेटफ़ॉर्म - eDukaan का उपयोग कर सकते हैं";
      }
    }

    var utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();

    if (language == "en") {
      utterance.voice = voices[0];
    } else if (language == "hi") {
      const hindiVoice = voices.find((voice) => voice.lang === "hi-IN");
      utterance.voice = hindiVoice;
    }

    speechSynthesis.speak(utterance);
  };

  // IVR
  const [ivrCount, setIvrCount] = useState(0);

  const navigate = useNavigate();

  const speakIVRMenu = () => {
    if (language == "en") {
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
    } else if (language == "hi") {
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

    if (language == "en") {
      utterance.voice = voices[0];
    } else if (language == "hi") {
      const hindiVoice = voices.find((voice) => voice.lang === "hi-IN");
      utterance.voice = hindiVoice;
    }

    if (ivrCount === 0) {
      setIvrCount(1);
      speechSynthesis.speak(utterance);
    } else {
      setIvrCount(0);
      speechSynthesis.cancel();
      utterance = new SpeechSynthesisUtterance("Stopped");
      speechSynthesis.speak(utterance);
    }

    const handleIVRKeyPress = (e) => {
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

      window.removeEventListener("keydown", handleIVRKeyPress);
    };

    window.addEventListener("keydown", handleIVRKeyPress);

    return () => {
      window.removeEventListener("keydown", handleIVRKeyPress);
    };
  };

  return (
    <>
      {isShortcutsMenuVisible ? (
        <>
          <div className="z-50 fixed bottom-5 left-5 flex flex-col items-center justify-center gap-2">
            <div
              onClick={() => {
                speakIVRMenu();
              }}
              className="w-[50px] h-[50px] rounded-full text-orange-500 border-orange-500 border-[2px] flex items-center justify-center font-bold text-xl hover:bg-orange-500 hover:text-white cursor-pointer"
            >
              <IoCall />
            </div>

            <div
              onClick={() => {
                speakPageInfo();
              }}
              className="w-[50px] h-[50px] rounded-full text-orange-500 border-orange-500 border-[2px] flex items-center justify-center font-bold text-xl hover:bg-orange-500 hover:text-white cursor-pointer"
            >
              <FaInfo />
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ShortcutsMenu;
