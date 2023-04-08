import suport from "../assets/imgCards/suporte.png";
import google from "../assets/imgCards/google.png";
import experiencia from "../assets/imgCards/experienciaImg.png";
import vendas from "../assets/imgCards/vendasCardsImg.png";
import { CardsHover } from "./cardsHover";
import styles from "../styles/sectionAboutUs.module.scss";

export function FloatCards() {
  return (
    <section
      style={{
        marginTop: "140px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <span className={styles.spanContainer}>Conheça nossos serviços</span>
      <div
        style={{
          height: "432px",
          width: "1440px",
          background: "#141414",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          gap: 0,
          paddingTop: "25px",
        }}
      >
        <div style={{ width: "100%", display: "flex" }}>
          <CardsHover imagem={google} margin="0px" type="left" />
          <CardsHover imagem={vendas} margin="-140px" type="both" />
          <CardsHover imagem={experiencia} margin="-140px" type="both" />
          <CardsHover imagem={suport} margin="-140px" type="right" />
        </div>
      </div>
    </section>
  );
}
