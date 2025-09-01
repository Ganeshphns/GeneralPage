import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="flex flex-col w-full max-w-md shadow-lg rounded-xl overflow-hidden bg-white p-8">
        
        {/* Title */}
        {/* <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          LOGIN
        </h2> */}

        {/* Nested Routes (login/register forms) */}
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
