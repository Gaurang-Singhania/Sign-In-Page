import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import './page.css';

function Mainpage() {

    const [inputValue, setValue] = useState({
        username: "",
        password1: "",
        password2: "",
        date: "",

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

        const { username, password1, password2 } = inputValue;
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

        if (username === "") {
            alert("Enter username");
        }
        else if (!emailRegex.test(username)) {
            alert("Enter valid email address");
        }
        else if (password1 === "") {
            alert("Enter password");
        }
        else if (password2 === "") {
            alert("Enter password");
        }
        else if (password1 != password2) {
            alert("Enter correct password");
        }
        else {
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    This is a success alert — <strong>check it out!</strong>
                </Alert>
            </Stack>
            console.log("Registered successfully")

            localStorage.setItem("user", JSON.stringify([inputValue]));
        }
    }

    return (
        <div className='container mt-5' >
            <section className='d-flex justify-content-between'>
                <div className='leftpart mx-100' style={{ width: "100%" }} >
                    <h1 className='text-center col-lg-8'>Sign Up!</h1>
                    <form>
                        <div className="mb-3 col-lg-12">
                            <label htmlFor="exampleInputEmail1" className="form-label my-3">Email address</label>
                            <input type="email" onBlur={getData} required name='username' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email-Address Here..' />
                        </div>
                        <div className="mb-3 col-lg-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" onBlur={getData} required name='password1' className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password Here..' />
                        </div>
                        <div className="mb-3 col-lg-12">
                            <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                            <input type="password" onBlur={getData} required name='password2' className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password Here Again..' />
                        </div>
                        <div className="mb-3 col-lg-20 my-10">
                            <input type="date" onBlur={getData} required name='date' />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: "150" }} onClick={submitData}>Sign Up</button>
                    </form>
                    <p className='mt-4 fw-bold'>Already Registered <span><NavLink to='/loginpage'>Sign-In</NavLink></span></p>
                </div>
                <div className='rightPart mt-5'>
                    <div className='img mt-5'>
                        <img src='./registeration.jpg' style={{ maxWidth: 400 }} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Mainpage
