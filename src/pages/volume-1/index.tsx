import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import AboutBlock from "@/blocks/About/about";
import ContactBlock from "@/blocks/Contact/contact";

import AnimatedImages from "@/blocks/AnimatedImages/AnimateImages";
import SpacingBlock from "@/blocks/SpacingBlock/SpacingBlock";

export default function Home() {
  const images = [
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551026/VOL1WEBP/01_c2runp.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551027/VOL1WEBP/02_ww8bqq.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551028/VOL1WEBP/04_fxvtcx.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551069/VOL1WEBP/023_bfrt2n.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551090/VOL1WEBP/025_axwod3.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551077/VOL1WEBP/027_rxekc7.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699550998/VOL1WEBP/028_ydrufn.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551076/VOL1WEBP/029_u2oite.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551098/VOL1WEBP/030_vqjmoh.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551024/VOL1WEBP/031_jei8er.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551026/VOL1WEBP/034_dgcg0l.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551026/VOL1WEBP/036_yyuwnb.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551154/VOL1WEBP/Screenshot_7_ovxopz.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551154/VOL1WEBP/Screenshot_8_rmo63o.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551199/VOL1WEBP/Screenshot_9_bknquv.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551200/VOL1WEBP/Screenshot_16_mdlrhy.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551201/VOL1WEBP/Screenshot_17_sanike.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699552033/VOL1WEBP/Screenshot_18_irixag.jpg",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551203/VOL1WEBP/Screenshot_26_sonsaa.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551153/VOL1WEBP/Screenshot_27_okwy17.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551205/VOL1WEBP/Screenshot_30_wbdwjw.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699552296/VOL1WEBP/Screenshot_37_vm3tbx.jpg",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551205/VOL1WEBP/Screenshot_32_tpv5nh.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551206/VOL1WEBP/Screenshot_33_miilfp.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699552357/VOL1WEBP/Screenshot_35_ws6lw7.jpg",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551222/VOL1WEBP/Screenshot_43_k31tih.webp",
"https://res.cloudinary.com/dszkdvuko/image/upload/v1699551223/VOL1WEBP/Screenshot_44_xx2gap.webp"

  ];
  return (
    <div>
      <SpacingBlock size='l'></SpacingBlock>
      <AnimatedImages
        title="First Edition SS/21 FW/21-22"
        images={images}
      />
            <SpacingBlock size='m'></SpacingBlock>
           


    </div>
  );
}
