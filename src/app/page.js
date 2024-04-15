import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import styles from "./page.module.css";
import "@/app/globals.css";
import Homesigned from "./components/signedins/Homesigned";
import Homenotsigned from "./components/notsignedins/Homenotsigned";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  return isUserAuthenticated ? (
    <main className={styles.main}>
      <Homesigned />
    </main>
  ) : (
    <main className={styles.main}>
      <Homenotsigned />
    </main>
  );
}
