const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      country: "Australia",
      text: "The best eco-adventure I've ever experienced. Truly unforgettable!",
    },
    {
      name: "Rahim Uddin",
      country: "Bangladesh",
      text: "Loved the sustainability focus and friendly guides!",
    },
    {
      name: "Alex Turner",
      country: "UK",
      text: "Nature, adventure and responsibility – perfect combo.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          data-aos="fade-down"
          className="text-4xl font-extrabold text-center text-green-700 mb-12"
        >
          What Travelers Say 🌍
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              className="bg-green-50 p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex gap-1 mb-3 text-yellow-400 text-lg">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-700 italic mb-4">“{review.text}”</p>

              <h4 className="font-bold text-gray-800">{review.name}</h4>
              <span className="text-sm text-gray-500">{review.country}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
