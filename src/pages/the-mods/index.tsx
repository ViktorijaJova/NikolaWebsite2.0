// pages/index.tsx
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // This will set isBrowser to true only on the client-side
    setIsBrowser(true);
  }, []);

  return (
    <div className="flex items-center justify-center pt-10  bg-gray-50 p-4">
      <div className="w-full max-w-[1920px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Import PDF from the public folder */}
        <iframe
          src="/mods.pdf" // Reference the PDF directly from the public folder
          className="w-[100%] h-[400px] sm:h-[600px] md:h-[800px] border-none"
          title="PDF Viewer"
        />
      </div>
    </div>
  );
};

export default Home;