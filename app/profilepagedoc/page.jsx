"use client";
import React from "react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const ProfileDoc = ({ params }) => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [info, setInfo] = useState(null);
  console.log(info);
  useEffect(() => {
    try {
      const getData = async () => {
        const response = await fetch(`/api/docs/${email}/docinfo`);

        const docinfo = await response.json();
        setInfo(docinfo);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {info ? (
        <>
          <h1 className="border-red-400">{info.firstName}</h1>
          <h3>{info.lastName}</h3>
          <h3>{info.address}</h3>
          <h3>{info.mobile}</h3>
          <h3>{info.fees}</h3>
        </>
      ) : (
        <></>
      )}
      <Link
        // href={`profilepagedoc/appointments/?id=${data.email}`}
        href={{
          pathname: "profilepagedoc/appointments",
          query: { id: email, ut: 2 },
        }}
        className="mt-2 text-center"
      >
        {" "}
        <button>Appoitnment page</button>{" "}
      </Link>
    </div>
  );
};

export default ProfileDoc;
