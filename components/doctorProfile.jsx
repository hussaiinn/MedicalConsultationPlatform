import React, { useEffect, useState } from "react";
import Link from "next/link";
import DoctorInfo from "@app/doctorInfo/page";
import ProfileDoc from "../app/profilepagedoc/page";
import { useRouter } from "next/navigation";

const DoctorProfile = ({ data }) => {
  const email = data.email;
  const [info, setInfo] = useState();
  const router = useRouter()

  console.log(email)

  return (
    <>
      {data?.verified === false ? (
        <>
          <p>Please verify yourself click here </p>
          <Link href={{ pathname: "/doctorInfo", query: { name: email } }}>
            <button>Click here</button>
          </Link>
        </>
      ) : (
        <>
          {router.push(`/profilepagedoc?email=${email}`)}
        </>
      )}
    </>
  );
};

export default DoctorProfile;
