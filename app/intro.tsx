import styles from "./intro.module.scss";
import { DotGothic16 } from "next/font/google";

const dg16 = DotGothic16({ subsets: ["latin"], weight: "400" });

export default function Intro() {
  return (
    <div className={styles.intro}>
      <h1 className={styles.index}>Introduction</h1>
      <p>あなたは、校外活動で火星へ行く一人の生徒。</p>
      <p>未来の学校では生徒一人ひとりに</p>
      <p>アシスタントアンドロイド(A3-R1)スペースシャトルが配られている。</p>
      <p>しかし乗ってしばらくすると、</p>
      <p>アステロイドベルトアラートが鳴り、</p>
      <p>30分以内に脱出しないと墜落することになった。</p>
      <p>あなたは無事に脱出することができるか―――――――</p>
    </div>
  );
}
