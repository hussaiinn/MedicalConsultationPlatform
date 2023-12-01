"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import UserProfile from "@components/userProfile";
import { useSearchParams } from "next/navigation";
import DoctorProfile from "@components/doctorProfile";

const ProfileUser = () => {
  const [recData, setRecData] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const getData = async () => {
      const email = searchParams.get("id");
      const response = await fetch(`/api/users/${email}/userdata`);

      const data = await response.json();
      setRecData(data);
    };
    getData();
  }, []);

  if (!recData) return <div>Loading....</div>;
  return (
    <>
      {recData?.usertype === "Doctor" ? (
        <DoctorProfile data={recData}/>
      ) : recData?.usertype === "patient" ? (
        <UserProfile data={recData} />
      ) : (
        <></>
      )}
    </>
  );
};

export default ProfileUser;
