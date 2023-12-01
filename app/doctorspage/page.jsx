"use client";
import React, { useEffect, useState } from "react";
import NavBar from "@components/Nav";
import OfferBox from "@components/offer";
import styles from "@styles/doctorspage.module.css";
import ProfileCard from "@components/profileCardList";
import GrayBody from "@components/graybody";
import { useSearchParams } from "next/navigation";

const DoctorListPage = () => {
  const [receivedData, setReceivedData] = useState(null);
  // const [isClient, setIsClient] = useState(false)
  // const [queryparams, setQueryParams] = useState(null);
  const searchParams = useSearchParams();
  const [queryparams, setQueryParams] = useState(null)
  
  useEffect(() => {
    const getData = async () => {
      setQueryParams(searchParams.get("name") || "all");
      console.log(queryparams);
      console.log("in get data");
      try {
        const response = await fetch(
          `/api/docs/docprofile/${queryparams}/docprofileinfo`
        );
        const data = await response.json();
        setReceivedData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [queryparams]);

  const filteredData =
    queryparams !== "all" && receivedData
      ? receivedData.filter((doctor) => doctor.treatment.includes(queryparams))
      : receivedData;

  console.log("..", receivedData);

  return (
    <>
      {/* <GrayBody /> */}
      <NavBar />
      <OfferBox />
      <div className={styles.doctorList}>
        <h2>Top Doctors Available</h2>
        {filteredData &&
          filteredData.map((d) => <ProfileCard key={d.id} data={d} />)}
      </div>
    </>
  );
};

export default DoctorListPage;
