'use client'
import React, { useEffect } from 'react'
// import Overlay from '../../../components/overlay'
// import UsersignUp from './signUp/signup'
// import UsersignUp from '@components/signup'
import UsersignUp from '@components/signup'
// import UserSignIn from '../../../components/signin'
import UserSignIn from '@components/signin'
import Overlay from '@components/overlay'
import '@././styles/usersignInUp.css'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

const Patient = () => {
    const searchParams = useSearchParams();
    const reqst = searchParams.get('reqst')
    // console.log('search params', reqst);

    const [overlay, setOverlay] = useState(false)

    useEffect(()=>{
        if(reqst === "signup"){
            setOverlay(true);
            console.log('heyyyy')
        }
    },[])

    const handlesingup = () => {
        setOverlay(true)
    }

    const handlesignin = () => {
        setOverlay(false)
    }

    return (
        <div className={`container ${overlay ? 'right-panel-active' : ''}`} id='container'>
            <UsersignUp />
            <UserSignIn />
            <Overlay
                signIn={handlesignin}
                signUp={handlesingup}
            />
        </div>
    )
}

export default Patient