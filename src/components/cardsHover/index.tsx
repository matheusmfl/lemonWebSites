import Image from "next/image";
import styles from "../../styles/cardsHover.module.scss";

interface cardsHoverProps {
  imagem: string;
  color: string;
  margin: string;
}

export function CardsHover({ imagem, color, margin }: cardsHoverProps) {
  return (
    <div
      className={styles.teste}
      style={{
        height: "339px",
        width: "500px",
        position: "relative",
        clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0% 100%)",
        opacity: 0.6,
        marginLeft: `${margin}`,
        overflow: "hidden",
        border: "0px solid white",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          background: `linear-gradient(0deg, ${color} 0%, rgba(130, 33, 111, 0) 100%)`,
          height: "133.37px",
          width: "100%",
          zIndex: "999999",
          opacity: 1,
        }}
      ></div>
      <Image
        src={imagem}
        alt="Imagem de Mockup"
        style={{
          height: "101%",
          width: "100%",
          objectFit: "cover",
          overflowY: "hidden",
        }}
      />
    </div>
  );
}
