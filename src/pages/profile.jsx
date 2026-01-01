import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { authContext } from "../Auth/AuthProvider";

const Profile = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  if (!user) return null; // extra safety, though PrivateRoute handle করবে

  const handleUpdateProfile = () => {
    navigate("/update-profile");
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center pt-16 px-4">
      {/* Welcome Title */}
      <h1 className="text-4xl font-extrabold text-green-700 mb-6 animate-pulse">
        Welcome, {user.displayName || "Adventurer"}!
      </h1>

      {/* Profile Card */}
      <div className="bg-white shadow-2xl rounded-3xl p-8 flex flex-col items-center gap-6 w-full max-w-md border border-green-200">
        {/* Profile Image */}
        <img
          src={user.photoURL || "https://via.placeholder.com/150"}
          alt={user.displayName || "User"}
          className="w-32 h-32 rounded-full object-cover border-4 border-green-600"
        />

        {/* User Info */}
        <div className="w-full space-y-2">
          <p className="text-gray-700 font-medium">
            <span className="font-bold text-green-600">Name:</span>{" "}
            {user.displayName || "N/A"}
          </p>
          <p className="text-gray-700 font-medium">
            <span className="font-bold text-green-600">Email:</span>{" "}
            {user.email}
          </p>
          {/* Optionally you can add more fields if you store them in Firebase */}
        </div>

        {/* Update Button */}
        <button
          onClick={handleUpdateProfile}
          className="btn w-full bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-transform hover:scale-105 mt-4"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
