import React from "react";
import { Link } from "react-router";

const AdventureCard = ({ adventures }) => {
  const { id, title, image, ecoFriendlyFeatures } = adventures;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
      <figure className="h-56">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-xl font-bold text-gray-800 hover:text-green-600  transition">
          {title}
        </h2>

        <ul className="flex flex-wrap gap-2 mt-4">
          {ecoFriendlyFeatures.slice(0, 3).map((feature, index) => (
            <li
              key={index}
              className="badge badge-outline badge-success px-3 py-2 text-xs md:text-sm font-medium"
            >
              🌿 {feature}
            </li>
          ))}
        </ul>

        <div className="card-actions justify-end mt-4">
          <Link to={`/adventure/${id}`} className="btn btn-success btn-sm">
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdventureCard;
