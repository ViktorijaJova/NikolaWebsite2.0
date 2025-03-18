import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import AboutBlock from "@/blocks/About/about";
import ContactBlock from "@/blocks/Contact/contact";

import AnimatedImages from "@/blocks/AnimatedImages/AnimateImages";
import SpacingBlock from "@/blocks/SpacingBlock/SpacingBlock";

export default function Home() {
  const images = [
   "https://res.cloudinary.com/dszkdvuko/image/upload/v1699554386/VOL2WEBP/Screenshot_8_clpqbr.jpg",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699554389/VOL2WEBP/Screenshot_9_tbi9ht.jpg",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699553648/VOL2WEBP/Screenshot_13_ds3vtd.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699553650/VOL2WEBP/Screenshot_19_fpb564.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699553651/VOL2WEBP/Screenshot_20_fnujj3.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699554472/VOL2WEBP/Screenshot_22_dpnee3.jpg",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699554545/VOL2WEBP/Screenshot_29_hbjjcj.jpg",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699553655/VOL2WEBP/Screenshot_36_mpfnxl.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699553656/VOL2WEBP/Screenshot_37_eun3hy.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699554240/VOL2WEBP/Screenshot_2_uc6kgw.jpg",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699553666/VOL2WEBP/Screenshot_5_zc3t5e.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699553667/VOL2WEBP/Screenshot_8_tutju0.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699554667/VOL2WEBP/Screenshot_10_aeu4jb.jpg",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699553670/VOL2WEBP/Screenshot_11_h2cyug.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699553671/VOL2WEBP/Screenshot_13_wwzmbh.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699553673/VOL2WEBP/Screenshot_16_h5e7ps.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699553674/VOL2WEBP/Screenshot_17_zgcm1k.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699553675/VOL2WEBP/Screenshot_18_tm0ydn.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699553677/VOL2WEBP/Screenshot_43_gaqyv2.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699553678/VOL2WEBP/Screenshot_50_arenay.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699553679/VOL2WEBP/Screenshot_55_vms3xc.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699553682/VOL2WEBP/Screenshot_74_ngyswj.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699553683/VOL2WEBP/Screenshot_75_oqxjg9.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699553685/VOL2WEBP/Screenshot_79_bhzhzg.webp"

  ];
  return (
    <div>
            <SpacingBlock size='m'></SpacingBlock>

      <AnimatedImages
        title="SECOND EDITION SS/22 FW/22-23"
        images={images}
      />
            <SpacingBlock size='m'></SpacingBlock>

    </div>
  );
}
