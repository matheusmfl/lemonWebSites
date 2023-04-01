import styles from "../styles/sectionCards.module.scss";
import { Cards } from "./Cards";
import iconResponsivo from "../assets/iconResponsivo.svg";
import iconCredibilidade from "../assets/iconCredibilidade.svg";
import iconSeo from "../assets/iconSeo.svg";
import iconVendas from "../assets/iconVendas.svg";

export function SectionIconsCards() {
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
          alt="Icone de duas mãos apertando simbolizando um negócio fechado"
          text="Escale suas vendas e aumente o retorno sobre o investido em marketing"
          title="Vendas"
          url={iconVendas}
        />

        <Cards
          alt="Icone de um computador"
          text="Sites bem construídos aumentam credibilidade e segurança"
          title="Credibilidade"
          url={iconCredibilidade}
        />

        <Cards
          alt="Icone de um computador"
          text="Nossas aplicações são adaptadas para diversos dispositivos"
          title="Responsivo"
          url={iconResponsivo}
        />

        <Cards
          alt="Icone de uma busca em página web"
          text="Melhore o ranking do seu negócio em pesquisar do Google"
          title="SEO"
          url={iconSeo}
        />
      </div>
    </section>
  );
}
