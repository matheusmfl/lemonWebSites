import styles from "../styles/sectionMockupMobile.module.scss";
import Image from "next/image";
import mockupIphone from "../assets/mockupIphone.svg";
import { Button } from "./Button";

export function SectionMockupMobile() {
  return (
    <section className={styles.sectionMobile} style={{ position: "relative" }}>
      <div className={styles.ellipse}></div>
      <Image
        src={mockupIphone}
        alt="Iphone mostrando um site de corretora de seguros"
      />

      <div>
        <h2>Sites podem ser uma boa oportunidade de marketing digital</h2>

        <span>
          Melhore sua visibilidade tendo um bom posicionamento nos resultados de
          pesquisas do Google.
        </span>

        <Button text="Veja como funciona" />
      </div>
      <div
        style={{
          position: "absolute",
          left: "-350px",
          top: 0,
          bottom: "-200px",
          width: "50%",
          height: "100%",
          zIndex: "-1",
          background:
            "linear-gradient(235.57deg, #006267 20.35%, rgba(0, 98, 103, 0) 86.5%)",
          filter: "blur(122.5px)",
          borderRadius: "50%",
        }}
      ></div>
    </section>
  );
}
