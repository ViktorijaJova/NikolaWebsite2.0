import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import AboutBlock from "@/blocks/About/about";
import ContactBlock from "@/blocks/Contact/contact";

import AnimatedImages from "@/blocks/AnimatedImages/AnimateImages";
import SpacingBlock from "@/blocks/SpacingBlock/SpacingBlock";
import HeroBlock from "@/blocks/HeroBlock/heroBlock";

export default function Home() {

  return (
    <div>
      <SpacingBlock size="m"></SpacingBlock>
<HeroBlock></HeroBlock>
      <SpacingBlock size="m"></SpacingBlock>
    </div>
  );
}
