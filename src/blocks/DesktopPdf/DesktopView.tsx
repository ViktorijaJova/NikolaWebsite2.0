import React from "react";

const DesktopTabletView = () => {
  return (
    <iframe
      key="pdf-viewer"
      src="/mods.pdf"
      className="w-[100%] h-[400px] sm:h-[600px] md:h-[800px] border-none"
      title="PDF Viewer"
    />
  );
};

export default DesktopTabletView;
