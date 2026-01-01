import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaTwitter, FaLeaf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f2f24] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
            <FaLeaf className="text-green-400" />
            Eco Adventures
          </h2>
          <p className="text-sm mt-4 leading-relaxed text-gray-400">
            Responsible eco-tourism experiences designed to protect nature while
            creating unforgettable memories.
          </p>
        </div>

        {/* Links */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:text-white transition" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition" to="/adventures">
                Adventures
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Terms
            </li>
            <li className="hover:text-white transition cursor-pointer">FAQ</li>
            <li className="hover:text-white transition cursor-pointer">
              Help Center
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Get eco-friendly travel tips & updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 bg-[#153d30] text-sm outline-none rounded-l-lg text-gray-200"
            />
            <button className="px-5 bg-green-600 hover:bg-green-700 rounded-r-lg text-sm text-white transition">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Eco Adventures. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
              <FaFacebookF />
            </a>
            <a className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
              <FaInstagram />
            </a>
            <a className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
