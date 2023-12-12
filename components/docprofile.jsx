import React from "react";
import ProfileCard from "./prfcard";
import DocOverview from "./docoverview";
import style from '@styles/userdocprofile.module.css'
const DoctorProfile = () => {
  return (
    <div className={style.profileCon}>
      <div className={style.docProfile}>
        <ProfileCard />
        <DocOverview />
      </div>
      <div className={style.contactCard}>
        <div className={style.contactHead}>
          <h1>Contact</h1>
        </div>
        <div className={style.contactNumber}>
          <div className={style.icon}>{/* <img src="icon-phone.png" /> */}</div>
          <div className={style.phoneNumber}>
            <h3 className={style.titleContact}>Our Phone</h3>
            <span>7470999508</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
