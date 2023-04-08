import styles from "../styles/sectionFeedback.module.scss";
import Image from "next/image";
import bgFeedback from "../assets/feedbackBackground.svg";
import Carousel from "./SwiperCarrosel";

export function SectionFeedback() {
  return (
    <section className={styles.mainContainer}>
      <Image
        src={bgFeedback}
        alt="Imagem do mapa mundi de fundo"
        className={styles.bg}
      />
      <h2>Depoimentos de clientes</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "400px",
          width: "800px",
        }}
      >
        <Carousel />
      </div>
    </section>
  );
}
