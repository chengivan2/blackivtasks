import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import styles from "./page.module.css";
import "@/app/globals.css"
import Homesigned from "./components/signedins/Homesigned";
import Homenotsigned from "./components/notsignedins/Homenotsigned";

export default async function Home() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const userInfo = await getUser();

  return (isUserAuthenticated) ? (
    <main style={styles.main}>
      <h2>Welcome, {userInfo["first_name"]}</h2>
      <Homesigned />
    </main>
  ) : (
    <main style={styles.main}>
      <Homenotsigned />
    </main>
  );
}
