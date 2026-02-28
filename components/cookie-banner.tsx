"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user has already consented or rejected
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShow(false);
  };

  const handleManageCookies = () => {
    // Usually opens a modal, for now we will just hide the banner
    // assuming they updated their preferences in a real setting
    alert("Cookie management modal would open here");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-secondary border-t-4 border-accent shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-gray-200">
            <h3 className="text-xl font-display font-bold text-white mb-2 flex items-center gap-2">
              <span className="material-icons text-accent">cookie</span>
              Your Privacy Matter
            </h3>
            <p className="text-sm md:text-base leading-relaxed max-w-4xl">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies. 
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto flex-shrink-0">
            <button 
              onClick={handleManageCookies}
              className="px-6 py-2.5 bg-transparent border-2 border-white/30 text-white rounded font-bold hover:bg-white/10 transition-colors text-sm uppercase tracking-wider"
            >
              Manage Cookies
            </button>
            <button 
              onClick={handleRejectAll}
              className="px-6 py-2.5 bg-gray-800 border-2 border-gray-800 text-white rounded font-bold hover:bg-gray-700 transition-colors text-sm uppercase tracking-wider"
            >
              Reject All
            </button>
            <button 
              onClick={handleAcceptAll}
              className="px-6 py-2.5 bg-accent text-black rounded font-bold hover:bg-yellow-400 transition-colors shadow-lg text-sm uppercase tracking-wider border-2 border-accent"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
