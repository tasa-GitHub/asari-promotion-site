import styles from "./keyVisual.module.scss";
import { Sawarabi_Gothic } from "next/font/google";
import Image from "next/image";

const sawaGothic = Sawarabi_Gothic({ subsets: ["latin"], weight: "400" });

export default function KeyVisual() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_left}>
          <h1 className={styles.title}>
            墜落する
            <br />
            宇宙船
            <br />
            からの脱出
          </h1>
          <div className={styles.meteor}>
            <Image
              src="/meteor.gif"
              alt="Meteor"
              fill={true}
              style={{ objectFit: "contain", zIndex: -1 }}
            />
          </div>
        </div>
        <div className={styles.container_right}>
          <Image
            src="/chikyuu.svg"
            alt="Earth"
            width={400}
            height={400}
            className={styles.earth}
          />
          <Image
            src="/mars.svg"
            alt="Mars"
            width={400}
            height={400}
            className={styles.mars}
          />
          <Image
            src="/tsubu.webp"
            alt="tsubu"
            width={300}
            height={200}
            className={styles.tsubu}
          />
          <Image
            src="/rocket.svg"
            alt="Rocket"
            width={150}
            height={150}
            className={styles.rocket}
          />
        </div>
      </div>
    </>
  );
}
