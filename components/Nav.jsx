"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import "@styles/nav.css";
import { useUser } from "./userContext";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import profile_male from "/public/images/profile_male.png";

const NavBar = () => {
  // const { userId } = useUser();
  // const uid = userId;
  const { data: session } = useSession();
  const [isSignOut, setisSignOut] = useState(false);
  console.log("logged in",isSignOut);

  // console.log(session?.user)
  // console.log(userId)

  return (
    <div className="conatiner">
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container-fluid">
          <Link href={"/"} style={{ textDecoration: "none" }}>
            <span className="navbar-brand nav-us">DocCare</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse nav-content-us"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active nav-text-us"
                  aria-current="page"
                  href="./"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item nav-item-us">
                <Link
                  className="nav-link nav-text-us"
                  href="/doctorspage?name=all"
                >
                  Find Doctors
                </Link>
              </li>
              <li className="nav-item nav-item-us">
                <Link className="nav-link nav-text-us" href="http://localhost:3002/">
                  Medicine
                </Link>
              </li>
              <li className="nav-item nav-item-us">
                <Link href="about-us" className="nav-link nav-text-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item nav-item-us">
                <a className="nav-link nav-text-us" href="http://localhost:3003/">
                  Chat Bot
                </a>
              </li>

              {session?.user ? (
                <>
                  <li className="nav-item nav-item-us us-button" id="signOut">
                    <button
                      className="nav-link nav-text-us"
                      onClick={() => {
                        signOut();
                        setisSignOut(true);
                      }}
                    >
                      Sign Out
                    </button>
                  </li>

                  <li
                    className="nav-item profile_box"
                    style={{ padding: 0, border: "none" }}
                  >
                    <Link
                      className="nav-link "
                      href={`/user_profile?id=${session?.user?.email}`}
                    >
                      <img
                        src={profile_male.src}
                        className="profile_logo"
                        alt=""
                      />
                    </Link>
                  </li>
                </>
              ) :(
                <>
                  <li className="nav-item nav-item-us us-button" id="login">
                    <Link
                      className="nav-link nav-text-us"
                      href={{
                        pathname: `/login-options`,
                        query: { name: "signin" },
                      }}
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item nav-item-us us-button" id="signUp">
                    <Link
                      className="nav-link nav-text-us"
                      href={{
                        pathname: `/login-options`,
                        query: { name: "signup" },
                      }}
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
