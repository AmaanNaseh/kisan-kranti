import { useEffect, useState } from "react";

export default function GTranslator({ language, setLanguage }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,hi" },
        "google_translate_element"
      );
    };
  }, []);

  const switchLanguage = (target) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = target;
      select.dispatchEvent(new Event("change"));
      setLanguage(target);
    }
  };

  return (
    <div className="text-center my-5">
      {/* Hidden Google element */}
      <div id="google_translate_element" className="hidden"></div>

      {/* Compact toggle-style buttons */}
      <div className="flex flex-col md:flex-row text-sm md:text-lg border border-gray-300 rounded-lg overflow-hidden">
        <button
          onClick={() => switchLanguage("en")}
          className={`p-2 font-medium text-sm transition-colors duration-200 ${
            language === "en"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          EN
        </button>

        <button
          onClick={() => switchLanguage("hi")}
          className={`p-2 font-medium text-sm transition-colors duration-200 ${
            language === "hi"
              ? "bg-orange-500 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          हिन्दी
        </button>
      </div>
    </div>
  );
}
