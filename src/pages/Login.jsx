import React, { useState } from 'react'
import "./Login.css"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const passwordShow = () => {
        setShowPassword(!showPassword)
    }
    const handleClick = () => {
        console.log(email, password)
    }

    return (
        <div className='mainBody'>

            <div className="Login">
                <div className="welcomeSection">
                    <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f" alt="" />
                    <h1>Log In</h1>
                </div>
                <div className="input1">
                    <label>Email</label>

                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input2">
                    <label>Password</label>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", backgroundColor: "azure" }}>
                        <input type={showPassword ? "text" : "password"} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {showPassword ? < FaRegEye style={{ width: "40px", cursor: "pointer" }} onClick={passwordShow} /> : <FaRegEyeSlash style={{ width: "40px", cursor: "pointer" }} onClick={passwordShow} />}

                    </div>

                </div>
                <div className="btn">
                    <button onClick={handleClick} >Log In</button>
                </div>

            </div>


        </div>
    )
}

export default Login
