import { NavLink } from "react-router";
import leafImg from "../assets/leaf_692057.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-10 relative z-50">
      {/* Navbar Start */}
      <div className="navbar-start flex items-center gap-2">
        {/* Mobile Hamburger */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-2 p-2 shadow w-52"
          >
            <li>
              <NavLink to="/" className="font-medium">
                Home
              </NavLink>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer font-medium">
                  Adventures
                </summary>
                <ul className="p-2 bg-base-100 rounded-box mt-1">
                  <li>
                    <NavLink
                      to="/adventures/mountain-treks"
                      className="font-medium block px-2 py-1"
                    >
                      Mountain Treks
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/adventures/ocean-dives"
                      className="font-medium block px-2 py-1"
                    >
                      Ocean Dives
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/adventures/wildlife-safaris"
                      className="font-medium block px-2 py-1"
                    >
                      Wildlife Safaris
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/adventures/forest-expeditions"
                      className="font-medium block px-2 py-1"
                    >
                      Forest Expeditions
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink
                to="/login"
                className="btn btn-sm bg-green-600 hover:bg-green-700 text-white w-full mt-2"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <img className="w-8 h-8" src={leafImg} alt="Leaf Logo" />
        <NavLink to="/" className="text-2xl font-bold text-green-600">
          Eco-Adventure
        </NavLink>
      </div>

      {/* Navbar Center - Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">
          <li>
            <NavLink to="/" className="font-medium">
              Home
            </NavLink>
          </li>

          {/* Desktop clickable submenu using <details> */}
          <li>
            <details className="cursor-pointer">
              <summary className="font-medium flex items-center gap-1">
                Adventures
              </summary>
              <ul className="p-2 bg-base-100 rounded-box mt-1 absolute shadow-md min-w-[180px]">
                <li>
                  <NavLink
                    to="/adventures/mountain-treks"
                    className="font-medium hover:text-green-600 block px-2 py-1"
                  >
                    Mountain Treks
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/adventures/ocean-dives"
                    className="font-medium hover:text-green-600 block px-2 py-1"
                  >
                    Ocean Dives
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/adventures/wildlife-safaris"
                    className="font-medium hover:text-green-600 block px-2 py-1"
                  >
                    Wildlife Safaris
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/adventures/forest-expeditions"
                    className="font-medium hover:text-green-600 block px-2 py-1"
                  >
                    Forest Expeditions
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end hidden lg:flex">
        <NavLink
          to="/login"
          className="btn btn-sm bg-green-600 hover:bg-green-700 text-white"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
