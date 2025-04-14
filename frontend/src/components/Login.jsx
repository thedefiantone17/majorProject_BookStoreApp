import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";

import { useForm } from "react-hook-form";

const Login = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
        await loginUser(data.email, data.password);
        alert("Login successful!");
        navigate("/")
    } catch (error) {
        setMessage("Please provide a valid email and password") 
        console.error(error)
    }
  }

  const handleGoogleSignIn = () => {
    
  }

  return (
    <>
      <div className="h-[calc(100vh-250px)] flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset w-sm bg-base-200 border border-base-300 p-10 rounded-box">
          <legend className="fieldset-legend text-xl m-auto pt-12 relative top-8">
            Login
          </legend>

          <label className="fieldset-label">Email</label>
          <input 
          {...register("email", { required: true })}
          type="email" className="input" placeholder="Email" />

          <label className="fieldset-label">Password</label>
          <input 
          {...register("password", {required: true})}
          type="password" className="input" placeholder="Password" />
          

          {message && <p className="text-red-500 text-xs italic mb-3 ">{message}</p>}

          <button type="submit" className="btn btn-neutral mt-4">
          Login
          </button>

          <p className="inline-block align-baseline font-medium mt-6 ml-5 text-xs ">
            Don't have an account? Please
            <Link
              to="/register"
              className="text-secondary hover:text-blue-700 ml-1"
              >
              Register
            </Link>
          </p>

          <div className="mt-4">
            <button onClick={handleGoogleSignIn} class="w-full flex flex-wrap gap-1 items-center justify-center  btn btn-secondary ">
              {" "}
              <FcGoogle className="size-6 shadow bg-white rounded ml-1 mr-1" />{" "}
              Sign in with Google{" "}
            </button>
          </div>

          <p class="mt-9 text-center text-gray-500 text-xs">
            ©2025 Book Store. All rights reserved.
          </p>
        </fieldset>
        </form>

      </div>
    </>
  );
};

export default Login;
