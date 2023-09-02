import Button from "../Button";
import styles from "./styles.module.css";

export default function Card({ posterImg, title, description }) {
  return (
    <div className={styles.container}>
      <img className={styles.posterimg} src={posterImg} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button text="Compre Agora" />
      </div>
    </div>
  );
}
