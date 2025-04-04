import React, { useEffect, useState } from "react";
import Image from "next/image";
import theMods from "../../../public/vice.png";

const Home = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // Avoid hydration issues

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent flickering during Next.js hydration
  if (isMobile === null) return null;

  return (
    <div className="flex items-center justify-center pt-10 bg-gray-50 p-4">
      <div className="w-full max-w-[1920px] bg-white rounded-lg shadow-lg overflow-hidden">
        {!isMobile ? (
          <iframe
            key={isMobile ? "pdf-hidden" : "pdf-viewer"} // Key ensures re-render
            src="/golf.pdf"
            className="w-[100%] h-[400px] sm:h-[600px] md:h-[800px] border-none"
            title="PDF Viewer"
          />
        ) : (
          <div className="text-center p-4 pt-40">
            <Image width={400} height={400} src={theMods} alt="mods" />
            <p className="my-2 text-[#1f2021]">Click below to view the case study</p>
            <a
              href="/golf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1f2021] cursor-pointer underline"
            >
              Open PDF
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
