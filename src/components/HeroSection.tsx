import Image from "next/image";
import cubicImage from "../assets/cubicHeroMain.svg";
import { Button } from "./Button";
import styles from "../styles/mainContent.module.scss";

export function HeroSection() {
  return (
    <main className={styles.mainContent}>
      <Image src={cubicImage} alt="Imagem de cubo em 3D" />
      <div className={styles.divMain}>
        <h1>
          Marketing alinhado a tecnologia atuando no crescimento da sua marca.
        </h1>

        <span>
          Marketing alinhado a tecnologia atuando no crescimento da sua marca.
        </span>

        <Button text="Nosso serviços" />
      </div>
    </main>
  );
}
