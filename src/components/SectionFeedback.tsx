import styles from "../styles/sectionFeedback.module.scss";
import LeftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import Image from "next/image";
import bgFeedback from "../assets/feedbackBackground.svg";
import avatar from '../assets/avatarFeedback.svg'


export function SectionFeedback() {
  return (
    <section className={styles.mainContainer}>
      <Image src={bgFeedback} alt="Imagem do mapa mundi de fundo" className={styles.bg} />
      <h2>Depoimentos de clientes</h2>

      <div className={styles.secondContainer}>
        <Image src={avatar} alt='Avatar com foto de moça' className={styles.avatar}/>
        <Image src={LeftArrow} alt="Seta para esquerda" />
        <div className={styles.feedbackContainer}>
          <span>
            Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.Norem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum, ac aliquet odio mattis.
          </span>
          <h4>Depoimento de parceiros</h4>
        </div>
        <Image src={rightArrow} alt="Seta para direita" />
      </div>
    </section>
  );
}
