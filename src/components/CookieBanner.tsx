"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "true", { expires: 30 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-200 p-4 flex justify-between items-center z-50 text-xs">
      <p>
        Diese Website verwendet nur technisch notwendige Cookies, um die
        Funktionalität der Website zu gewährleisten. Es werden keine Cookies
        gespeichert, die nicht für die Funktionalität der Website erforderlich
        sind.
      </p>
      <div className="space-x-4">
        <button
          className="border border-gray-500 rounded-xl p-2 hover:border-black"
          onClick={handleAccept}
        >
          Akzeptieren
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
