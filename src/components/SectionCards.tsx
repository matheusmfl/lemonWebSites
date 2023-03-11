import styles from "../styles/sectionCards.module.scss";
import { Cards } from "./Cards";
import iconResponsivo from "../assets/iconResponsivo.svg";

export function SectionCards() {
  return (
    <section className={styles.sectionCards}>
      <span
        style={{
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "22px",
          lineHeight: "120%",
          textAlign: "center",
          display: "block",
          marginBottom: "100px",
          paddingTop: "80px",
          borderTop: "1px solid transparent",
          borderImageSlice: "1",
          width: "100%",
          borderImageSource:
            "radial-gradient(40.76% 5870% at 50% 100%, #4C9893 0%, rgba(255, 255, 255, 0) 100%)",
          cursor: "default",
        }}
      >
        Conheça nossos serviços
      </span>

      <div className={styles.divCards}>
        <Cards
          alt="Icone de um computador"
          text="Nossas aplicações são adaptadas para diversos dispositivos"
          title="Responsivo"
          url={iconResponsivo}
        />

        <Cards
          alt="Icone de um computador"
          text="Nossas aplicações são adaptadas para diversos dispositivos"
          title="Responsivo"
          url={iconResponsivo}
        />

        <Cards
          alt="Icone de um computador"
          text="Nossas aplicações são adaptadas para diversos dispositivos"
          title="Responsivo"
          url={iconResponsivo}
        />

        <Cards
          alt="Icone de um computador"
          text="Nossas aplicações são adaptadas para diversos dispositivos"
          title="Responsivo"
          url={iconResponsivo}
        />
      </div>
    </section>
  );
}
