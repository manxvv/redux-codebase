import React from "react";
import { useForm } from "react-hook-form";
import http from "../lib/http";
import { useMutation } from "@tanstack/react-query";
import Urls from "../../config/urls";
import { useNavigate, Link } from "react-router-dom";
// import { useDispatch } from "react-redux"; // Uncomment when using Redux

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  // const dispatch = useDispatch(); // If using Redux

  const loginMutation = useMutation({
    mutationFn: (data) => http.post(Urls.signin, data),
    onSuccess: (res) => {
      const { user, token } = res.data;
      console.log("Login Success - User and Token:", { user, token });

      // Store in localStorage
      localStorage.setItem("authData", JSON.stringify({ user, token }));

      // Redux logic (to replace Zustand)
      // dispatch(setUser(user));
      // dispatch(setToken(token));
      // dispatch(setAuthenticated(true));

      navigate("/");
    },
    onError: (error) => {
      console.error("Login Failed:", error);
      // Optionally show error UI
    },
  });

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Sign in to your account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.password ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between mb-6">
            <a
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline focus:outline-none"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            to="/auth/signup"
            className="text-blue-600 hover:underline focus:outline-none"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
