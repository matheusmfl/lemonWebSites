import styles from "../../styles/priceCard.module.scss";
import { Button } from "../Button";
interface priceCardProps {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  price: string;
  midCard: boolean;
}
export function PriceCard({
  title,
  description1,
  description2,
  description3,
  description4,
  price,
  midCard,
}: priceCardProps) {
  return (
    <>
      {midCard == true && (
        <div className={styles.middleCardPricing}>
          <h3>{title}</h3>

          <div className={styles.descriptionContent}>
            <span>{description1}</span>
          </div>
          <div className={styles.descriptionContent}>
            <span>{description2}</span>
          </div>
          <div className={styles.descriptionContent}>
            <span>{description3}</span>
          </div>
          <div className={styles.descriptionContent}>
            <span>{description4}</span>
          </div>

          <div className={styles.divPriceContent}>
            <p>a partir de:</p>
            <span className={styles.price}>{price}</span>
            <Button text="Contratar agora!" />
          </div>
        </div>
      )}

      {midCard == false && (
        <div className={styles.cardPricing}>
          <h3>{title}</h3>

          <div className={styles.descriptionContent}>
            <span>{description1}</span>
          </div>
          <div className={styles.descriptionContent}>
            <span>{description2}</span>
          </div>
          <div className={styles.descriptionContent}>
            <span>{description3}</span>
          </div>
          <div className={styles.descriptionContent}>
            <span>{description4}</span>
          </div>

          <div className={styles.divPriceContent}>
            <p>a partir de:</p>
            <span className={styles.price}>{price}</span>
            <Button text="Contratar agora!" />
          </div>
        </div>
      )}
    </>
  );
}
