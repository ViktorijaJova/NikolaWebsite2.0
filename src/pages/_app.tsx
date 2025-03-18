import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../layout/Footer/FooterBlock";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return( <div className="bg-white">
    <Component {...pageProps} />;
    <Footer />
    {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 py-4 px-6 bg-[#1f2021] text-white rounded-full shadow-lg transition-opacity duration-300 opacity-90 hover:opacity-100"
        >
          ↑
        </button>
      )}
</div>)

 
}
