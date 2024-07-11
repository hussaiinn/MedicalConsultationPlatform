import React from "react";
import Link from "next/link";

const ConFive = () => {
  return (
    <>
      <div className="container-5">
        <h1 className="hww-head">How We Work</h1>
        <div className="hww-container">
          <div className="hww-txt-1">
            <h6 className="hww-txt-a">
              Begin by logging in as a patient and providing your personal
              information and medical history
            </h6>
          </div>
          <div className="hww-txt-2">
            <h6 className="hww-txt-a">
              Next, search for a suitable healthcare provider based on your
              specific medical requirements and condition.
            </h6>
          </div>
          <div className="hww-txt-3">
            <h6 className="hww-txt-a">
              Reserve an appointment with your chosen healthcare provider to
              commence your path to recovery and well-being.
            </h6>
          </div>
        </div>
        <Link href="/doctorspage?name=all">
          <button>Consult Now</button>
        </Link>
      </div>
    </>
  );
};

export default ConFive;
