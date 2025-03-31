import React from "react";
import Image from "next/image";
import theMods from "../../../public/mods.png";

const Home = () => {
  return (
    <div className="flex items-center justify-center pt-10 bg-gray-50 p-4">
      {/* Tablet/Desktop View */}
      <div className="hidden sm:flex w-full max-w-[1920px] bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe
          key="pdf-viewer"
          src="/mods.pdf"
          className="w-[100%] h-[400px] sm:h-[600px] md:h-[800px] border-none"
          title="PDF Viewer"
        />
      </div>

      {/* Mobile View */}
      <div className="sm:hidden flex flex-col items-center text-center p-4 pt-40">
        <Image width={400} height={400} src={theMods} alt="mods" />
        <p className="my-2 text-[#1f2021]">Click below to view the case study</p>
        <a
          href="/mods.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1f2021] cursor-pointer underline"
        >
          Open PDF
        </a>
      </div>
    </div>
  );
};

export default Home;
