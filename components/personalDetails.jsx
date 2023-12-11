// Your component file
"use client";
import { useState } from "react";
import styles from "@styles/MultiSelectDropdown.module.css";
import style from "@styles/doctorsinfo.module.css";

const PersonalDetails = ({ handleData, email }) => {
  const [images, setImages] = useState({
    // medicalDegree: null,
    license: null,
    rc: null,
  });

  const handleImageChanges = (event, imageName) => {
    const file = event.target.file;
    setImages({
      ...images,
      [imageName]: file,
    });
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const options = [
    "Sick kid",
    "Cough and Cold",
    "Dental Problem",
    "Periods Problem",
    "General Physician",
    "Dermatology",
    "Psychiatry",
    "Stomach and Digestion",
    "Pediatrician",
    "Urology",
    "Homeopathy",
    "Gynecologist",
    "Diabetology",
    "Ayurveda",
    "Headache",
    "Constipation",
    "Acne"
    
  ];
  console.log(email);
  const [finalFormData, setFinalFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    email: email,
    mobile: "",
    address: "",
    qualification: "",
    regno: "",
    specialization: "",
    experience: "",
    hcname: "",
    statecouncil: "",
    practicetype: "",
    practicech: "",
    fees: "",
    accname:"",
    accno:"",
    bnkname:"",
    brnchname:"",
    ifsc:"",
    upi:"",
    // medicalDegree: null,
    // license: null,
    // rc: null,
    treatment: [],
  });

  const handleFormData = (evt) => {
    const field = evt.target.name;
    const value = evt.target.value;
    setFinalFormData((crrFormData) => {
      crrFormData[field] = value;
      return { ...crrFormData };
    });
  };

  const handleOptionSelect = (option) => {
    setSelectedOptions([...selectedOptions, option]);
    setInputValue("");
  };

  const handleOptionRemove = (option) => {
    const updatedOptions = selectedOptions.filter(
      (selected) => selected !== option
    );
    setSelectedOptions(updatedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    finalFormData.treatment = selectedOptions;
    // finalFormData.medicalDegree = images.medicalDegree;
    // finalFormData.license = images.license;
    // finalFormData.rc = images.rc;
    if (images.medicalDegree !== null && images.license !== null) {
      alert("image recieved");
    }

    handleData(finalFormData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="form">
        <h3 className={style.h3}>Personal Details</h3>
        <div className={`${style["input-group"]} ${style.pureInput}`}>
          <div className={style.ig1}>
            <input
              type="text"
              id="firstName"
              className={style.customPlace}
              name="firstName"
              value={finalFormData.firstName}
              onChange={handleFormData}
              required
            />
            <label htmlFor="firstName" className={style.label}>
              First Name
            </label>
          </div>
          <div className={style.ig2}>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={style.customPlace}
              value={finalFormData.lastName}
              onChange={handleFormData}
              required
            />
            <label htmlFor="lastName" className={style.label}>
              Last Name
            </label>
          </div>
        </div>
        <div className={`${style["input-group9"]} ${style.pureInput}`}>
          <div className={style.ig1}>
            <select
              id="gender"
              name="gender"
              className={style.customPlace}
              value={finalFormData.gender}
              onChange={handleFormData}
              required
            >
              <option value="" disabled></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label htmlFor="gender" className={style.label}>
              Gender
            </label>
          </div>
          <div className={style.ig2}>
            <input
              type="date"
              id="dateOfBirth"
              name="dob"
              className={style.customPlace}
              value={finalFormData.dob}
              onChange={handleFormData}
              required
            />
            <label htmlFor="dateOfBirth" className={style.label}>
              Date of Birth
            </label>
          </div>
        </div>

        <h3 className={style.h3}>Contact Information</h3>
        <div className={`${style["input-group2"]} ${style.pureInput}`}>
          <div className={style.ig1}>
            <input
              type="email"
              id="email"
              name="email"
              className={style.customPlace}
              value={finalFormData.email}
              required
            />
            <label htmlFor="email" className={style.label}>
              Email
            </label>
          </div>
          <div className={style.ig2}>
            <input
              type="number"
              id="mobile"
              value={finalFormData.mobile}
              className={style.customPlace}
              name="mobile"
              onChange={handleFormData}
              required
            />
            <label htmlFor="mobile" className={style.label}>
              Mobile no.
            </label>
          </div>
        </div>
        <div className={style["input-group3"]}></div>
        <div
          className={`${style["input-group"]} ${style.ig3} ${style.pureInput}`}
        >
          <input
            type="text"
            id="address"
            value={finalFormData.address}
            className={style.customPlace}
            name="address"
            onChange={handleFormData}
            required
          />
          <label htmlFor="address" className={style.label}>
            Address
          </label>
        </div>

        <h3 className={style.h3}>Professional Details</h3>
        <div className={`${style["input-group"]} ${style.pureInput}`}>
          <input
            type="text"
            id="qualification"
            name="qualification"
            className={style.customPlace}
            value={finalFormData.qualification}
            onChange={handleFormData}
            required
          />
          <label htmlFor="qualification" className={style.label}>
            Qualification
          </label>
        </div>
        <div className={`${style["input-group4"]} ${style.pureInput}`}>
          <div className={style.ig1}>
            <input
              type="text"
              id="regno"
              name="regno"
              className={style.customPlace}
              value={finalFormData.regno}
              onChange={handleFormData}
              required
            />
            <label htmlFor="regno" className={style.label}>
              Medical Registration no.
            </label>
          </div>
          <div className={style.ig2}>
            <input
              type="text"
              id="specialization"
              name="specialization"
              className={style.customPlace}
              value={finalFormData.specialization}
              onChange={handleFormData}
              required
            />
            <label htmlFor="specialization" className={style.label}>
              Specialization
            </label>
          </div>
        </div>
        <div className={`${style["input-group5"]} ${style.pureInput}`}>
          <div className={style.ig1}>
            <input
              type="text"
              id="exp"
              className={style.customPlace}
              name="experience"
              value={finalFormData.experience}
              onChange={handleFormData}
              required
            />
            <label htmlFor="exp" className={style.label}>
              Experience
            </label>
          </div>
          <div className={style.ig2}>
            <input
              type="text"
              id="hcname"
              name="hcname"
              className={style.customPlace}
              value={finalFormData.hcname}
              onChange={handleFormData}
              required
            />
            <label htmlFor="hcname" className={style.label}>
              Clinic / Hospital{" "}
            </label>
          </div>
          {/* <div className={`${styleinput-group5}`}>
            <div className={`${style.ig1}`}>
            <input
            type="text"
            id="statecouncil"
            name="statecouncil"
            value={finalFormData.statecouncil}
            onChange={handleFormData}
            required
            />
            <label htmlFor='statecouncil' className={style.label}>State Medical Council</label>
            </div>
          </div> */}
        </div>
        <h3 className={style.h3}>Practice Details</h3>
        <div className={`${style["input-group6"]} ${style.pureInput}`}>
          <div className={style.ig1}>
            <input
              type="text"
              id="practice"
              name="practicetype"
              className={style.customPlace}
              value={finalFormData.practicetype}
              onChange={handleFormData}
              required
            />
            <label htmlFor="practice" className={style.label}>
              Practice type
            </label>
          </div>
          <div className={style.ig2}>
            <input
              type="text"
              id="hcname"
              name="practicech"
              className={style.customPlace}
              value={finalFormData.practicech}
              onChange={handleFormData}
              required
            />
            <label htmlFor="hcname" className={style.label}>
              Clinic / Hospital{" "}
            </label>
          </div>
        </div>
        <div className={`${style["input-group7"]} ${style.pureInput}`}>
          <div className={style.ig1}>
            <input
              type="text"
              id="fees"
              name="fees"
              className={style.customPlace}
              value={finalFormData.fees}
              onChange={handleFormData}
              required
            />
            <label htmlFor="fees" className={style.label}>
              Consultation Fees
            </label>
          </div>
          <div className={style.ig2}></div>
        </div>

        <h3 className={style.h3}>Documents</h3>
        <div className={`${style["input-group8"]} ${style.pureInput}`}>
          <input
            type="file"
            id="medicalDegree"
            name="medicalDegree"
            className={style.customPlace}
            // accept=""
            onChange={(e) => handleImageChanges(e, "medicalDegree")}
            required
          />
          {/* <label htmlFor="medicalDegree">Medical Degree</label> */}

          <input
            type="file"
            id="license"
            className={style.customPlace}
            name="license"
            // accept=""
            onChange={(e) => handleImageChanges(e, "license")}
            required
          />
          {/* <label htmlFor="license">Liscense</label> */}

          <input
            type="file"
            id="rc"
            className={style.customPlace}
            name="rc"
            // accept=""
            onChange={(e) => handleImageChanges(e, "rc")}
            required
          />
          {/* <label htmlFor="rc">Registration Certificate</label> */}
        </div>

        {/* Payment Details */}
        <h3 className={style.h3}>Payment Details</h3>
        <div className={`${style["input-group"]} ${style.pureInput}`}>
          <input
            type="text"
            id="accname"
            name="accname"
            className={style.customPlace}
            value={finalFormData.accname}
            onChange={handleFormData}
            required
          />
          <label htmlFor="accname" className={style.label}>
            Account Name
          </label>
        </div>
        <div className={`${style["input-group4"]} ${style.pureInput}`}>
          <div className={style.ig1}>
            <input
              type="number"
              id="accno"
              name="accno"
              className={style.customPlace}
              value={finalFormData.accno}
              onChange={handleFormData}
              required
            />
            <label htmlFor="accno" className={style.label}>
              Account Number
            </label>
          </div>
          <div className={style.ig2}>
            <input
              type="text"
              id="bnkname"
              name="bnkname"
              className={style.customPlace}
              value={finalFormData.bnkname}
              onChange={handleFormData}
              required
            />
            <label htmlFor="bnkname" className={style.label}>
              Bank Name
            </label>
          </div>
        </div>
        <div className={`${style["input-group5"]} ${style.pureInput}`}>
          <div className={style.ig1}>
            <input
              type="text"
              id="brnchname"
              className={style.customPlace}
              name="brnchname"
              value={finalFormData.brnchname}
              onChange={handleFormData}
              required
            />
            <label htmlFor="brnchname" className={style.label}>
              Branch Name
            </label>
          </div>
          <div className={style.ig2}>
            <input
              type="text"
              id="ifsc"
              name="ifsc"
              className={style.customPlace}
              value={finalFormData.ifsc}
              onChange={handleFormData}
              required
            />
            <label htmlFor="ifsc" className={style.label}>
              IFSC code{" "}
            </label>
          </div>
          
        </div>
        <div className={`${style["input-group5"]} ${style.pureInput}`}>
        <div className={style.ig1}>
            <input
              type="text"
              id="upi"
              name="upi"
              className={style.customPlace}
              value={finalFormData.upi}
              onChange={handleFormData}
              required
            />
            <label htmlFor="upi" className={style.label}>
              UPI ID
            </label>
          </div>
          
        </div>

        <div className={styles.multiSelectDropdown}>
          <h3 className={style.h3}>Medical Expertise</h3>
          <div className={styles.dropdownContainer}>
            <input
              type="text"
              value={inputValue}
              className={style.customPlace}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Select options..."
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
              <div className={styles.dropdownContent}>
                <ul className={styles.ull}>
                  {options
                    .filter(
                      (option) =>
                        !selectedOptions.includes(option) &&
                        option.includes(inputValue)
                    )
                    .map((option) => (
                      <li
                        key={option}
                        onClick={() => handleOptionSelect(option)}
                        className={styles.options}
                      >
                        {option}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <h3 className={style.h3}>Selected Options:</h3>
            <ul>
              {selectedOptions.map((option) => (
                <li key={option} className={styles.selected_options}>
                  {option}{" "}
                  <button
                    onClick={() => handleOptionRemove(option)}
                    className={style.removeButton}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button type="submit" className={style.submitbutton}>
          Sign Up
        </button>
      </form>
    </>
  );
};

export default PersonalDetails;
