import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { authContext } from "../Auth/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
        setLoading(false);
        navigate("/my-profile"); // back to profile page
      })
      .catch((err) => {
        toast.error("Failed to update profile");
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border border-green-200">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
          Update Profile
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200"
            required
          />

          <input
            type="text"
            placeholder="Photo URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input input-bordered w-full rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />

          <button
            type="submit"
            className={`btn w-full bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-transform hover:scale-105 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
