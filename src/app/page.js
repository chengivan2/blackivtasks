import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Taskmain from "./components/Taskmain";
import styles from "./page.module.css";
import Notsigned from "./components/notsigned";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();

  return (await isAuthenticated()) ? (
    <main style={styles.container}>
      <Taskmain />
    </main>
  ) : (
    <main style={styles.container}>
      <Notsigned />
    </main>
  );
}
