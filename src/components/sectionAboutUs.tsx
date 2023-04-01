import suport from "../assets/imgCards/suporteCardsImg.svg";
import google from "../assets/imgCards/googleCardsImg.svg";
import experiencia from "../assets/imgCards/experienciaCardsImg.svg";
import vendas from "../assets/imgCards/vendasCardsImg.svg";
import { CardsHover } from "./cardsHover";

export function SectionAboutUs() {
  return (
    <section
      style={{
        marginTop: "140px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
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
          borderImageSource:
            "radial-gradient(40.76% 5870% at 50% 100%, #4C9893 0%, rgba(255, 255, 255, 0) 100%)",
          cursor: "default",
        }}
      >
        Conheça nossos serviços
      </span>
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
          overflow: "hidden",
        }}
      >
        <div style={{ width: "calc(100% + 580px)", display: "flex" }}>
          <CardsHover color="#77344E" imagem={google} margin="-38px" />
          <CardsHover color="#480001" imagem={vendas} margin="-98px" />
          <CardsHover color="#4A4A4A" imagem={experiencia} margin="-98px" />
          <CardsHover color="#FEB845" imagem={suport} margin="-98px" />
        </div>
      </div>
    </section>
  );
}
