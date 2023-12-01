import React from "react";
import style from '@styles/profileCardList.module.css'
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const ProfileCard = ({data}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleonClick = ()=>{
    dispatch({type: 'SET_DATA', payload: data});

    router.push(`doctorspage/checkout?id=${data.email}`)
  }
  return (
    <div>
      <div className={style.main}>
        <div className={style.card}>
          <div className={style.cardImg}></div>
          <div className={style.cardTxt}>
            <div className={style.drIntro}>
              <h4 className={style.drName}>Dr. {data.firstName} {data.lastName}</h4>
              <h6 className={style.drDegree}>{data.qualification}</h6>
            </div>
            <div className={style.drLang}>
              <h4 className={style.langHead}>Language Known:</h4>
              <p>Hindi, English</p>
            </div>
            <div className={style.drTimings}>
              <h4 className={style.timingsHead}>Timing</h4>
              <p>availableTime</p>
            </div>
          </div>
          <div className={style.cardBtn}>
            <h3 className={style.h3}>Consultation Fees</h3>
            <span className={style.drFees}>₹ {data.fees }</span>
            <button
              type="button"
              className={`${style.profile} ${style.cardButton} ${style.button4}`}
            >
              View Profile
            </button>
            <button
              type="button"
              className={`${style.book} ${style.cardButton} ${style.button4}`}
              onClick={handleonClick}
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
