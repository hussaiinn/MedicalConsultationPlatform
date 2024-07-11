"use client";
// import React, { useEffect } from 'react'
import { useEffect, useState } from "react";
import AdminDocDetails from "@components/admindocDetails";
import Sidebar from "@components/sidebar";
import AdminCard from "@components/adminCard";
import style from "@styles/adminPage.module.css";
import Skeleton from "react-loading-skeleton";
import DotsLoader from "@components/dotsloader";

const DocAdmin = () => {
  const [doctorsData, setDocData] = useState([]);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    const docData = async () => {
      const res = await fetch("/api/admin/docdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      //   console.log(data);
      setDocData(data);
      //   console.log(doctorsData);
    };
    docData();
  }, [flag]);
  //   useEffect(() => {
  //     console.log(doctorsData);
  //     doctorsData.forEach((item)=>{
  //         console.log(item.name)
  //     })
  //   }, [doctorsData]);

  const toUnverify = (id) => {
    console.log(id);
    const updateData = async () => {
      const res = await fetch("/api/admin/docverifyUpdate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          action: "unverify",
        }),
      });
      if (res.ok) {
        alert("updated successfully");
        setFlag(!flag);
      }
    };
    updateData();
  };

  const toVerify = (id) => {
    console.log(id);
    const updateData = async () => {
      const res = await fetch("/api/admin/docverifyUpdate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          action: "verify",
        }),
      });
      if (res.ok) {
        alert("updated successfully");
        setFlag(!flag);
      }
    };
    updateData();
  };

  
  return (
    <div className="flex m-0 h-full w-full">
      {/* {doctorsData?.map((element) => (
        <AdminDocDetails
          docData={element}
          key={element._id}
          toUnverify={toUnverify}
          toverify={toVerify}
        />
        // {console.log(element.name)}
      ))} */}
      <Sidebar />
      {/* <Skeleton width={100} height={100}/> */}
      {/* <DotsLoader/> */}
      <AdminCard
        docs={doctorsData}
        toUnverify={toUnverify}
        toVerify={toVerify}
        callingTable={"Doctors"}
        pagename={"Doctors"}
        // toDelete={todemodelette}
      />
    </div>
  );
};

export default DocAdmin;
