import React from "react";
import style from '@styles/userdocprofile.module.css'
const Specialities = () => {
  const list = [{ specialty: "Ortho" }];
  return (
    <div className={style.listCon}>
      {list.map((item) => (
        <li className={style.list}>
          <span className={style.specialtyList}>{item.specialty}</span>
        </li>
      ))}
    </div>
  );
};

export default Specialities;
