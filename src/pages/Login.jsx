import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { authContext } from "../Auth/AuthProvider";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const { loginUser, googleLogin } = useContext(authContext);
  // const navigate = useNavigate();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("Login page location:", location);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => {
        toast.success("Login successful");
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        setError("Invalid email or password");
        toast.error("Invalid email or password");
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        toast.success("Google login successful");
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Google login failed");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <div className="card w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 border border-green-200">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-green-700">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-xl transition"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-xl transition"
            required
          />

          <div className="text-right text-sm">
            <Link to="/forgot-password" className="link link-primary">
              Forgot Password?
            </Link>
          </div>

          {error && (
            <p className="text-red-500 text-sm animate-pulse">{error}</p>
          )}

          <Link
            to="/"
            type="submit"
            className="btn w-full bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-transform hover:scale-105"
          >
            Login
          </Link>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 transition-transform rounded-xl shadow-md hover:shadow-lg hover:scale-105"
        >
          <FcGoogle className="text-2xl" />
          Continue with Google
        </button>

        <p className="text-center text-sm mt-4 text-gray-600">
          New here?{" "}
          <button
            to="/register"
            className="link link-primary hover:text-green-600"
          >
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
