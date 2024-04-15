import Link from "next/link";
import React from "react";
import "@/app/componentsStyles/homesigned.css";

export default function Homesigned() {
  return (
    <div className="hs-main-content">
      <h3>Add and manage your tasks quickly</h3>
      <button className="manage-my-tasks-home-button" type="button">
        <Link href="/manage-tasks">Manage My Tasks</Link>
      </button>
      <h4>Your Upcoming Tasks</h4>
    </div>
  );
}
