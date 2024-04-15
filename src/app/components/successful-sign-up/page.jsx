import Link from "next/link";
import React from "react";
import "@/app/componentsStyles/ssupage.css";

export default function Ssupage() {
  return (
    <div className="ssu-page-main-content">
      <div className="ssupage-title-container">
        <h2 className="ssupage-title">You are now a Tasksler &#x1F389;!</h2>
      </div>
      <div className="ssupage-paragrapgh-container">
        <p className="ssupage-paragrapgh">
          You have been successfully signed up and can now start adding tasks.
          Happy tasking!
        </p>
      </div>
      <div className="ssupage-button-container">
        <button className="ssupage-button">
          <Link href="/">Start Tasking</Link>
        </button>
      </div>
    </div>
  );
}
