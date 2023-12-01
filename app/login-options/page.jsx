'use client'
import React from 'react'
import '@styles/loginoptions.css'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const LoginOptions = ({params}) => {
    const searchParams = useSearchParams();

    const reqst = searchParams.get('name')

    

    const [buttonPath, setButtonPath] = useState('')

    const [highlightDoctor, setHighlightDoctor] = useState(false);
    const [highlightPatient, setHighlightPatient] = useState(false);

    const handleDoctorClick = () => {
        setHighlightDoctor(true);
        setHighlightPatient(false);
        setButtonPath(`/login-options/doctor/${reqst}`)
    };
    
    const handlePatientClick = () => {
        setHighlightDoctor(false);
        setHighlightPatient(true);
        setButtonPath(`/login-options/user-login?reqst=${reqst}`)
    };


    return (
        <>
            <h2>LogIn / SignIn as....</h2>
            <div className='outer mt-5'>
                <div className='inner1'>
                    <div className={`doctor-container ${highlightDoctor ? 'highlight1' : ''}`} onClick={handleDoctorClick}>
                        <div className={`doctor ${highlightDoctor ? 'highlight1' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-heart-pulse" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Z" />
                                <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z" />
                            </svg>
                            <h5 className='desc'>Doctor</h5>
                        </div>
                    </div>
                    <div className={`patient-container ${highlightPatient ? 'highlight2' : ''}`} onClick={handlePatientClick}>
                        <div className={`doctor ${highlightPatient ? 'highlight2' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                            </svg>
                            <h5 className='desc'>Patient</h5>
                        </div>
                    </div>
                </div>
                <div className="button-us">
                    <Link href={'./'}>
                        <button className='previous'>Previous</button>
                    </Link>
                    <Link href={`${buttonPath}`}>
                        <button className={`next ${highlightDoctor ? 'red-highlight' : highlightPatient ? 'pink-highlight' : ''}`}>Next</button>
                    </Link>
                </div>
            </div >
        </>
    )
}

export default LoginOptions