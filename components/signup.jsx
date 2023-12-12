'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
// import { useSession } from 'next-auth/react'
import { v4 as uuid } from 'uuid'
import { useUser } from '@components/userContext'
import { signIn } from 'next-auth/react'


const UsersignUp = ({isloading}) => {
    const router = useRouter()
    // const { setUserId } = useUser();
    // const {data: session} = useSession();
    const usertp = 'patient'

    const [FormData, setFormData] = useState(
        { name: '', email: '', dob: '', gender: '', mobile: '', address: '', password: '', cnfpass: '' }
    )
    const handleFormData = (evt) => {
        const field = evt.target.name;
        const value = evt.target.value;
        setFormData((crrFormData) => {
            crrFormData[field] = value
            return { ...crrFormData }
        })
    }

    const handleSubmit = async (e) => {
        // const uid = uuid();
        e.preventDefault();
        isloading(true, 'Verifying')

        if (!FormData.name || !FormData.email || !FormData.dob || !FormData.gender || !FormData.mobile || !FormData.address || !FormData.password || !FormData.cnfpass) {
            alert('All fields are necessary')
            isloading(false,'Verifying')
        }
        else {
            if (FormData.password !== FormData.cnfpass) {
                alert("Passwords don't match")
                isloading(false,'Verifying')
                
            }
            else {

                try {
                    const response = await fetch('../api/users/new', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            userId: uuid(),
                            name: FormData.name,
                            email: FormData.email,
                            dob: FormData.dob,
                            gender: FormData.gender,
                            mobile: FormData.mobile,
                            address: FormData.address,
                            password: FormData.password,
                            cnfpass: FormData.cnfpass,
                            usertype: usertp,

                        })
                    })
                    if (response.ok) {
                        isloading(true, 'Redirecting')
                        const res = await signIn('credentials', {
                            email: FormData.email,
                            password: FormData.password,
                            redirect: true,
                            callbackUrl: '/'
                        });
                        // setUserId(true)
                        // localStorage.setItem('userId', FormData.email);
                    }
                    // console.log(uid)
                }
                catch (error) {
                    console.log("Error creating new prompt");
                    console.log(error);
                }
            }
        }

        // if (!session){
        //     alert('Please login to continue');
        //     router.push('/login')
        // } 



    }

    return (
        <>
            <div className="form-container sign-up-container">
                <form onSubmit={handleSubmit} >
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg></a>
                        <a href="#" className="social"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                        </svg></a>
                        <a href="#" className="social"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input
                        type="text"
                        placeholder="Name"
                        value={FormData.name}
                        name='name'
                        onChange={handleFormData}
                        required />
                    <input type="email" placeholder="Email" value={FormData.email} name='email' onChange={handleFormData} required />
                    <input type="date" id="dateOfBirth" value={FormData.dob} name='dob' onChange={handleFormData} required />
                    <select id="gender" value={FormData.gender} name='gender' onChange={handleFormData} required >
                        <option>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>


                    <input type="text" placeholder="Mobile no." value={FormData.mobile} name='mobile' onChange={handleFormData} required />
                    <input type="text" placeholder="Address" value={FormData.address} name='address' onChange={handleFormData} required />
                    <input type="password" placeholder="Password" value={FormData.password} name='password' onChange={handleFormData} required />
                    <input type="password" placeholder="confirm Password" value={FormData.cnfpass} name='cnfpass' onChange={handleFormData} required />
                    <button type='submit'>Sign Up</button>
                </form>
            </div>

        </>
    )
}

export default UsersignUp