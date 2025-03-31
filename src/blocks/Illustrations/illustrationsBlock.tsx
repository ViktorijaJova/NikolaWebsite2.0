// components/TechnicalDrawings.tsx

import React, { useState } from "react";
import Image from "next/image";

interface IllustrationsProps {
  images: string[];
  title: string;
  desc: string;

}

const IllustrationBlock: React.FC<IllustrationsProps> = ({ images, title ,desc}) => {
  const [currentImage, setCurrentImage] = useState<number>(0); // tracks selected image
  const [lightboxIsOpen, setLightboxIsOpen] = useState<boolean>(false); // controls lightbox visibility

  // Open the lightbox when an image is clicked
  const openLightbox = (index: number) => {
    setCurrentImage(index); // set the current image index
    setLightboxIsOpen(true); // open the lightbox
  };

  // Close the lightbox
  const closeLightbox = () => {
    setLightboxIsOpen(false); // set the lightbox state to closed
  };

  // Navigate to the next image
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length); // Move to next image with wrapping
  };

  // Navigate to the previous image
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length); // Move to previous image with wrapping
  };

  return (
    <div className="lg:px-40  md:px-10 px-4 pt-20 flex flex-col relative w-full h-full items-center justify-center">
      <div className="leading-16 text-center font-extralight text-2xl text-[#1f2021]">
        {title}
      </div>
      <div className="sm:leading-9 leading-4 whitespace-pre-line text-center font-extralight w-[50%] text-xs md:text-base text-[#727373]">
        {desc}
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 items-center lg:grid-cols-5 pt-10 space-x-5">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            width={400}
            height={400}
            className="py-4 md:py-7 cursor-pointer"
            onClick={() => openLightbox(index)} // Open the lightbox on click
          />
        ))}
      </div>

      {/* Lightbox (Carousel) */}
      {lightboxIsOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white ">
          <div className="hs-carousel flex   justify-center text-center overflow-hidden w-full min-h-96 ">
          <div className="hs-carousel-body absolute  top-0 bottom-0   items-center  justify-center text-center flex flex-nowrap transition-transform duration-700">
          <div className="hs-carousel-slide w-full flex items-center justify-center">
          <Image
                  src={images[currentImage]}
                  alt={`Carousel Image ${currentImage + 1}`}
                  width={600}
                  height={600}
                  className="flex items-center justify-center"
                />
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="absolute lg:px-20 px-4 md:pt-0 pt-[95%]  inset-y-0 left-0 flex items-center">
                <button
                  onClick={prevImage}
                  className="hs-carousel-prev md:text-2xl text-white bg-gray-800 p-2 px-3 md:p-5 md:px-8 rounded-full hover:bg-gray-600"
                >
                  &#8249;
                </button>
              </div>
              <div className="absolute lg:px-20 px-4 md:pt-0 pt-[95%]  inset-y-0 right-0 flex items-center">
                <button
                  onClick={nextImage}
                  className="hs-carousel-next md:text-2xl text-white bg-gray-800 p-2 px-3 md:p-5 md:px-8 rounded-full hover:bg-gray-600"
                >
                  &#8250;
                </button>
              </div>

          {/* Close Button */}
          <button
                onClick={closeLightbox}
                className="absolute top-[17%] md:top-[12%] lg:top-[12%] right-[8%] text-white bg-gray-800 p-2 px-3 sm:p-3 sm:px-5 rounded-full"
              >
                X
              </button>
        </div>
      )}
    </div>
  );
};

export default IllustrationBlock;
