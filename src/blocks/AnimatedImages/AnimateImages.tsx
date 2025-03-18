import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { title } from "process";

interface AnimatedImagesProps {
  images: string[];
  title: string;
}

const AnimatedImages: React.FC<AnimatedImagesProps> = ({ images, title }) => {
  return (
    <div className=" lg:px-40 md:px-10 px-4 pt-20 flex flex-col relative w-full h-full  items-center justify-center">
      <div className=" leading-9 font-extralight text-2xl text-[#1f2021]">
        {title}
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 space-x-5">
        {images.map((src, index) => (
          <Image
            src={src}
            alt={`Animated Image ${index + 1}`}
            width={400}
            height={400}
            className="  py-4 md:py-7"
          />
        ))}
      </div>
      <div className="link-insta text-[12px] text-[#737272]"><a href="https://www.instagram.com/bellaselezioni/" target="_blank">https://www.instagram.com/bellaselezioni/</a></div>
      <div className="link-insta pt-2 text-[12px] text-[#737272]"><a href="https://www.instagram.com/bella.mkd/" target="_blank">https://www.instagram.com/bella.mkd/</a></div>
    </div>
  );
};

export default AnimatedImages;
