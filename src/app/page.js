"use client";

import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const { isAuthenticated, user } = useKindeBrowserClient();
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => {
        router.push('/add-tasks');
      }, 8000); // Redirect after 8 seconds
    }
  
    return () => {
    }
  }, [isAuthenticated, router])
  

  return (isAuthenticated) ? (
    <main style={styles.container}>
      <div><p>Hi, {JSON.stringify(user, null, 2)}</p></div>
    </main>
  ) : (
    <main style={styles.container}>
      <div>Hello</div>
    </main>
  );
}
