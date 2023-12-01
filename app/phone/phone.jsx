import React, { useState } from 'react'
import imagee from './/../../public/images/Screenshot_20230926_191549.png'

const Phone = () => {
    const [menu, setMenu] = useState(false);

    const handlemenuClick = ()=>{
        setMenu((prmenu)=>{
            return !prmenu;
        });
    }
    return (
        <>
            <div className={`phone ${menu? 'active' : ''}`}>
                <img
                    src={imagee.src}
                    alt=""
                    className="image"
                />
                <div className="menu">
                    <div className="options">
                        <div className="option selected">Home</div>
                        <div className="option">About</div>
                        <div className="option">Products</div>
                        <div className="option">Contact</div>
                    </div>
                </div>
                <svg
                    className="x"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 220 400"
                    height="400"
                    width="220"
                >
                    <g className="top-bars" strokeWidth="4">
                        <path className="bar bar1" d="M 178,20 H 202" />
                        <path className="bar bar2" d="M 178,29 H 202" />
                    </g>
                </svg>
                <div
                    className="menu-click-area"
                    onClick={handlemenuClick}
                ></div>
            </div>
        </>

    )
}

export default Phone