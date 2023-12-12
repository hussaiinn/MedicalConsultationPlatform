import React from "react";
import Specialities from "./specialities";
import style from '@styles/userdocprofile.module.css'
const DocOverview = () => {
  return (
    <div className={style.Overview}>
      <div className={style.cardOverview}>
        <h4 className={style.headingOverview}>OverView</h4>
        <h4 className={`${style.headingOverview} ${style.opacity}`}>OverView</h4>
        <h4 className={`${style.headingOverview} ${style.noBrd} ${style.opacity}`}>OverView</h4>
      </div>
      <div className={style.textOverview}>
        <h2 className={style.titleOverview}>Overview Of Dr Name</h2>
        <p className={style.contentOverview}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
          officiis, ipsum excepturi, laboriosam ex hic accusamus fugiat sed
          perferendis cupiditate quasi animi ab suscipit nisi exercitationem
          temporibus minus quo molestias.
          <h2 className={style.titleOverview}>Subspecialities</h2>
          <ul>
            <Specialities />
          </ul>
        </p>
      </div>
    </div>
  );
};

export default DocOverview;
