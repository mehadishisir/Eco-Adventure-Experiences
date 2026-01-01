import { NavLink } from "react-router";
import leafImg from "../assets/leaf_692057.png";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../Auth/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(authContext);
  const [adventures, setAdventures] = useState([]);

  // Fetch adventures dynamically
  useEffect(() => {
    fetch("/adventures.json")
      .then((res) => res.json())
      .then((data) => setAdventures(data))
      .catch((err) => console.error("Failed to fetch adventures:", err));
  }, []);

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
                  {adventures.map((adv) => (
                    <li key={adv.id}>
                      <NavLink
                        to={`/adventure/${adv.id}`}
                        className="font-medium block px-2 py-1"
                      >
                        {adv.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </details>
            </li>

            {/* Mobile Profile button */}
            {user && (
              <li>
                <NavLink
                  to="/profile"
                  className="font-medium block px-2 py-1 text-green-600"
                >
                  Profile
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* Logo */}
        <img className="w-8 h-8" src={leafImg} alt="Leaf Logo" />
        <NavLink to="/" className="text-2xl font-bold text-green-600">
          Eco-Adventure
        </NavLink>
      </div>

      {/* Navbar Center - Desktop */}
      <div className="navbar-center hidden lg:flex items-center gap-4">
        <ul className="menu menu-horizontal gap-4">
          <li>
            <NavLink to="/" className="font-medium">
              Home
            </NavLink>
          </li>
          <li>
            <details className="cursor-pointer">
              <summary className="font-medium flex items-center gap-1">
                Adventures
              </summary>
              <ul className="p-2 bg-base-100 rounded-box mt-1 absolute shadow-md min-w-[180px]">
                {adventures.map((adv) => (
                  <li key={adv.id}>
                    <NavLink
                      to={`/adventure/${adv.id}`}
                      className={({ isActive }) =>
                        isActive
                          ? "font-medium text-green-600 block px-2 py-1"
                          : "font-medium block px-2 py-1"
                      }
                    >
                      {adv.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li>
            {/* Desktop Profile button */}
            {user && (
              <NavLink to="/profile" className="  text-black ml-4">
                Profile
              </NavLink>
            )}
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center">
        {user ? (
          <NavLink
            to="/login"
            onClick={logoutUser}
            className="btn btn-sm bg-green-600 hover:bg-green-700 text-white mt-2"
          >
            Logout
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className="btn btn-sm bg-green-600 hover:bg-green-700 text-white mt-2"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
