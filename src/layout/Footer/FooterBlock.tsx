import React, { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../Footer/assets/logo.png";

const FooterBlock: React.FC = () => {
  return (
    <footer>
      <div className="bg-white">
        <div
          className="flex md:flex-row flex-col flex-wrap justify-between items-start lg:px-40 p-5"
        >
          <div id="footer-logo" className="footer-logo mb-5">
            <Link href="/home" passHref>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/dszkdvuko/image/upload/v1697218667/Home/favicon_cgkxl1.png"
                width={100}
                height={100}
                alt="logo"
              />
            </Link>
          </div>

          {/* Art Work Section */}
          <div id="footer-1" className="p-5 text-gray-500">
            <div className="text-sm uppercase text-darkGrey font-extralight">
              Art Work
            </div>
            <a className="my-3 block" href="illustrations.html">
              Illustrations
            </a>
            <a className="my-3 block" href="tech-drawings.html">
              Technical Drawings
            </a>
          </div>

          {/* Collections Bella Edition Section */}
          <div id="footer-1" className="p-5 text-gray-500">
            <div className="text-sm uppercase text-darkYellow font-extralight">
              Collections Bella Edition
            </div>
            <a className="my-3 block" href="Vol1.html">
              Vol. 1
            </a>
            <a className="my-3 block" href="Vol2.html">
              Vol. 2
            </a>
            <a className="my-3 block" href="Vol3.html">
              Vol. 3
            </a>
          </div>

          {/* Contact Section */}
          <div id="footer-1" className="p-5 text-gray-500">
            <div className="text-sm uppercase text-gray-500 font-extralight">
              Contact
            </div>
            <a className="my-3 block" href="tel:+38972321680">
              +389 72 321 680
            </a>
            <a
              className="my-3 block"
              href="mailto:nikolajovanovski1993@gmail.com"
            >
              nikolajovanovski1993@gmail.com
            </a>
            <a
              className="my-3 block"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/nikola__jovanovski/"
            >
              Instagram: nikolajovanovski
            </a>
          </div>
        </div>
      </div>

  
    </footer>
  );
};

export default FooterBlock;
