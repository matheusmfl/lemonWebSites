import Image from "next/image";
import styles from "../../styles/cards.module.scss"

interface CardsProps {
  url: string;
  alt: string;
  title: string;
  text: string;
}

export function Cards({ url, alt, title, text }: CardsProps) {
  return (
    <div className={styles.cards}>
      <Image src={url} alt={alt} />
      <h3>{title}</h3>
      <span>{text}</span>
    </div>
  );
}
