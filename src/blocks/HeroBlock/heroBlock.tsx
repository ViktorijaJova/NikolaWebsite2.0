import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const captions = [
  'WE ARE THE MODS',
  'ILLUSTRATIONS',
  'GRADUATION COLLECTION',
];

const HeroSection: React.FC = () => {
  const [currentCaption, setCurrentCaption] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCaption((prevCaption) => (prevCaption + 1) % captions.length);
    }, 3000); // Switch text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="landing-hero  h-screen flex items-center justify-center bg-fixed bg-cover bg-center bg-no-repeat relative"
      style={{ 
        backgroundImage: "url('https://res.cloudinary.com/dszkdvuko/image/upload/v1697214205/hero_dw2mnu.jpg')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

      <div className="hero-content w-full text-center px-4 relative z-10">
        <div className="container mx-auto">
          <div className="hero-text">
            <div className="relative overflow-hidden lg:h-20 h-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCaption}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                  className="text-white text-5xl font-bold"
                >
                  {captions[currentCaption]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/illustrations" className="btn btn-clean px-8 py-4 border-[1px] border-white text-white transition">
              View more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
