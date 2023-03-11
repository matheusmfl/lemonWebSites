import styles from "../../styles/button.module.scss";

interface propsButton {
  text: string;
}

export function Button({ text }: propsButton) {
  return <button className={styles.button}>{text}</button>;
}
