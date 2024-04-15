import React from 'react'
import Link from "next/link";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import "@/app/componentsStyles/homenotsigned.css"

export default function Homenotsigned() {
  return (
    <div className="hns-main-content">
      <div className="hns-title-container">
        <h2 className="hns-title">Hi there. Become a Tasksler NOW!</h2>
      </div>
      <div className="hns-paragrapgh-container">
        <p className="hns-paragrapgh">
          You either need to
          <span>
            <button className="hns-login-button">
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
            <button className="hns-register-button">
              <RegisterLink>Sign Up</RegisterLink>
            </button>
          </span>
          to start tasking.
        </p>
      </div>
      <div className="hns-contact-container">
        <p>
          <Link>Contact</Link>
        </p>
      </div>
    </div>
  )
}
