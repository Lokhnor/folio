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
        <p>
          A React Native Developer with a background in banking, passionate
          about creating engaging and accessible apps for Android and iOS
          platforms.<br></br>
          <br></br> 4 years of experience in using React Native, React,
          Typescript, Node, and other technologies to deliver user-friendly and
          scalable solutions for various clients and industries.
        </p>
      </div>
      <Planet
        rotationStart={0}
        rotationEnd={360}
        logo="linkedin"
        linkedinHref="https://www.linkedin.com/in/vinicius-pinheiro-porto/"
      />
      <Planet
        rotationStart={180}
        rotationEnd={540}
        logo="github"
        githubHref="https://github.com/Lokhnor"
      />
    </main>
  );
}
