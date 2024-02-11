import { Planet } from "./components/planet/planet";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div>
          <h1>Vinicius Porto</h1>
        </div>
        <div className={styles.spacer}></div>
      </div>
      <div className={styles.content}>
        <p>Bacon ipsum dolor amet cow ground round sirloin shankle.</p>
        <p>Bacon ipsum dolor amet cow ground round sirloin shankle.</p>
        <p>Bacon ipsum dolor amet cow ground round sirloin shankle.</p>
        <p>🐱‍👤</p>
      </div>
      <Planet />
    </main>
  );
}
