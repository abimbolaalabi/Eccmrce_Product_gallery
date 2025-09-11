import React, { useState } from 'react'
import "./SignUp.css"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [cShowPassword, setCShowPassword]= useState(false)

    const passwordShow = () => {
        setShowPassword(!showPassword)
    }
     
    const cpasswordShow = () => {
        setCShowPassword(!cShowPassword)
    }

    const handleClick = () => {

        console.log(firstName, lastName, email, password, cpassword)
    }

    return (
        <div className='mainBody'>

            <div className="section1"></div>
            <div className="section2">
                <h1>Sign Up</h1>
                <p>Please fill in the form to create an account!</p>

                <section className="textsection">
                    <div className="firstInput">
                        <label>First Name</label>
                        <input type="text" placeholder="Enter your FirstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="firstInput">
                        <label>Last Name</label>
                        <input type="text" placeholder="Enter your LastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>

                    <div className="secondInput">
                        <label>Email</label>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="thirdInput">
                        <label>Password</label>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", backgroundColor: "azure" }}>
                            <input type={showPassword ? "text" : "password"} placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            {showPassword ? < FaRegEye style={{ width: "40px", cursor: "pointer" }} onClick={passwordShow} /> : <FaRegEyeSlash style={{ width: "40px", cursor: "pointer" }} onClick={passwordShow} />}

                        </div>

                    </div>
                    <div className="fourthInput">
                        <label>Comfirm Password</label>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", backgroundColor: "azure" }}>
                            <input type={cShowPassword ? "text" : "password"} placeholder="Enter Password" value={cpassword} onChange={(e) => setCPassword(e.target.value)} />
                            {cShowPassword ? < FaRegEye style={{ width: "40px", cursor: "pointer" }} onClick={cpasswordShow} /> : <FaRegEyeSlash style={{ width: "40px", cursor: "pointer" }} onClick={passwordShow} />}

                        </div>
                        
                    </div>

                    <div className="btn">
                        <button onClick={handleClick} >Sign Up</button>

                    </div>

                </section>

            </div>

        </div>
    )
}

export default SignUp
