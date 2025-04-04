import React from "react";

const Login = () => {
    return (
        <>
      <div className="h-[calc(100vh-250px)] flex justify-center items-center">
        
          <fieldset className="fieldset w-sm bg-base-200 border border-base-300 p-10 rounded-box">
            <legend className="fieldset-legend text-xl m-auto pt-12 relative top-8">
              Login
            </legend>

            <label className="fieldset-label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="fieldset-label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Login</button>

            <p className="inline-block align-baseline font-medium mt-4 ml-2.5 text-sm">
              Don't have an account? Please
              <a class="text-blue-500 hover:text-blue-800" href="/register">
                {" "}
                Register
              </a>
            </p>

            <div className="mt-4"><button class="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 488 512" class="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"></svg>Sign in with Google</button></div>

            <p class="mt-5 text-center text-gray-500 text-xs">©2025 Book Store. All rights reserved.</p>


          </fieldset>
      </div>
    </>
  );
};

export default Login;
