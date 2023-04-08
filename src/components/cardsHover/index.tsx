import Image, { StaticImageData } from "next/image";
import styles from "../../styles/cardsHover.module.scss";

interface cardsHoverProps {
  imagem: StaticImageData;
  margin: string;
  type: "left" | "right" | "both";
}

// 30% 0, 100% 0, 100% 100%, 0 100% - direita
// 0 0, 100% 0, 70% 100%, 0 100% - esquerda
// 30% 0, 100% 0, 70% 100%, 0 100% - centro
export function CardsHover({ imagem, type, margin }: cardsHoverProps) {
  return (
    <div
      className={styles.teste}
      style={{
        height: "360px",
        width: "580px",
        position: "relative",
        clipPath: `polygon(${
          type === "both"
            ? "30% 0, 100% 0, 70% 100%, 0 100%"
            : type === "left"
            ? "0 0, 100% 0, 70% 100%, 0 100%"
            : "30% 0, 100% 0, 100% 100%, 0 100%"
        })`,
        opacity: 0.6,
        marginLeft: `${margin}`,
        overflow: "hidden",
        border: "0px solid white",
      }}
    >
      <Image
        src={imagem}
        quality={100}
        alt="Imagem de Mockup"
        style={{
          width: "100%", // Defina a largura da imagem como 100% para ocupar a div
          height: "100%", // Defina a altura da imagem como 100% para ocupar a div
          objectFit: "cover", // Defina o objectFit como cover para que a imagem seja redimensionada corretamente
          objectPosition: "left center", // Defina a posição da imagem como centro
          position: "absolute", // Defina a posição como absoluta para que a imagem fique dentro da div
          top: 0, // Alinhe a imagem no topo da div
          left: 0, // Alinhe a imagem na esquerda da div
        }}
      />
    </div>
  );
}
