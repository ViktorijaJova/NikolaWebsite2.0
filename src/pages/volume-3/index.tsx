import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import AboutBlock from "@/blocks/About/about";
import ContactBlock from "@/blocks/Contact/contact";

import AnimatedImages from "@/blocks/AnimatedImages/AnimateImages";
import SpacingBlock from "@/blocks/SpacingBlock/SpacingBlock";

export default function Home() {
  const images = [
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699553493/VOL3WEBP/1_r59l9f.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699553501/VOL3WEBP/5_mqe9sm.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699553496/VOL3WEBP/12_oeum5s.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699553514/VOL3WEBP/17_xe5fu2.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699553503/VOL3WEBP/22_bhemw5.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699555831/VOL3WEBP/Screenshot_6_xlcwql.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699553532/VOL3WEBP/Screenshot_7_yu72zk.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699553532/VOL3WEBP/Screenshot_8_egsw9u.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699553532/VOL3WEBP/Screenshot_9_z2ifse.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699553533/VOL3WEBP/Screenshot_10_mdx4oo.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699553533/VOL3WEBP/Screenshot_11_qekzbr.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699553533/VOL3WEBP/Screenshot_12_twtn8x.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699553534/VOL3WEBP/Screenshot_15_kz49wj.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699553534/VOL3WEBP/Screenshot_14_hcvj5h.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699553534/VOL3WEBP/Screenshot_13_xjo6ou.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699553539/VOL3WEBP/Screenshot_10_lc2ve4.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699553540/VOL3WEBP/Screenshot_11_aoj419.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699553542/VOL3WEBP/Screenshot_15_ljof2v.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1704396767/VOL3WEBP/Screenshot_1_bk6smy.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1704396767/VOL3WEBP/Screenshot_2_ngxh4h.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1704396767/VOL3WEBP/Screenshot_3_nt8t3u.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1704396767/VOL3WEBP/Screenshot_4_wpdyrq.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1704396767/VOL3WEBP/Screenshot_6_uvnldu.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1704396767/VOL3WEBP/Screenshot_5_diquyi.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1709226346/VOL3WEBP/1.24_vcqxmy.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1709226346/VOL3WEBP/2.24_j2h8ic.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1709226346/VOL3WEBP/3.24_ybcctl.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1709226345/VOL3WEBP/4.24_kje29k.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1709226346/VOL3WEBP/5.24_vcvprd.webp",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1709226348/VOL3WEBP/6.24_j6jyvw.webp",
  ];
  return (
    <div>
      <SpacingBlock size="l"></SpacingBlock>

      <AnimatedImages
        title="
        THIRD EDITION SS/23 FW/23-24
        "
        images={images}
      />
      <SpacingBlock size="m"></SpacingBlock>
    </div>
  );
}
