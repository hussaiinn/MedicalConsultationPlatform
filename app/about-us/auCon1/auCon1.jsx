import React from 'react'
import asim from '../../../public/images/asim.png'
import '@styles/aboutUs.css'

const AuCon1 = () => {
    return (
        <div className="as-container-1">
            <div className="as-img-container">
                <div className="as-card-img">
                    {/* <img id="as-img" src={"images/asim.png"} alt="" srcset=""> */}
                    <img src={asim.src} alt="" id="as-img" />
                </div>
                <h2 className="as-head-txt">All About US</h2>
                <p className="as-txt">we’re a medical consultation company which provide online consultation services</p>
                <button className="as-btn">Contact Us</button>
            </div>
        </div>
    )
}

export default AuCon1