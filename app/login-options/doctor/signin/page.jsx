'use client'
import React from "react";
import "@styles/doctorsignin.css";
import undraw1 from "../../../../public/images/undraw_remotely_-2-j6y.svg";
import "@./././fonts/icomoon/style.css";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

const SignIn = () => {
  const {data: session} = useSession();
  const handleSignIn = async () => {
    signIn("google", {
      callbackUrl: `${`/`}`,
    });
  };
  return (
    <>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img src={undraw1.src} alt="Image" class="img-fluid" />
            </div>
            <div class="col-md-6 contents">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div class="mb-4">
                    <h3>Log In</h3>
                    <p class="mb-4">Welcome! Enter your Credentials</p>
                  </div>
                  <form action="#" method="post">
                    <div class="form-group first">
                      <label for="username"></label>
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        placeholder="username"
                      />
                    </div>
                    <div class="form-group last mb-4">
                      <label for="password"></label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="password"
                      />
                    </div>

                    <div class="d-flex mb-5 align-items-center justify-content-between">
                      <label class="control control--checkbox mb-0">
                        <span class="caption">Remember me</span>
                        <input type="checkbox" defaultChecked="checked" />
                        <div class="control__indicator"></div>
                      </label>
                      <span class="ml-auto">
                        <a href="#" class="forgot-pass">
                          Forgot Password
                        </a>
                      </span>
                    </div>

                    <input
                      type="submit"
                      value="Log In"
                      class="btn btn-block btn-primary"
                    />

                    <span class="d-block text-left my-4 text-muted">
                      &mdash; or login with &mdash;
                    </span>

                    <div class="social-login">
                      {/* <a href="#" class="facebook">
                                                    <span class="icon-facebook mr-3"></span>
                                                </a>
                                                <a href="#" class="twitter">
                                                    <span class="icon-twitter mr-3"></span>
                                                </a> */}
                      <a href="#" class="google" onClick={handleSignIn}>
                        <span class="icon-google mr-3"></span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
