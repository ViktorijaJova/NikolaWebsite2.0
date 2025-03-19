// pages/index.tsx
import React, { useEffect, useState } from 'react';
import MyDocument from '../../blocks/PdfViewer/PdfViewer';
import { PDFViewer } from '@react-pdf/renderer';

const Home = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // This will set isBrowser to true only on the client-side
    setIsBrowser(true);
  }, []);

  return (
    <div className="w-full h-full bg-gray-100 p-4">
   
      
      <div>
        {/* Import PDF from the public folder */}
        <iframe
          src="/golf.pdf" // Reference the PDF directly from the public folder
          width="100%"
          height="900px"
        />
      </div>
    </div>
  );
};

export default Home;
