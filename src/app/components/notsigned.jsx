import Link from "next/link";
import React from "react";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import "@/app/componentsStyles/notsigned.css"

export default function Notsigned() {
  return (
    <div className="ns-main-content">
      <div className="ns-title-container">
        <h2 className="ns-title">Hi there. Become a Tasksler NOW!</h2>
      </div>
      <div className="ns-paragrapgh-container">
        <p className="ns-paragrapgh">
          You either need to
          <span>
            <button className="ns-login-button">
              <LoginLink>Sign In</LoginLink>
            </button>
          </span>
          <span>
            <br />
          </span>
          or
          <span>
            <br />
          </span>
          <span>
            <button className="ns-register-button">
              <RegisterLink>Sign Up</RegisterLink>
            </button>
          </span>
          to start tasking.
        </p>
      </div>
      <div className="ns-contact-container">
        <p>
          <Link>Contact</Link>
        </p>
      </div>
    </div>
  );
}
