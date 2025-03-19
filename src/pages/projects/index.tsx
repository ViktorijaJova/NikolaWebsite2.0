import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import AboutBlock from "@/blocks/About/about";
import ContactBlock from "@/blocks/Contact/contact";
import SpacingBlock from "@/blocks/SpacingBlock/SpacingBlock";
import Monographs from "@/blocks/Pdfs/pdfLists";



export default function Home() {
 
  return (
    <div>
      <SpacingBlock size='m'></SpacingBlock>
      <Monographs></Monographs>
    <SpacingBlock size='m'></SpacingBlock>

    </div>
  );
}
