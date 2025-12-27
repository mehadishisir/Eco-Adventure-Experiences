import React from "react";
import Banner from "../component/Banner";
import { useLoaderData } from "react-router";
import AdventureCard from "../component/AdventureCard";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 md:w-10/12 mx-auto my-16">
        <h2 className="text-2xl font-bold text-center mb-10">
          Explore Our Eco-Adventure Experiences
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((adventures) => (
            <AdventureCard
              key={adventures.id}
              adventures={adventures}
            ></AdventureCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
