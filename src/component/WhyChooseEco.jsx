const WhyChooseEco = () => {
  const features = [
    {
      title: "Eco Friendly Travel",
      text: "Protect nature while exploring breathtaking destinations.",
      icon: "🌱",
    },
    {
      title: "Sustainable Tourism",
      text: "Support local communities and reduce carbon footprint.",
      icon: "♻️",
    },
    {
      title: "Wildlife Protection",
      text: "Respect wildlife with responsible adventure practices.",
      icon: "🐾",
    },
    {
      title: "Expert Guides",
      text: "Travel safely with trained and eco-conscious guides.",
      icon: "🧭",
    },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          data-aos="fade-up"
          className="text-4xl font-extrabold text-center text-green-700 mb-12"
        >
          Why Choose Eco-Adventures?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseEco;
