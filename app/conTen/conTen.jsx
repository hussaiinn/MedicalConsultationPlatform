import React, { useState } from "react";

const ConTen = () => {
  //   const [showpopup, setPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setPopup(true);
    alert(
      "Thank you for reaching out to us. Your information has been successfully submitted. We will be in touch with you within the next 48 hours."
    );
  };

  //   const closePopup = ()=>{
  //     setPopup(false)
  //   }
  return (
    <>
      <div className="container-10">
        <div className="mob-txt">
          <h1 className="mob-txt-head">DocConnect</h1>
          <ul className="mob-list">
            <li className="mob-item">Video Consult Doctors</li>
            <li className="mob-item">Ask Free Questions</li>
            <li className="mob-item">Exclusive Health Packages</li>
            <li className="mob-item">Instant Appointment</li>
          </ul>
        </div>
        <div className="mob-form-container">
          <h3 className="mob-from-head">NEED HELP?</h3>
          <form action="" className="mob-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name=""
              placeholder="Your Name"
              className="mob-form-input"
              required
            />
            <input
              type="text"
              name=""
              placeholder="Your Number"
              className="mob-form-input"
              required
            />
            <input
              type="text"
              name=""
              placeholder="Subject"
              className="mob-form-input"
              required
            />
            <button>
              <div className="svg-wrapper-1 mob-btn">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone-forward-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </div>
              </div>
              <span> Request Call</span>
            </button>
          </form>
        </div>
      </div>
      {/* Pop-up */}
      {/* {showpopup && (
        <div className="popup">
          <span onClick={closePopup} className="close-popup">
            &times;
          </span>
          <p>Your records are submitted. We'll contact you.</p>
        </div>
      )} */}
    </>
  );
};

export default ConTen;
