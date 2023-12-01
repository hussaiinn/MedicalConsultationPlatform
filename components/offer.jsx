import React from "react";
import style from "@styles/Offer.module.css";
import gd from "public/images/group-docs.svg";

const OfferBox = () => {
  return (
    <div className={style.outer}>
      <div className={style.content}>
        <h5>Enjoy up to a 70% discount on all health test packages</h5>
        <p>Unlock your well-being with exclusive discounts within 10 days!</p>
      </div>
      <div className={style.imageContainer}>
        <img src={gd.src} alt="" className={style.imageIcon} />
      </div>
    </div>
  );
};

export default OfferBox;
