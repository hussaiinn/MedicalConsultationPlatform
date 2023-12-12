"use client";
import React, { useEffect } from "react";
// import Overlay from '../../../components/overlay'
// import UsersignUp from './signUp/signup'
// import UsersignUp from '@components/signup'
import UsersignUp from "@components/signup";
// import UserSignIn from '../../../components/signin'
import UserSignIn from "@components/signin";
import Overlay from "@components/overlay";
import "@././styles/usersignInUp.css";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import VerifyLoader from "@components/verifyloader";

const Patient = () => {
  const searchParams = useSearchParams();
  const reqst = searchParams.get("reqst");
  // console.log('search params', reqst);
  const [issubmitlogin, setisSubmitLogin] = useState(false);

  const [overlay, setOverlay] = useState(false);
  const [nameprocess, setnameProcess] = useState(null)

  const handleLoader = (value, name) => {
    setisSubmitLogin(value);
    setnameProcess(name)
    console.log(name)
  };

  useEffect(() => {
    if (reqst === "signup") {
      setOverlay(true);
      console.log("heyyyy");
    }
  }, []);

  const handlesingup = () => {
    setOverlay(true);
  };

  const handlesignin = () => {
    setOverlay(false);
  };

  return (
    <>
      {issubmitlogin ? (
        <VerifyLoader name={nameprocess}/>
      ) : (
        <div
          className={`container ${overlay ? "right-panel-active" : ""}`}
          id="container"
        >
          <UsersignUp isloading={handleLoader}/>
          <UserSignIn isloading={handleLoader} />
          <Overlay signIn={handlesignin} signUp={handlesingup} />
        </div>
      )}
    </>
  );
};

export default Patient;
