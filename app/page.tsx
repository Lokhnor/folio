import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div>
          <h1>Vinicius Porto</h1>
        </div>
        <div>
          <p>he/him</p>
        </div>
        <div className={styles.spacer}></div>
      </div>
      <div className={styles.content}>
        <p>Passionate learner, professional Engineer.</p>
        <p>React Native Developer by day, Game Developer by night.</p>
        <p>🐱‍👤</p>
        <p></p>
      </div>
      <div className={styles.circle}></div>
      <div className={styles.ball}></div>
    </main>
  );
}
