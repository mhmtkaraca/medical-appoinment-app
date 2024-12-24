"use client"
import React, { useEffect, useState } from 'react';

const TrustpilotWidget = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const script = document.createElement('script');
    script.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Scripti temizleme (isteğe bağlı)
      document.body.removeChild(script);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="fixed top-16 right-8 p-2  z-50">
      {/* TrustBox widget */}
      <div
        className="trustpilot-widget block md:hidden"
        data-locale="en-US"
        data-template-id="5419b6a8b0d04a076446a9ad"
        data-businessunit-id="67575f1a4a42bb5131df7e9a"
        data-style-height="24px"
        data-style-width="100%"
      >
        <a
          href="https://www.trustpilot.com/review/healthclinicturkiye.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trustpilot
        </a>
      </div>
      <div
        className="trustpilot-widget hidden md:block"
        data-locale="en-US"
        data-template-id="56278e9abfbbba0bdcd568bc"
        data-businessunit-id="67575f1a4a42bb5131df7e9a"
        data-style-height="52px"
        data-style-width="100%"
      >
        <a
          href="https://www.trustpilot.com/review/healthclinicturkiye.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trustpilot
        </a>
      </div>
    </div>
  );
};

export default TrustpilotWidget;