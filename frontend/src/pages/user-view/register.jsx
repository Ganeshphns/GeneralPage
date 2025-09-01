// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { registerUser } from "../../store/auth-slice";
// import toast from "react-hot-toast";



// const initialState = {
//   userName: "",
//   email: "",
//   password: "",
// };

// export default function AuthRegister() {
//   const [formData, setFormData] = useState(initialState);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Signup Data ✅", formData);
//     // Call your signup API here
//   dispatch(registerUser(formData)).then((data)=>{
//     if(data?.payload?.success){
//       toast.success(data?.payload?.message);
//       navigate("/auth/login");
//     } else {
//         toast.error(data?.payload?.message, {
//           variant: "destructive",
//         });
//       }
//   })

//   };

//   return (
//     <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow">
//       <h2 className="text-2xl font-bold text-center text-gray-800">
//         Create Account
//       </h2>
//       <p className="text-gray-500 text-center mt-2 mb-6">
//         Sign up to get started
//       </p>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Full Name */}
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full px-4 py-2 border rounded-lg text-gray-800"
//           required
//         />

//         {/* Email */}
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full px-4 py-2 border rounded-lg text-gray-800"
//           required
//         />

//         {/* Password */}
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full px-4 py-2 border rounded-lg text-gray-800"
//           required
//         />

//         {/* Submit */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition"
//         >
//           Sign Up
//         </button>

//         <p className="text-center text-sm text-gray-500 mt-4">
//           Already have an account?{" "}
//           <Link
//             to="/auth/login"
//             className="text-blue-600 font-medium hover:underline"
//           >
//             Log in
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }



import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../store/auth-slice";
import toast from "react-hot-toast";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

export default function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Signup Data ✅", formData);

    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast.success(data.payload.message);
        navigate("/auth/login"); // Redirect to login after successful signup
      } else {
        toast.error(data?.payload?.message || "Registration failed", {
          style: {
            border: "1px solid #f87171",
            padding: "8px",
            color: "#b91c1c",
          },
        });
      }
    });
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Create Account
      </h2>
      <p className="text-gray-500 text-center mt-2 mb-6">
        Sign up to get started
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <input
          type="text"
          name="userName"
          placeholder="Full Name"
          value={formData.userName}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg text-gray-800"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg text-gray-800"
          required
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg text-gray-800"
          required
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}

