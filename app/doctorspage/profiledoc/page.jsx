"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import BackgroundImg from "@components/background";
import DoctorProfile from "@components/docprofile";
import style from '@styles/userdocprofile.module.css'

const ProfileforDoc = ({ params }) => {
  const searchParams = useSearchParams();
  const [docData, setDocData] = useState();
  useEffect(() => {
    const getData = async () => {
      let email = searchParams.get("id");
      console.log(email);
      const response = await fetch(`/api/docs/${email}/docinfo`);
      const data = await response.json();
      setDocData(data);
    };
    getData();
  }, []);
  console.log(docData);
  return (
    <div className={style.main}>
      <BackgroundImg />
      <DoctorProfile />
      {/* <div className="front"></div> */}
    </div>
  );
};

export default ProfileforDoc;
