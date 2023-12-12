import React from "react";
import style from '@styles/userdocprofile.module.css'
const ProfileCard = () => {
  return (
    <div className={style.profileCard}>
      <div className={style.profileImg}></div>
      <div className={style.profileDetails}>
        <h4 className={style.docName}>Dr Name</h4>
        <span className={style.rating}>5 stars</span>
        <h4 className={style.docSpecialty}>Dr Specialty</h4>
      </div>
    </div>
  );
};

export default ProfileCard;
