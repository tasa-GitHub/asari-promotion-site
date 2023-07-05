import styles from "./keyVisual.module.scss";
import { Sawarabi_Gothic } from "next/font/google";

const sawaGothic = Sawarabi_Gothic({ subsets: ["latin"], weight: "400" });

export default function keyVisual() {
  return (
    <>
      <div className={sawaGothic.className}>
        <div className={styles.keyVisual}>
          <h1>
            墜落する
            <br />
            宇宙船からの<span className={styles.highlight}>脱出</span>
          </h1>
        </div>
      </div>
    </>
  );
}
