"use client";
import React, { useEffect, useState } from "react";
import undraw from "../../public/images/undraw_doctors_p6aq.svg";
import style from "@styles/doctorsinfo.module.css";
import PersonalDetails from "@components/personalDetails";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const DoctorInfo = ({ params }) => {
  const searchParams = useSearchParams();
  let email = searchParams.get("name");
  // console.log(email)
  const router = useRouter();

  const [DoctorInformation, setDoctorInformation] = useState(null);

  const handleDoctorInformation = async (data) => {
    setDoctorInformation(data);
    console.log("in handle");
    console.log(DoctorInformation)
    try {
      const response = await fetch("api/docs/docinfo", {
        method: "POST",
        body: JSON.stringify({
          firstName: DoctorInformation.firstName,
          lastName: DoctorInformation.lastName,
          gender: DoctorInformation.gender,
          dob: DoctorInformation.dob,
          email: DoctorInformation.email,
          mobile: DoctorInformation.mobile,
          address: DoctorInformation.address,
          qualification: DoctorInformation.qualification,
          regno: DoctorInformation.regno,
          specialization: DoctorInformation.specialization,
          experience: DoctorInformation.experience,
          hcname: DoctorInformation.hcname,
          statecouncil: 'Alote',
          practicetype: DoctorInformation.practicetype,
          practicech: DoctorInformation.practicech,
          fees: DoctorInformation.fees,
          accname:DoctorInformation.accname,
          accno:DoctorInformation.accno,
          bnkname:DoctorInformation.bnkname,
          brnchname:DoctorInformation.brnchname,
          ifsc:DoctorInformation.ifsc,
          upi:DoctorInformation.upi,
          // medicalDegree: DoctorInformation.medicalDegree,
          // license: DoctorInformation.license,
          // rc: DoctorInformation.rc,
          treatment:DoctorInformation.treatment,
        }),
      });
      if(response.ok){
        router.push('/inforegistered')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style["svg-container"]}>
          {/* <!-- Replace the SVG code with your own SVG image --> */}
          <img src={undraw.src} alt="" className={style.leftImage} />
          {/* <!-- Your SVG content here --> */}
        </div>
        <div className={style["signup-container"]}>
          <h1 className={style.head}>Doctor Signup</h1>
          <h3 className={style["sub-head"]}>
            Welcome! Enter your details below
          </h3>
          <h3></h3>

          <PersonalDetails handleData={handleDoctorInformation} email={email} />
        </div>
      </div>
    </>
  );
};

export default DoctorInfo;
