import KeyVisual from "./keyVisual";
import Container from "./container";

import styles from "./page.module.scss";
import { DotGothic16, Sawarabi_Gothic } from "next/font/google";

const dg16 = DotGothic16({ subsets: ["latin"], weight: "400" });
const sawaGothic = Sawarabi_Gothic({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <KeyVisual />
      <Container />
    </>
  );
}
