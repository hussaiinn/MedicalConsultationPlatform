'use client'
import React, { useEffect } from 'react'
import '@styles/home.css'
import NavBar from '@components/Nav'
import ConOne from './conOne/conOne'
import { ConTwo, Head } from './conTwoHead/conTwoHead'
import ConThree from './conThree/conThree'
import { HeadFour, ConFour } from './conFourHead/conFourHead'
import ConFive from './conFive/conFive'
import { HeadSix, ConSix } from './conSix/conHeadSix'
import ConSeven from './conSeven/conSeven'
import Phone from './phone/phone'
import ConTen from './conTen/conTen'
import Footer from '@components/footer'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'



const Home = () => {
    const router = useRouter();
    // const searchParams = useSearchParams();
    // const signedin = searchParams.get('signedin')
    

    useEffect(()=>{
        router.refresh();
    },[])

    return (
        <>
            <NavBar/>
            <ConOne />
            <Head/>
            <ConTwo/>
            <ConThree/>
            {/* <HeadFour/> */}
            {/* <ConFour/> */}
            <ConFive/>
            {/* <HeadSix/> */}
            {/* <ConSix/> */}
            <ConSeven/>
            <Phone/>
            <ConTen/>
            <NavBar/>
            <Footer/>

        </>
    )
}

export default Home