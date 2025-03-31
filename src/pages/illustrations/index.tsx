import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import AboutBlock from "@/blocks/About/about";
import ContactBlock from "@/blocks/Contact/contact";

import AnimatedImages from "@/blocks/AnimatedImages/AnimateImages";
import SpacingBlock from "@/blocks/SpacingBlock/SpacingBlock";
import TechnicalDrawings from "@/blocks/TechDrawings/tech";
import IllustrationBlock from "@/blocks/Illustrations/illustrationsBlock";

export default function Home() {
  const photos = [
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119616/ILLUSTRATIONS/1-min_grazl9.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119651/ILLUSTRATIONS/2-min_lstk2q.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119638/ILLUSTRATIONS/3-min_femhq5.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119655/ILLUSTRATIONS/4-min_hscocc.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119655/ILLUSTRATIONS/5-min_x4seit.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119655/ILLUSTRATIONS/6-min_hgggdu.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119667/ILLUSTRATIONS/7-min_tdbvrj.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119675/ILLUSTRATIONS/8-min_ha673b.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119679/ILLUSTRATIONS/9-min_erlldb.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119682/ILLUSTRATIONS/10-min_ffaczk.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119670/ILLUSTRATIONS/11-min_pdktjl.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119670/ILLUSTRATIONS/12-min_y3fnd4.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119679/ILLUSTRATIONS/13-min_jaxyiz.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119685/ILLUSTRATIONS/14.5-min_lupfde.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119683/ILLUSTRATIONS/14-min_ecpcs7.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119692/ILLUSTRATIONS/16-min_ciz3fm.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119702/ILLUSTRATIONS/17-min_h7eddr.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119707/ILLUSTRATIONS/18-min_eqpl3e.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119692/ILLUSTRATIONS/19-min_qmdrbc.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119703/ILLUSTRATIONS/20-min_uwovlj.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119726/ILLUSTRATIONS/21-min_lxp6nd.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119725/ILLUSTRATIONS/22-min_lmmgtc.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119734/ILLUSTRATIONS/23-min_rmgma3.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119734/ILLUSTRATIONS/24-min_yihojp.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119745/ILLUSTRATIONS/25-min_g8psv5.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119755/ILLUSTRATIONS/26-min_pfwals.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119747/ILLUSTRATIONS/27-min_d2wfzh.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119778/ILLUSTRATIONS/28-min_hoxm5h.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119778/ILLUSTRATIONS/29-min_qoeizm.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119788/ILLUSTRATIONS/30-min_ki3eyt.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119790/ILLUSTRATIONS/31-min_kivwrs.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119838/ILLUSTRATIONS/32-min_suieyy.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119832/ILLUSTRATIONS/33-min_pzl7u0.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119848/ILLUSTRATIONS/34-min_vsxviw.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119855/ILLUSTRATIONS/35-min_sph4ir.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119820/ILLUSTRATIONS/36-min_vsrgxz.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119864/ILLUSTRATIONS/37-min_hwfqve.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119852/ILLUSTRATIONS/38-min_o65i3j.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119880/ILLUSTRATIONS/39-min_dodihv.jpg",

    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119881/ILLUSTRATIONS/40-min_jrjw8y.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119888/ILLUSTRATIONS/41-min_fftgds.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119895/ILLUSTRATIONS/42-min_bbbmrn.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119897/ILLUSTRATIONS/43-min_vc1od3.jpg",
    "https://res.cloudinary.com/dszkdvuko/image/upload/v1699119903/ILLUSTRATIONS/15-min_ew0gmv.jpg",
  ];
  return (
    <div>
      <SpacingBlock size="l"></SpacingBlock>
      <IllustrationBlock
        desc={`FW 20 READY-TO-WEAR \n
The MODS were an incredible 1960's youth sub-culture who shared a common desire to embrace a new found finanical and parental freedom and to stand out above the crowd with regards to originality in fashion, music and social status and what they achieved still infuences aspecs of contemporary life.`}
        title="ILLUSTRATIONS
"
        images={photos}
      ></IllustrationBlock>
      <SpacingBlock size="m"></SpacingBlock>
    </div>
  );
}
