import Image from "next/image";
import mockupDesktop from "../assets/mockupDesktop.svg";
import { Button } from "./Button";
import styles from "../styles/sectionMockupDesktop.module.scss";


export function SectionMockupDesktop() {
  return (
    <section className={styles.sectionDesktop}>

      <div>
        <h2>Sites podem ser uma boa oportunidade de marketing digital</h2>

        <span>
          Melhore sua visibilidade tendo um bom posicionamento nos resultados de
          pesquisas do Google.
        </span>

        <Button text="Veja como funciona" />
      </div>

      <Image
        src={mockupDesktop}
        alt="Imagem de um notebook exibindo a tela de um site de arquitetura"
      />
    </section>
  );
}
