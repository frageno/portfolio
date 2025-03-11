'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentGiven = Cookies.get('cookie-consent');
    if (!consentGiven) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookie-consent', 'true', { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black-200 border-t border-white/[0.1] backdrop-blur-md p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white text-sm text-center md:text-left">
          Ta strona wykorzystuje pliki cookies w celu zapewnienia najlepszych wrażeń podczas korzystania z niej.
        </p>
        <button
          onClick={acceptCookies}
          className="px-6 py-2 bg-purple hover:bg-purple/80 text-white rounded-xl transition-colors duration-200"
        >
          Akceptuję
        </button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;