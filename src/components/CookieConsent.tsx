import React, { useState, useEffect } from "react";
import { X, Cookie, Shield, Check } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieAccepted = localStorage.getItem("cookieConsent");
    if (!cookieAccepted) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsAccepted(true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  if (!isVisible || isAccepted) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-300 ease-out">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-pink-600 to-red-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">🍪 Cookie Preferences</h3>
                <p className="text-pink-100 text-sm">We care about your privacy</p>
              </div>
            </div>
            <button
              onClick={handleDecline}
              className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-all duration-200 backdrop-blur-sm"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              How we use cookies
            </h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              FILIPINO SPOTLIGHT uses cookies to enhance your browsing experience, analyze site traffic, 
              and personalize content. These cookies help us provide you with the best possible service.
            </p>
            
            {/* Cookie Types */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-pink-800">Essential</span>
                </div>
                <p className="text-xs text-pink-700">Required for basic site functionality</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-red-800">Analytics</span>
                </div>
                <p className="text-xs text-red-700">Help us improve our website</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-800">Preferences</span>
                </div>
                <p className="text-xs text-gray-700">Remember your settings</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={handleDecline}
              className="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-300"
            >
              <Shield className="w-4 h-4" />
              Decline All
            </button>
            <button
              onClick={handleAccept}
              className="px-8 py-3 text-sm font-medium text-white bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Check className="w-4 h-4" />
              Accept All Cookies
            </button>
          </div>

          {/* Privacy Policy Links */}
          <div className="mt-6 pt-4 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-500">
              By continuing to use our site, you agree to our{" "}
              <a href="#" className="text-pink-600 hover:text-pink-700 underline font-medium">
                Cookie Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-pink-600 hover:text-pink-700 underline font-medium">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
