import React, { useEffect, useState } from "react";
import Link from "next/link";
import DoctorInfo from "@app/doctorInfo/page";
import ProfileDoc from "../app/profilepagedoc/page";
import { useRouter } from "next/navigation";
import style from "@styles/docnotverified.module.css";

const DoctorProfile = ({ data }) => {
  const email = data.email;
  const [info, setInfo] = useState();
  const router = useRouter();

  console.log(email);

  return (
    <>
      {data?.verified === false ? (
        <>
          <div className={style.main}>
            <div className={style.head}>
              <h1 className={style.titleIden}>
                Identity <br /> Verification
              </h1>
              <p className={style.txtIden}>
                Welcome to our esteemed medical platform! Committed to
                excellence, we prioritize the safety of both doctors and
                patients. All aspiring doctors are requested to undergo a
                thorough verification process, ensuring high standards of
                professionalism. Completion grants access to valuable resources
                and contributes to the overall trust of our platform. This
                process upholds the integrity of medical practice, fostering a
                secure environment for practitioners and patients.
              </p>
              <p className={`${style.txtIden} ${style.marginTp}`}>
                Your dedication to providing top-notch healthcare services and
                cooperation in the verification process ensures our community
                thrives with utmost professionalism. Thank you for being part of
                our trusted network, where excellence in healthcare begins with
                your commitment to verification.
              </p>
              <Link href={{ pathname: "/doctorInfo", query: { name: email } }} style={{textDecoration: 'none'}}>
                <button className={`${style.button4} ${style.btnIden}`}>
                  Verify Now
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>{router.push(`/profilepagedoc?email=${email}`)}</>
      )}
    </>
  );
};

export default DoctorProfile;
