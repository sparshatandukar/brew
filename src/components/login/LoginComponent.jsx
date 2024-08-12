// src/LoginComponent.js

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import axiosInstance from "../../Axios/axios";
import { login } from "../../features/auth/authSlice";

const LoginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!loginData.email) errors.email = "Email is required";
    if (!loginData.password) errors.password = "Password is required";
    // You can add more validation rules here
    return errors;
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axiosInstance.post("/auth/login", loginData);

        // Set token in local storage
        console.log(response)
        localStorage.setItem("token", response.data.token);

        // Dispatch login action to update Redux store
        // console.log(response.data.userDetails.role)
        dispatch(login({
          token: response.data.token,
          userRole: response.data.userDetails.role,  // Assuming the API returns a role field
        }));

        // Show success message
        toast.success("Login successful");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } catch (error) {
        // Handle error response
        console.log(error)
        if (error.response) {
          toast.error(error.response.data.message || "Login failed");
        } else {
          toast.error("Login failed, please try again.");
        }
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <ToastContainer />
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
          </div>
          <div className="mb-6 relative">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-8"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-500 cursor-pointer" />
              ) : (
                <FaEye className="text-gray-500 cursor-pointer" />
              )}
            </div>
            {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
          </div>
          <button
            className="w-full bg-yellowish text-white py-2 px-4 rounded-md hover:bg-browninsh focus:outline-none focus:bg-browninsh"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
