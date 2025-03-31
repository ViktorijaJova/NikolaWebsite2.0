import React from "react";
import Image from "next/image";
import theMods from "../../../public/mods.png";

const MobileView = () => {
  return (
    <div className="text-center p-4 pt-40">
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
  );
};

export default MobileView;
