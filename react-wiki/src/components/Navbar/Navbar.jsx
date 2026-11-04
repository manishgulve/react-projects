import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "../../App.css";

const Navbar = () => {
  const location = useLocation();
  const collapseRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const currentPath = location.pathname.includes("/character")
    ? location.state?.from
    : location.pathname;

  // Close navbar on route change (mobile UX fix)
  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand fw-bold fs-4">
          Rick & Morty <span className="text-primary">WiKi</span>
        </Link>

        {/* Toggle Button */}
        <button
          className="border-0 navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div
          ref={collapseRef}
          className={`collapse navbar-collapse justify-content-end ${
            isOpen ? "show" : ""
          }`}
        >
          <div className="navbar-nav fs-5 gap-lg-3">
            <NavLink
              to="/"
              end
              className={`nav-link ${
                currentPath === "/" ? "active" : ""
              }`}
            >
              Characters
            </NavLink>

            <NavLink
              to="/episodes"
              className={`nav-link ${
                currentPath === "/episodes" ? "active" : ""
              }`}
            >
              Episodes
            </NavLink>

            <NavLink
              to="/location"
              className={`nav-link ${
                currentPath === "/location" ? "active" : ""
              }`}
            >
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
