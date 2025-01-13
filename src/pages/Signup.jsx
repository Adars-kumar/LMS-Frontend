import { useState } from "react";
import toast from "react-hot-toast";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { isEmail, isValidPassword } from "../Helper/regexMatcher";
import HomeLayout from "../layouts/HomeLayout";
import { createAccount } from "../redux/slices/authSlices";

function Signup(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [signUpDetails, setSignUpDetails] = useState({
        email: '',
        fullName: '',
        password: '',
        avtar: ''
    });

    const [previewImage,setPreviewImage] = useState("");

    function handleUserInput(e){
        const {name, value } = e.target;
        setSignUpDetails({
            ...signUpDetails,
            [name]: value
        })
    }

    function handleImage(e){
        e.preventDefault();
        const uploadImage = e.target.files[0];
        if (!uploadImage) {
            return;
        }
        setSignUpDetails({
            ...signUpDetails,
            avtar: uploadImage
        });
        const fileReader = new FileReader();
        fileReader.readAsDataURL(uploadImage);
        fileReader.addEventListener('load', function(){
            setPreviewImage(this.result);
        })
    }

    async function onFormSubmit(e){
        e.preventDefault();  //it prevent reload the whole page during form submission
        // console.log(signUpDetails);
        if(!signUpDetails.email || !signUpDetails.password || !signUpDetails.fullName ){
            toast.error("Please fill all the details");
            return;
        }
        if (signUpDetails.fullName.length < 5) {
            toast.error("Name should be at least 5 characters");
            return;
        }
        if (!isEmail(signUpDetails.email)) {
            toast.error("Invalid email provided");
            return;
        }
        if (!isValidPassword(signUpDetails.password)) {
            toast.error("Invalid password provided, password should 15-16 character long with atelast a number and a special characters");
            return;
        }

        const formData = new FormData();
        formData.append("fullName", signUpDetails.fullName);
        formData.append("email", signUpDetails.email);
        formData.append("password", signUpDetails.password);
        formData.append("avtar", signUpDetails.avtar);

        const response = await dispatch(createAccount(formData))
        

        if(response?.payload?.data) {
            // console.log("Navigation triggered!");
            navigate("/");
        }

        setSignUpDetails({
            email: '',
            fullName: '',
            password: '',
            avtar: ''
        })
        setPreviewImage("");
    }

   


    return(
        <HomeLayout>
            <div className="flex overflow-x-auto items-center justify-center h-[100vh]">

                <form onSubmit={onFormSubmit} noValidate className="flex flex-col
                 justify-center gap-3 rounded-lg p-4 text-white w-35 ">
                    <h1 className=" text-2xl text-center font-bold">Registration Page</h1>

                    {/*--------------- Uploading Image---------- */}
                    <label htmlFor="image-uploads" className="cursor-pointer">
                        {previewImage ?(
                            <img className="w-24 h-24 rounded-full m-auto" src={previewImage} />
                        ):(
                            <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
                        )}
                    </label>
                    <input
                        onChange={handleImage}
                        type="file" className="hidden"
                        name="image-uploads"
                        id="image-uploads"
                        accept=".jpg, .jpeg, .png, .svg"
                    />
                    
                    {/*--------------- Enter userName---------- */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="font-semibold">Name</label>
                        <input
                            onChange={handleUserInput}
                            value={signUpDetails.fullName}
                            className="bg-transparent px-2 py-1 border"
                            required
                            type="text" 
                            name="fullName" 
                            placeholder="Enter your username..."
                            id="fullName"
                        />
                    </div>
                    
                    {/*--------------- Enter email---------- */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input
                            onChange={handleUserInput}
                            value={signUpDetails.email}
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
                            value={signUpDetails.password}
                            className="bg-transparent px-2 py-1 border"
                            required
                            type="password" 
                            name="password" 
                            placeholder="Enter your password..."
                            id="password"
                        />
                    </div>
                    <button className="mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out cursor-pointer py-2 font-semibold text-lg">
                        Create account
                    </button>
                    <p className="text-center ">
                        Already have an account ? <Link to="/login" className="cursor-pointer text-accent">Login</Link>
                    </p>
                 </form>
            </div>
        </HomeLayout>
       
    );
}

export default Signup;