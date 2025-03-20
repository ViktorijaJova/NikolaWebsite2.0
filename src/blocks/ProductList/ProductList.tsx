import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const ProductList = ({ imgProduct, titleProduct, linkProduct }) => (
  <div className="w-full md:w-1/3 mb-8 text-[#727373]">
    <Link href={linkProduct || '#'}>
      <div>
        <Image src={imgProduct} alt={titleProduct} className="w-full h-auto" />
        <div className="flex phoneSmall:pl-2 phone:pl-6 md:pl-2 xl:pl-6 pt-4 items-center">
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline"
              width="14.486"
              height="25.337"
              viewBox="0 0 14.486 25.337"
            >
              <path
                d="M12.673,10.119,22.253.532a1.8,1.8,0,0,1,2.557,0,1.826,1.826,0,0,1,0,2.565L13.955,13.959a1.807,1.807,0,0,1-2.5.053L.528,3.1A1.811,1.811,0,0,1,3.085.539Z"
                transform="translate(0 25.337) rotate(-90)"
                fill="#727373"
              />
            </svg>
          </i>
          <i className="relative -top-10 mr-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline"
              width="56.072"
              height="96.69"
              viewBox="0 0 56.072 96.69"
            >
              <line
                x2="49.284"
                y2="89.902"
                transform="translate(3.394 3.394)"
                fill="none"
                stroke="#727373"
                strokeLinecap="round"
                strokeWidth="5"
              />
            </svg>
          </i>
          <span className="lg:text-xl lg:-ml-5 md:text-lg md:-ml-5 phone:-ml-5 uppercase">
            {titleProduct}
          </span>
        </div>
      </div>
    </Link>
  </div>
);

export default ProductList;
