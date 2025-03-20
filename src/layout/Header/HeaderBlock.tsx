import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../Footer/assets/logo.png";
import { FaChevronDown, FaTimes, FaBars } from "react-icons/fa"; // FaTimes for the close button

function HeaderBlock() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const galleryDropdownRef = useRef(null);

  const toggleDropdown = (menuName: any) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  const handleClickOutside = (event: any) => {
    if (galleryDropdownRef.current && !galleryDropdownRef?.current?.contains(event.target)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Detect scrolling to change the background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${isScrolled ? "bg-white py-5 !shadow-md" : "bg-white py-5 !shadow-md"}`}
    >
      <div className="container mx-auto flex items-center justify-between h-[60px] px-4 md:px-8 transition-all duration-300">
        <Link href="/home">
          <span className="text-[#727373]">NIKOLA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`md:flex hidden gap-x-10 px-4 text-[14px] lg:text-[16px] items-center transition-colors duration-300 ${isScrolled ? "text-[#727373]" : "text-[#727373]"}`}>
        
          <Link href="/illustrations" className="hover:text-gray">
            ILLUSTRATIONS
          </Link>
          <div className="relative" ref={galleryDropdownRef}>
            <button onClick={() => toggleDropdown("gallery")} className="flex items-center space-x-2 gap-x-5">
              <span>BELLA Collections</span>
              <FaChevronDown
                className={`transition-transform ${openDropdown === "gallery" ? "rotate-180" : "rotate-0"}`}
              />
            </button>
            {openDropdown === "gallery" && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-40 py-2 transition-all duration-300">
                <Link href="/volume-1" className="block px-4 py-2" onClick={() => setOpenDropdown(null)}>
                  Vol.1
                </Link>
                <Link href="/volume-2" className="block px-4 py-2" onClick={() => setOpenDropdown(null)}>
                  Vol.2
                </Link>
                <Link href="/volume-3" className="block px-4 py-2" onClick={() => setOpenDropdown(null)}>
                  Vol.3
                </Link>
              </div>
            )}
          </div>

          <Link href="/tech-drawings" className="hover:text-gray">
            TECHNICAL DRAWINGS
          </Link>
          <Link href="/projects" className="hover:text-gray">
            CASE STUDIES
          </Link>
          <Link href="/about" className="hover:text-gray">
            ABOUT
          </Link>
          <Link href="/contact" className="hover:text-gray">
            CONTACT
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setBurgerMenu(!burgerMenu)}>
          {burgerMenu ? (
            <FaTimes className="text-xl text-[#727373] font-light" />
          ) : (
            <FaBars className="text-xl text-[#727373] font-light" />
          )}
        </button>
      </div>

      {/* Mobile Burger Menu */}
      {burgerMenu && (
        <div className="md:hidden relative flex flex-col bg-white text-[#727373] pt-4 pb-6 px-6">
          <Link href="/home" className="block py-2" onClick={() => setBurgerMenu(false)}>
            HOME
          </Link>
          <Link href="/illustrations" className="block py-2" onClick={() => setBurgerMenu(false)}>
            ILLUSTRATIONS
          </Link>
          <div className="relative" ref={galleryDropdownRef}>
            <button onClick={() => toggleDropdown("gallery")} className="flex items-center space-x-2 gap-x-5">
              <span>BELLA COLLECTIONS</span>
              <FaChevronDown
                className={`transition-transform ${openDropdown === "gallery" ? "rotate-180" : "rotate-0"}`}
              />
            </button>
            {openDropdown === "gallery" && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-40 py-2 transition-all duration-300">
                <Link href="/volume-1" className="block px-4 py-2" onClick={() => setBurgerMenu(false)}>
                  VOL.1
                </Link>
                <Link href="/volume-2" className="block px-4 py-2" onClick={() => setBurgerMenu(false)}>
                  VOL.2
                </Link>
                <Link href="/volume-3" className="block px-4 py-2" onClick={() => setBurgerMenu(false)}>
                  VOL.3
                </Link>
              </div>
            )}
          </div>
          <Link href="/tech-drawings" className="block py-2" onClick={() => setBurgerMenu(false)}>
            TECHNICAL DRAWINGS
          </Link>
          <Link href="/projects" className="hover:text-gray" onClick={() => setBurgerMenu(false)}>
            CASE STUDIES
          </Link>
          <Link href="/about" className="block py-2" onClick={() => setBurgerMenu(false)}>
            ABOUT
          </Link>
          <Link href="/contact" className="block py-2" onClick={() => setBurgerMenu(false)}>
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
}

export default HeaderBlock;
