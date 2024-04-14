import SignedIn from "./components/signedin";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <SignedIn />
        
    </main>
  );
}
