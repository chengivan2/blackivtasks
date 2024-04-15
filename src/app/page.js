import SignedIn from "./components/signedin";
import Taskmain from "./components/Taskmain";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <SignedIn />
      <Taskmain />
        
    </main>
  );
}
