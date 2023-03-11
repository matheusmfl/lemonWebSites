import styles from "../styles/header.module.scss";
import { Button } from "./Button";

export function Header() {
  return (
    <header className={styles.header}>
      <li>
        <ul>home</ul>
        <ul>serviços</ul>
        <ul>projetos</ul>
        <ul>sobre</ul>
        <ul>
          <Button text="CONTATO" />
        </ul>
      </li>
    </header>
  );
}
