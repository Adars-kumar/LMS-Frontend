import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { isEmail } from "../Helper/regexMatcher";
import HomeLayout from "../layouts/HomeLayout";
import {  login } from "../redux/slices/authSlices";

function Signin(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [signInDetails, setSignInDetails] = useState({
        email: '',
        password: ''
    });


    function handleUserInput(e){
        const {name, value } = e.target;
        setSignInDetails({
            ...signInDetails,
            [name]: value
        })
    }


    async function onFormSubmit(e){
        e.preventDefault();  //it prevent reload the whole page during form submission
        // console.log(signInDetails);
        if(!signInDetails.email || !signInDetails.password ){
            toast.error("Please fill all the details");
            return;
        }
        if (!isEmail(signInDetails.email)) {
            toast.error("Invalid email provided");
            return;
        }
        const response = await dispatch(login(signInDetails))
        
        if(response?.payload?.data) {
            navigate("/");
        }
        setSignInDetails({
            email: '',
            password: '',
            
        }) 
    }


    return(
        <HomeLayout>
            <div className="flex overflow-x-auto items-center justify-center h-[100vh]">

                <form onSubmit={onFormSubmit} noValidate className="flex flex-col
                 justify-center gap-3 rounded-lg p-4 text-white w-35 ">
                    <h1 className=" text-2xl text-center font-bold">Login Page</h1>

                    {/*--------------- Enter email---------- */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input
                            onChange={handleUserInput}
                            value={signInDetails.email}
                            className="bg-transparent px-2 py-1 border"
                            required
                            type="text" 
                            name="email" 
                            placeholder="Enter your email..."
                            id="email"
                        />
                    </div>
                    
                    {/*--------------- Enter password---------- */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="font-semibold">Password</label>
                        <input
                            onChange={handleUserInput}
                            value={signInDetails.password}
                            className="bg-transparent px-2 py-1 border"
                            required
                            type="password" 
                            name="password" 
                            placeholder="Enter your password..."
                            id="password"
                        />
                    </div>
                    <button className="mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out cursor-pointer py-2 font-semibold text-lg">
                        Sign In
                    </button>
                    <p className="text-center ">
                        Do not have an account ? <Link to="/signup" className="cursor-pointer text-accent">Login</Link>
                    </p>
                 </form>
            </div>
        </HomeLayout>
       
    );
}

export default Signin;