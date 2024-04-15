import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import styles from "./page.module.css";
import { useEffect } from "react";
import { Router, useRouter } from "next/router";


export default async function Home() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => {
        router.push('/add-tasks');
      }, 8000); // Redirect after 8 seconds
    }
  
    return () => {
    }
  }, [user, router])
  

  return (await isAuthenticated()) ? (
    <main style={styles.container}>
      <div><p>Hi, {JSON.stringify(getUser(), null, 2)}</p></div>
    </main>
  ) : (
    <main style={styles.container}>
      <div>Hello</div>
    </main>
  );
}
