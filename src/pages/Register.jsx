import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { authContext } from "../Auth/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { registerUser, googleLogin } = useContext(authContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    // Password validation
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    if (!uppercase || !lowercase || password.length < 6) {
      setError(
        "Password must be at least 6 characters with uppercase & lowercase letters."
      );
      toast.error(
        "Password must be at least 6 characters with uppercase & lowercase letters."
      );
      return;
    }

    registerUser(email, password)
      .then((res) => {
        toast.success("Registration successful");
        navigate("/", { replace: true });
        console.log(res.user);
      })
      .catch((err) => {
        console.error(err);
        setError("Registration failed. Try again.");
        toast.error("Registration failed. Try again.");
      });
  };

  const handleGoogleRegister = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        toast.success("Google login successful");
        navigate("/", { replace: true });
      })
      .catch(() => {
        toast.error("Google login failed");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <div className="card w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 border border-green-200">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-green-700">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input input-bordered w-full border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-xl transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-xl transition"
            required
          />
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            className="input input-bordered w-full border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-xl transition"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-xl transition"
            required
          />

          {error && (
            <p className="text-red-500 text-sm animate-pulse">{error}</p>
          )}

          <button
            type="submit"
            className="btn w-full bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-transform hover:scale-105"
          >
            Register
          </button>
        </form>

        <div className="divider">OR</div>
        <button
          onClick={handleGoogleRegister}
          className="btn w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 transition-transform rounded-xl shadow-md hover:shadow-lg hover:scale-105"
        >
          <FcGoogle className="text-2xl" />
          Continue with Google
        </button>

        <p className="text-center text-sm mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="link link-primary hover:text-green-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
