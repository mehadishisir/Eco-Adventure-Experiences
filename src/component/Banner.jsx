import mountainImg from "../assets/mountain.jpg";
import seaImg from "../assets/sea.jpg";
import wildImg from "../assets/wild.jpg";
import forestImg from "../assets/forest.jpg";
import "animate.css";

const Banner = () => {
  return (
    <div className="w-full flex justify-center mt-8">
      <div
        className="
          carousel 
          w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12
          h-[55vh] md:h-[60vh]
          rounded-2xl shadow-xl overflow-hidden
        "
      >
        {/* ===== Slide 1: Mountain ===== */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src={mountainImg} className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="px-6 md:px-14 text-white max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
                Conquer the Mountains
              </h2>
              <p className="text-base md:text-lg text-gray-200 mb-6 animate__animated animate__fadeInUp animate__delay-1s">
                Experience eco-friendly mountain treks guided by nature experts.
              </p>
              <button className="btn bg-green-600 hover:bg-green-700 border-0 animate__animated animate__zoomIn animate__delay-2s">
                Explore Treks
              </button>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* ===== Slide 2: Ocean ===== */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={seaImg} className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="px-6 md:px-14 text-white max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Dive into the Ocean
              </h2>
              <p className="text-base md:text-lg text-gray-200 mb-6">
                Discover vibrant marine life through responsible ocean
                adventures.
              </p>
              <button className="btn bg-green-600 hover:bg-green-700 border-0">
                Explore Ocean
              </button>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* ===== Slide 3: Wildlife ===== */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src={wildImg} className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="px-6 md:px-14 text-white max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Wild Like Never Before
              </h2>
              <p className="text-base md:text-lg text-gray-200 mb-6">
                Ethical wildlife safaris that respect nature and its creatures.
              </p>
              <button className="btn bg-green-600 hover:bg-green-700 border-0">
                View Safaris
              </button>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* ===== Slide 4: Forest ===== */}
        <div id="slide4" className="carousel-item relative w-full">
          <img src={forestImg} className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="px-6 md:px-14 text-white max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Walk Through the Forest
              </h2>
              <p className="text-base md:text-lg text-gray-200 mb-6">
                Calm, sustainable forest expeditions guided by local experts.
              </p>
              <button className="btn bg-green-600 hover:bg-green-700 border-0">
                Explore Forests
              </button>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
