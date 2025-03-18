import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import AboutBlock from "@/blocks/About/about";
import ContactBlock from "@/blocks/Contact/contact";

import AnimatedImages from "@/blocks/AnimatedImages/AnimateImages";
import SpacingBlock from "@/blocks/SpacingBlock/SpacingBlock";
import TechnicalDrawings from "@/blocks/TechDrawings/tech";

export default function Home() {
  const photos = [
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1697215183/Technical/look1_g5hoh5.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1697215184/Technical/look3_qltgdd.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1697215184/Technical/look2_rkyfhl.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1697215187/Technical/look4_dheqat.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1697215188/Technical/look5_khbolc.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1697215196/Technical/look8_tqvved.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1697215190/Technical/look6_snjomx.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1697215193/Technical/look7_bakqzy.jpg",
      ];
  return (
    <div>
      <SpacingBlock size="m"></SpacingBlock>
      <TechnicalDrawings
        title="TECHNICAL DRAWINGS"
        images={photos}
      ></TechnicalDrawings>
      <SpacingBlock size="m"></SpacingBlock>
    </div>
  );
}
