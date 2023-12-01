import React from 'react'
import ben from '../../public/images/ben.png'

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
              Prepare a list of questions and issues you wish to address,
              ensuring clear and honest communication of your symptoms. Every
              detail you provide can be valuable.
            </li>
            <li className="ben-items">
              Prepare a list of questions and issues you wish to address,
              ensuring clear and honest communication of your symptoms. Every
              detail you provide can be valuable.
            </li>
          </ul>
        </div>
        <img src={ben.src} className="ben-img" />
      </div>
    </>
  )
}

export default ConSeven