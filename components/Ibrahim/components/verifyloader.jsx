import React from "react";
import style from "@styles/writeloader.module.css";

const VerifyLoader = ({ name}) => {
  return (
    <div className={style.verifybody}>
      <div className={style.verifyloader}>{name}...</div>
    </div>
  );
};

export default VerifyLoader;
