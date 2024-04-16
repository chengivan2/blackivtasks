import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import React from "react";
import "@/app/componentsStyles/homesigned.css";

export default async function Homesigned() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const userInfo = await getUser();
  return isUserAuthenticated ? (
    <div className="hs-main-content">
      <h2>Welcome, {userInfo.given_name}</h2>
      <h3>Add and manage your tasks quickly</h3>
      <Link href="/manage-tasks">
        <button className="manage-my-tasks-home-button" type="button">
          Manage My Tasks
        </button>
      </Link>
      <p className="hs-log-out-text">
        Not your account? <LogoutLink>Logout</LogoutLink>
      </p>
      <h4>Your Upcoming Tasks</h4>
    </div>
  ) : (
    <div className="hs-main-content">
      <h2>You need to Login</h2>

      <LoginLink>
        <button className="manage-my-tasks-home-button" type="button">
          Login
        </button>
      </LoginLink>

      <h4>Your Upcoming Tasks</h4>
      <p>Your tasks will appear here once you are logged in.</p>
    </div>
  );
}