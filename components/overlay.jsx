import React from 'react'

const Overlay = ({signIn, signUp}) => {

    const handleSignInClick = ()=>{
        signIn();
    }

    const handleSignUpClick = ()=>{
        signUp();
    }

    return (
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Overlay