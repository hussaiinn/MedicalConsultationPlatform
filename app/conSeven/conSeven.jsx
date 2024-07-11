import React from "react";
import ben from "../../public/images/ben.png";

const ConSeven = () => {
  return (
    <>
      <div className="container-7">
        <div className="ben-head-container">
          <h3 className="ben-head">
            How to Maximize the Benefits of Your Video Consultation with the
            Doctor
          </h3>
          <ul className="ben-list">
            <li className="ben-items">
              Prepare a list of questions and issues you wish to address,
              ensuring clear and honest communication of your symptoms. Every
              detail you provide can be valuable.
            </li>
            <li className="ben-items">
              Keep your medical history readily accessible, including past test
              results and medication prescriptions.
            </li>
            <li className="ben-items">
              Prior to the consultation, ensure a quiet and distraction-free
              environment.
            </li>
            <li className="ben-items">
              Consider having a companion present during the session. This way,
              in case you miss any information, they can help provide a recap.
            </li>
          </ul>
        </div>
        <img src={ben.src} className="ben-img" />
      </div>
    </>
  );
};

export default ConSeven;
