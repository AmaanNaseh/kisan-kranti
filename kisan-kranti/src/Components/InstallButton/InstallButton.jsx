import React, { useState, useEffect } from "react";

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault(); // Prevent the default install prompt
      setDeferredPrompt(event);
      setIsInstallable(true); // Show the install button
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt(); // Show install prompt

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the PWA install");
      } else {
        console.log("User dismissed the PWA install");
      }
      setDeferredPrompt(null);
      setIsInstallable(false);
    });
  };

  return (
    <button
      onClick={handleInstallClick}
      className="text-white lg:border-gray-400 lg:border lg:rounded-full py-2 px-4 hover:bg-green-500 cursor-pointer"
    >
      Download App
    </button>
  );
};

export default InstallButton;
