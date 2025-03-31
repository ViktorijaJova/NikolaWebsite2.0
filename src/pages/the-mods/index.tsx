import React, { useEffect, useState } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768); // Detect mobile screens
  }, []);

  return (
    <div className="flex items-center justify-center pt-10 bg-gray-50 p-4">
      <div className="w-full max-w-[1920px] bg-white rounded-lg shadow-lg overflow-hidden">
        {isMobile ? (
          <div className="text-center p-4">
            <p className="mb-2">PDFs may not open on mobile. Click below to view:</p>
            <a
              href="/mods.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Open PDF
            </a>
          </div>
        ) : (
          <iframe
            src="/mods.pdf"
            className="w-full h-[400px] sm:h-[600px] md:h-[800px] border-none"
            title="PDF Viewer"
          />
        )}
      </div>
    </div>
  );
};

export default Home;
