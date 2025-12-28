import React from "react";
import { useLoaderData, useParams } from "react-router";

const AdvantureDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const advanture = data.find((advanture) => advanture.id === parseInt(id));

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

      <p className="text-gray-600 mb-6">
        📍 {location} &nbsp;|&nbsp; ⏱ {duration} &nbsp;|&nbsp; ⚡{" "}
        {adventureLevel}
      </p>

      <p className="text-gray-700 leading-relaxed mb-10">{shortDescription}</p>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-base-200 p-4 rounded-xl">
          <h3 className="font-semibold">Category</h3>
          <p className="text-sm text-gray-600">{category}</p>
        </div>

        <div className="bg-base-200 p-4 rounded-xl">
          <h3 className="font-semibold">Cost</h3>
          <p className="text-sm text-gray-600">$ {cost}</p>
        </div>

        <div className="bg-base-200 p-4 rounded-xl">
          <h3 className="font-semibold">Group Size</h3>
          <p className="text-sm text-gray-600">Max {maxGroupSize} people</p>
        </div>

        <div className="bg-base-200 p-4 rounded-xl">
          <h3 className="font-semibold">Availability</h3>
          <p className="text-sm text-gray-600">{bookingAvailability}</p>
        </div>
      </div>

      {/* Eco Friendly Features */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">🌿 Eco-Friendly Features</h2>
        <div className="flex flex-wrap gap-2">
          {ecoFriendlyFeatures.map((feature, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-green-50 text-green-700 border border-green-200"
            >
              {feature}
            </span>
          ))}
        </div>
      </section>

      {/* Included Items */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">🎒 Included Items</h2>
        <ul className="list-disc list-inside text-gray-700">
          {includedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Special Instructions */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">⚠️ Special Instructions</h2>
        <ul className="list-disc list-inside text-gray-700">
          {specialInstructions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Action Button (logic later) */}
      <div className="text-center">
        <button className="btn btn-success btn-lg">💬 Talk with Expert</button>
      </div>
    </div>
  );
};

export default AdvantureDetails;
