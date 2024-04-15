"use client";

import React from "react";
import Link from "next/link";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import "@/app/componentsStyles/homenotsigned.css";

export default function Homenotsigned() {
  return (
    <div className="hns-main-content">
      <div className="hns-title-container">
        <h2 className="hns-title">Hi there. Become a Tasksler NOW!</h2>
      </div>
      <div className="hns-paragraph-container">
        <p className="hns-paragraph">You either need to</p>

        <span>
          <LoginLink>
            <button className="hns-login-button hns-button">Sign In</button>
          </LoginLink>
          <br />
        </span>

        <p className="hns-btns-divider">
          <hr />
          OR
          <hr />
        </p>

        <span>
          <RegisterLink>
            <button className="hns-register-button hns-button">Sign UP</button>
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
          <Link href="/">Contact</Link>
        </p>
      </div>
    </div>
  );
}
