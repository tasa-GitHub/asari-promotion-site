import styles from "./keyVisual.module.scss";
import { Sawarabi_Gothic } from "next/font/google";

const sawaGothic = Sawarabi_Gothic({ subsets: ["latin"], weight: "400" });

export default function KeyVisual() {
  return (
    <>
      <>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingTop: "56.2225%",
            paddingBottom: 0,
            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
            marginTop: "1.6em",
            marginBottom: "0.9em",
            overflow: "hidden",
            borderRadius: 8,
            willChange: "transform",
          }}
        >
          <iframe
            loading="lazy"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              border: "none",
              padding: 0,
              margin: 0,
            }}
            src="https://www.canva.com/design/DAFn6c6UIbk/watch?embed"
            allowFullScreen="allowfullscreen"
            allow="fullscreen"
          ></iframe>
        </div>
      </>
    </>
  );
}
