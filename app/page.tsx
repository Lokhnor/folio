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
      <Planet rotationStart={0} rotationEnd={360} logo="linkedin" />
      <Planet rotationStart={180} rotationEnd={540} logo="github" />
      <Planet rotationStart={360} rotationEnd={0} logo="linkedin" />
      <Planet rotationStart={540} rotationEnd={180} logo="github" />
    </main>
  );
}
