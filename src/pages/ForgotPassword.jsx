import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/Firebase.init";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Login page থেকে আসা email
  const [email, setEmail] = useState(location.state?.email || "");

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!");
        window.location.href = "https://mail.google.com";
      })
      .catch(() => {
        toast.error("Failed to send reset email");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
          Forgot Password
        </h2>

        <form onSubmit={handleResetPassword} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input input-bordered w-full"
            required
          />

          <button
            type="submit"
            className="btn w-full bg-green-600 hover:bg-green-700 text-white"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
