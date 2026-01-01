import React from "react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-6">
      <div className="text-center bg-white p-10 rounded-2xl shadow-xl max-w-md">
        <h1 className="text-7xl font-extrabold text-green-600 mb-4">404</h1>

        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-8">
          The page you are looking for doesn’t exist or the route is invalid.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
        >
          <FaArrowLeft />
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
