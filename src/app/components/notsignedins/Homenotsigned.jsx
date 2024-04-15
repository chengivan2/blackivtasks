"use client";

import React from "react";
import Link from "next/link";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import "@/app/componentsStyles/homenotsigned.css";

export default function Homenotsigned() {
  return (
    <div className="hns-main-content">
      <div className="hns-title-container">
        <h2 className="hns-title">
          Hi there. Login or join other Taskslers NOW!
        </h2>
      </div>
      <div className="hns-paragraph-container">
        <p className="hns-paragraph">You either need to</p>

        <span>
          <LoginLink postLoginRedirectURL="/">
            <button className="hns-login-button hns-button">Sign In</button>
          </LoginLink>
          <br />
        </span>

        <div className="hns-btns-divider">
          <hr />
          <p>
            <b>OR</b>
          </p>
          <hr />
        </div>

        <span>
          <RegisterLink>
            <button className="hns-register-button hns-button">Sign Up</button>
          </RegisterLink>
          <br />
        </span>

        <p>
          <span>
            to view and manage your tasks.
            <br />
          </span>
        </p>
      </div>
      <div className="hns-contact-container">
        <p>
          Need help? <Link href="/">Contact us</Link>.
        </p>
      </div>
    </div>
  );
}
