import React from "react";
import Link from "next/link";

const ConThree = () => {
  return (
    <>
      <div className="container-3">
        <div className="wlc-conatiner">
          <h1 className="wlc-msg-us">Welcome Message</h1>
          <p className="wlc-text-us">
            Your health matters to us. We provide expert medical consultations
            online, connecting you with experienced healthcare professionals.
            Whether it's advice, diagnosis, or treatment, we're here for you.
            Your well-being is our mission, and we're excited to be your
            healthcare partner. Explore our services and start your journey to
            better health today!
          </p>
          <Link href={'/about-us'}>
            <button className="wlc-btn-us">Learn More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ConThree;
