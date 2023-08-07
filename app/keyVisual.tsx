import styles from "./keyVisual.module.scss";

import { Sawarabi_Gothic } from "next/font/google";

import Image from "next/image";
import asari from "../public/asari.png";
import meteor from "../public/meteor.gif";
import earth from "../public/earth.svg";
import mars from "../public/mars.svg";
import stones from "../public/stones.webp";
import rocket from "../public/rocket.svg";

const sawaGothic = Sawarabi_Gothic({ subsets: ["latin"], weight: "400" });

export default function KeyVisual() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          墜落する
          <br />
          宇宙船
          <br />
          からの脱出
        </h1>
        <Image src={asari} alt="asari" className={styles.asari} />
        <h2 className={styles.group}>謎解き団体あさりぐるーぷ</h2>
        <Image src={meteor} alt="Meteor" className={styles.meteor} />
        <Image src={earth} alt="Earth" className={styles.earth} />
        <Image src={mars} alt="Mars" className={styles.mars} />
        <Image src={stones} alt="stones" className={styles.tsubu} />
        <Image src={rocket} alt="Rocket" className={styles.rocket} />
      </div>
    </>
  );
}
