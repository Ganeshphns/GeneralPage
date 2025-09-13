import React from "react";
import { Outlet } from "react-router-dom";
import login from "../../assets/login.png"

const AuthLayout = () => {
  



  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl shadow-lg rounded-xl overflow-hidden bg-white">
        
        {/* Left side illustration (hidden on mobile) */}
        <div className="hidden lg:flex w-1/2 justify-center items-center bg-blue-50">
          <img
            src={login}
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side auth box */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-10 bg-blue-50">
          {/* Logo */}
          {/* <div className="flex justify-center mb-4">
            <img
              src={login}
              alt="BVC Logo"
              className="h-12"
            />
          </div> */}

          {/* <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
            LOGIN
          </h2> */}

          {/* Nested Routes (login/register forms) */}
          <div className="w-full max-w-sm ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

 

export default AuthLayout;
