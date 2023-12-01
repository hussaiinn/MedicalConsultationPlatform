"use client";
import React from "react";
import style from "@styles/docsignup.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import logo from '@public/images/logo.png'
import google from '@public/images/google.png'

const SignUp = () => {
  const router = useRouter();
  const { status, data: session } = useSession();

  const handleSignIn = async () => {
    signIn("google", {
      callbackUrl: `${"/"}`,
    });
  };

  return (
    <>
      <div className={style.main}>
        <div className={style.bg}>
          <div className={style["intro-text"]}>
            <h1 className={style.head}>Sign In To DocCare</h1>
            <h3 className={style["head-disc"]}>Lorem ipsum is simply </h3>
            <span className={style.disc}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo blanditiis dolore, saepe ab reprehenderit excepturi
              facilis tempore, illum vero sunt tempora nesciunt asperiores
              voluptatum accusantium quisquam repellat a aspernatur numquam.
            </span>
          </div>
          <div className={style.img}>
            <img src={logo.src} alt="" />
          </div>

          <div className={style.card}>
            <div className={style["card-up"]}>
              <div className={style["card-left"]}>
                <h3 className={style.cardHead}>Welcome To DocCare</h3>
                <h2 className={style.sign}>Sign Up</h2>
              </div>
              <div className={style["card-right"]}>
                <span className={style.acc}>No Account?</span>
                <span className={style.up}>Sign Up</span>
              </div>
            </div>
            <div className={style["card-button"]}>
              <button type="button" className={style.button4} value="Sign" onClick={handleSignIn}>
                {" "}
                <img src={google.src} className={style["google-img"]} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
