




import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/auth-slice";
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";
const initialState = {
  email: "",
  password: "",
};

const AuthLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // Add your login API call here
  // dispatch(loginUser(formData)).then((data)=>{
  //   if(data?.payload?.success){
  //     toast.success(data?.payload?.message || "Something went wrongu");
  //   }else{
  //     toast.error(data?.payload?.message || "Something went wrongel", {
  //         variant: "destructive",
  //       });
  //   }
  // })
dispatch(loginUser(formData)).then((data) => {
  if (data?.payload?.success) {
    toast.success(data?.payload?.message || "Login successful");

    // Redirect based on role
    const role = data.payload.user.role;
    if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/user/dashboard");
    }
  } else {
    toast.error(data?.payload?.message || "Login failed", {
      variant: "destructive",
    });
  }
});


  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email */}
      <div>
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          LOGIN
        </h2>
        <label className="block text-gray-600 text-sm mb-1">
          Email : <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-gray-600 text-sm mb-1">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <div className="flex items-center justify-between mt-2">
          <label className="flex items-center space-x-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <span>Show Password</span>
          </label>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Log in
      </button>
       <p className="text-center text-sm text-gray-500 mt-4">
          I don't have an account?{" "}
          <Link
            to="/auth/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Signup
          </Link>
        </p>
    </form>
  );
};

export default AuthLogin;
