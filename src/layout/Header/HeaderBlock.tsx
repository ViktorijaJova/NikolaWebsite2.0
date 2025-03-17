import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../Footer/assets/logo.png";
import menu from "./assets/burger.png";
import menuScrol from "./assets/burgerMenu.png";

import { FaChevronDown, FaTimes } from "react-icons/fa"; // FaTimes for the close button

function HeaderBlock() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const aboutDropdownRef = useRef(null);
  const galleryDropdownRef = useRef(null);

  const toggleDropdown = (menuName: any) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  const handleClickOutside = (event: any) => {
    if (
      aboutDropdownRef.current &&
      !aboutDropdownRef?.current?.contains(event.target) &&
      galleryDropdownRef.current &&
      !galleryDropdownRef.current.contains(event.target)
    ) {
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
      className={`fixed top-0 left-0 w-full  z-[9999] transition-all duration-300 ${
        isScrolled ? "!bg-slate-950 !shadow-md  " : "bg-transparent pt-10 "
      }`}
      style={{
        background: isScrolled ? "#ffffff" : "transparent",
        boxShadow: isScrolled ? "0px 4px 6px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <div
        className="container mx-auto flex items-center justify-between h-[60px] px-4 md:px-8 transition-all duration-300"
        // style={{ background: isScrolled ? "#ffffff" : "transparent", boxShadow: isScrolled ? "0px 4px 6px rgba(0,0,0,0.1)" : "none" }}
      >
        <Link href="/doma">
          <Image
            src={logo.src}
            alt="Logo"
            width={120}
            height={60}
            className="cursor-pointer md:flex hidden"
          />
          <Image
            src={logo.src}
            alt="Logo"
            width={60}
            height={40}
            className="cursor-pointer flex md:hidden"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`md:flex hidden gap-x-10 text-lg tablet:text-xl space-x-20 items-center transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          {/* About Dropdown */}
          <div className="relative" ref={aboutDropdownRef}>
            <button
              onClick={() => toggleDropdown("about")}
              className="flex items-center space-x-2 gap-x-5 hover:text-Darkgreen"
            >
              <span>За нас</span>
              <FaChevronDown
                className={`transition-transform pl-2 ${
                  openDropdown === "about" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openDropdown === "about" && (
              <div
                style={{
                  background: isScrolled ? "white" : "transparent",
                  color: isScrolled ? "black" : "white",
                }}
                className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-40 py-2"
              >
                 <Link
                  href="/arhiva"
                  className="block px-4 py-2 "
                  onClick={() => setOpenDropdown(null)}
                >
                  Документи
                </Link>
                <Link
                  href="/misija"
                  className="block px-4 py-2 "
                  onClick={() => setOpenDropdown(null)}
                >
                  Мисија
                </Link>
                <Link
                  href="/istorija"
                  className="block px-4 py-2 "
                  onClick={() => setOpenDropdown(null)}
                >
                  Историја
                </Link>
              </div>
            )}
          </div>

          {/* Gallery Dropdown */}
          <div className="relative" ref={galleryDropdownRef}>
            <button
              onClick={() => toggleDropdown("gallery")}
              className="flex items-center space-x-2 gap-x-5"
            >
              <span>Галерија</span>
              <FaChevronDown
                className={`transition-transform ${
                  openDropdown === "gallery" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openDropdown === "gallery" && (
              <div
                style={{
                  background: isScrolled ? "white" : "transparent",
                  color: isScrolled ? "black" : "white",
                }}
                className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-40 py-2"
              >
                <Link
                  href="/aktivnosti"
                  className="block px-4 py-2 "
                  onClick={() => setOpenDropdown(null)}
                >
                  Активности
                </Link>
                <Link
                  href="/naum-naumovski-borce"
                  className="block px-4 py-2 "
                  onClick={() => setOpenDropdown(null)}
                >
                  ИО Наум Наумовски Борче
                </Link>
              </div>
            )}
          </div>

          <Link href="/rakovodstvo" className="hover:text-gray">
            Раководство
          </Link>
          <Link href="/proekti" className="hover:text-gray">
            Проекти
          </Link>
          <Link href="/kontakt" className="hover:text-gray">
            Контакт
          </Link>
        </nav>

        <button
         style={{
          paddingTop: isScrolled ? "20px" : "0",
          paddingBottom: isScrolled ? "30px" : "0",
        }}
        
          className="md:hidden "
          onClick={() => setBurgerMenu(!burgerMenu)}
        >
          <Image
            src={isScrolled ? menuScrol.src : menu.src}
            alt="Menu"
            width={32}
            height={24}
          />
        </button>
      </div>

      {burgerMenu && (
        <div
          style={{
            bottom: 100,
            boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
          }}
          className="md:hidden  relative flex flex-col  bg-white shadow-2xl pt-4 pb-6 px-6"
        >
          <div className="flex pt-4 justify-between items-center mb-4">
            <Image src={logo.src} alt="Logo" width={60} height={40} />
            <button
              onClick={() => setBurgerMenu(false)}
              aria-label="Close Menu"
            >
              <FaTimes className="text-xl font-light" />
            </button>
          </div>

          {/* Menu Links */}
          <Link
            href="/za-nas"
            className="block py-2"
            onClick={() => setBurgerMenu(false)}
          >
            За нас
          </Link>
          <Link
            href="/misija"
            className="block py-2"
            onClick={() => setBurgerMenu(false)}
          >
            Мисија
          </Link>
          <Link
            href="/arhiva"
            className="block py-2"
            onClick={() => setBurgerMenu(false)}
          >
            Документи
          </Link>
          <Link
            href="/istorija"
            className="block py-2"
            onClick={() => setBurgerMenu(false)}
          >
            Историја
          </Link>
          <Link
            href="/aktivnosti"
            className="block py-2"
            onClick={() => setBurgerMenu(false)}
          >
            Активности
          </Link>
          <Link
            href="/naum-naumovski-borce"
            className="block py-2"
            onClick={() => setBurgerMenu(false)}
          >
            ИО Наум Наумовски Борче
          </Link>
          <Link
            href="/rakovodstvo"
            className="block py-2"
            onClick={() => setBurgerMenu(false)}
          >
            Раководство
          </Link>
          <Link
            href="/proekti"
            className="block py-2"
            onClick={() => setBurgerMenu(false)}
          >
            Проекти
          </Link>
          <Link
            href="/kontakt"
            className="block py-2"
            onClick={() => setBurgerMenu(false)}
          >
            Контакт
          </Link>
        </div>
      )}
    </header>
  );
}

export default HeaderBlock;
