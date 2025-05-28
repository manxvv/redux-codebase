import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Urls from "../config/urls";
import http from "../lib/http";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const signUpMutation = useMutation({
    mutationFn: (data) => http.post(Urls.signup, data),
    onSuccess: (data) => {
      console.log("Signup success:", data);
      navigate("/auth/login");
    },
    onError: (error) => {
      console.error("Signup failed:", error);
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Register
        </h2>

        <form onSubmit={handleSubmit(data => signUpMutation.mutate(data))} className="mt-6">
          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Name</label>
            <input
              type="text"
              {...register("firstName", { required: "Name is required" })}
              placeholder="Enter your name"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          {/* Surname */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Surname</label>
            <input
              type="text"
              {...register("surname", { required: "Surname is required" })}
              placeholder="Enter your surname"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.surname ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.surname && (
              <p className="mt-1 text-sm text-red-500">{errors.surname.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">E-mail</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Phone Number</label>
            <input
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              placeholder="Enter your phone number"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.phone ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          {/* Role */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Role</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Student"
                  {...register("roleName", { required: "Role is required" })}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-400"
                />
                <span className="ml-2 text-gray-700">Student</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Mentor"
                  {...register("roleName", { required: "Role is required" })}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-400"
                />
                <span className="ml-2 text-gray-700">Mentor</span>
              </label>
            </div>
            {errors.roleName && (
              <p className="mt-1 text-sm text-red-500">{errors.roleName.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Register
            </button>
          </div>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-blue-600 hover:underline focus:outline-none"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
