import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Modal from "./Modal";

const AdvantureDetails = () => {
  const [modal, showModal] = useState(false);
  const data = useLoaderData();
  const { id } = useParams();

  const advanture = data.find((advanture) => advanture.id === parseInt(id));
  const handleTalkWithExpert = () => {
    const now = new Date();
    const hours = now.getHours();
    // console.log(hours);
    if (hours >= 10 && hours <= 20) {
      window.open("https://meet.google.com", "_blank");
    } else {
      showModal(true);
    }
  };

  if (!advanture) {
    return (
      <div className="text-center py-20 text-gray-500">Adventure not found</div>
    );
  }

  const {
    title,
    image,
    category,
    location,
    duration,
    adventureLevel,
    cost,
    bookingAvailability,
    maxGroupSize,
    ecoFriendlyFeatures,
    includedItems,
    specialInstructions,
    shortDescription,
  } = advanture;

  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-12">
      {/* Banner Image */}
      <div className="mb-10">
        <img
          src={image}
          alt={title}
          className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Title & Meta */}
      <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>

      <p className="flex flex-wrap items-center gap-4 text-sm mb-6 text-gray-500">
        <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
          📍 <span className="font-medium text-gray-700">{location}</span>
        </span>

        <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
          ⏱ <span className="font-medium text-gray-700">{duration}</span>
        </span>

        <span className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full">
          ⚡ <span className="font-medium">{adventureLevel}</span>
        </span>
      </p>

      <p
        className="text-gray-800 mb-12 text-lg md:text-xl 
              italic 
              bg-green-50/30 p-4 rounded-xl shadow-inner"
      >
        {shortDescription}
      </p>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Category */}
        <div className="bg-base-100 border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md ">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
            Category
          </p>
          <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
        </div>
        {/* Cost */}
        <div className="bg-base-100 border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md ">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
            Cost
          </p>
          <h3 className="text-lg font-semibold text-green-600">$ {cost}</h3>
        </div>

        {/* Group Size */}
        <div className="bg-base-100 border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md ">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
            Group Size
          </p>
          <h3 className="text-lg font-semibold text-gray-800">
            Max {maxGroupSize} People
          </h3>
        </div>

        {/* Availability */}
        <div className="bg-base-100 border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md ">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
            Availability
          </p>
          <h3 className="text-lg font-semibold text-blue-600">
            {bookingAvailability}
          </h3>
        </div>
      </div>

      {/* Eco Friendly Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-5 flex items-center gap-2">
          🌿 Eco-Friendly Features
        </h2>

        <div className="flex flex-wrap gap-3">
          {ecoFriendlyFeatures.map((feature, index) => (
            <span
              key={index}
              className="px-4 py-1.5 text-sm font-medium rounded-full
        bg-green-50/80 text-green-700
        border border-green-200
        backdrop-blur-sm
        hover:bg-green-100 hover:scale-105
        transition"
            >
              {feature}
            </span>
          ))}
        </div>
      </section>

      {/* Included Items */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-5 flex items-center gap-2">
          🎒 Included Items
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {includedItems.map((item, index) => (
            <div
              key={index}
              className="bg-base-100 border border-gray-200 rounded-xl p-4
        shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-700 font-medium">✓ {item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Special Instructions */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-5 flex items-center gap-2">
          ⚠️ Special Instructions
        </h2>

        <div className="space-y-4">
          {specialInstructions.map((item, index) => (
            <div
              key={index}
              className="border-l-4 border-yellow-400
        bg-yellow-50/60 p-4 rounded-xl"
            >
              <p className="text-gray-700 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Action Button */}
      <div className="text-center">
        <button
          onClick={handleTalkWithExpert}
          className="btn btn-lg bg-green-600 hover:bg-green-700 border-0
    text-white px-10 rounded-full
    shadow-lg hover:shadow-xl
    transition-transform hover:scale-105"
        >
          💬 Talk with Expert
        </button>
        {modal && <Modal onClose={() => showModal(false)}></Modal>}
      </div>
    </div>
  );
};

export default AdvantureDetails;
