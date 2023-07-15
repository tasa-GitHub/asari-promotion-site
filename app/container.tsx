import Intro from "./intro";

import styles from "./container.module.scss";
import { DotGothic16 } from "next/font/google";

const dg16 = DotGothic16({ subsets: ["latin"], weight: "400" });

export default function Container() {
  return (
    <div className={styles.contents}>
      <div className={styles.container}>
        <Intro />
      </div>
    </div>
  );
}
