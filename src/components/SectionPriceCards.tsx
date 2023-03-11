import { PriceCard } from "./priceCard";
import styles from "../styles/sectionPriceCards.module.scss";
import background from '../assets/backgroundPriceCard.svg'
import Image from "next/image";
export function SectionPriceCards() {
  return (
    <section className={styles.mainContainer}>
        <Image src={background} alt='Background alternativo' className={styles.bg}/>
      <h2>Valores iniciais para alguns dos nossos serviços</h2>

      <div className={styles.containerCards}>
        <PriceCard
          midCard={false}
          title="Landing pages"
          description1="Copy simples para divulgação"
          description2="Primeira campanha ADS inclusa"
          description3="CTA’s para redes sociais"
          description4="Tratamento na imagem do produto"
          price="R$: 600,00"
        />

        <PriceCard
          midCard={true}
          title="Landing pages"
          description1="Copy simples para divulgação"
          description2="Primeira campanha ADS inclusa"
          description3="CTA’s para redes sociais"
          description4="Tratamento na imagem do produto"
          price="R$: 600,00"
        />

        <PriceCard
          midCard={false}
          title="Landing pages"
          description1="Copy simples para divulgação"
          description2="Primeira campanha ADS inclusa"
          description3="CTA’s para redes sociais"
          description4="Tratamento na imagem do produto"
          price="R$: 600,00"
        />
      </div>
    </section>
  );
}
