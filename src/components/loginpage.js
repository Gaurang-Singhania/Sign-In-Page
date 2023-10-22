import { useState } from "react"
import React from 'react'
import { NavLink } from "react-router-dom";
import './page.css';

function Loginpage() {


    const [inputValue, setValue] = useState({
        username: "",
        password1: "",
    });

    const getData = (e) => {

        const { name, value } = e.target;
        console.log(value)


        setValue(() => {
            return {
                ...inputValue,
                [name]: value
            }
        }
        );
    }

    const submitData = (e) => {
        e.preventDefault();
        console.log(inputValue);

        const getUserData = localStorage.getItem("user");
        console.log(getUserData);

        const { username, password1 } = inputValue;

        if (username === "") {
            alert("Enter username");
        }
        else if (!username.includes('@')) {
            alert("Enter valid email address");
        }
        else if (password1 === "") {
            alert("Enter password");
        }
        else { 

            if (getUserData && getUserData.length) {
                const userData = JSON.parse(getUserData);

                console.log(userData);
                //console.log(userData.username);

                if (userData.username === username && userData.password1 === password1) {
                    alert("Sign in Successfull");
                    console.log("logged in successfully");
                }
                else {
                    alert("Enter Correct Credentials!!");
                }
            }
        }
    }

    return (
        <>
            <div className='container mt-5' >
                <section className='d-flex justify-content-between'>
                    <div className='leftpart mx-100' style={{ width: "100%" }} >
                        <h1 className='text-center col-lg-8'>Login-In!</h1>
                        <form>
                            <div className="mb-3 col-lg-12">
                                <label htmlFor="exampleInputEmail1" className="form-label my-3">Email address</label>
                                <input type="email" onBlur={getData} required name='username' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email-Address Here..' />
                            </div>
                            <div className="mb-3 col-lg-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" onBlur={getData} required name='password1' className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password Here..' />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: "150" }} onClick={submitData}>Login</button>
                        </form>
                        <p className='mt-4 fw-bold'>Haven't Registered <span><NavLink to='/'>Register-Now</NavLink></span></p>
                    </div>
                    <div className='rightPart mt-5'>
                        <div className='img mt-5'>
                            <img src='./registeration.jpg' style={{ maxWidth: 400 }} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Loginpage
