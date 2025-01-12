import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import icons from "../icons/icons";

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/brawlers" className="nav-link">
          Brawlers
        </Link>
        <Link to="/cosmetics" className="nav-link">
          Cosmetics
        </Link>
        <Link to="/events" className="nav-link">
          Events
        </Link>
        <Link to="/items" className="nav-link">
          Items
        </Link>
      </nav>
      <div className="nav-hide" ref={dropdownRef}>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <div className="nav-dropdown">
          <label className="dropdown-label" onClick={toggleDropdown}>
            Tabs
            <img
              src={icons.caret}
              className="dropdown-caret"
              style={{ transform: !dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </label>
          {dropdownOpen && (
            <div className="dropdown-links">
              <Link to="/brawlers" className="dropdown-link">
                Brawlers
              </Link>
              <Link to="/cosmetics" className="dropdown-link">
                Cosmetics
              </Link>
              <Link to="/events" className="dropdown-link">
                Events
              </Link>
              <Link to="/items" className="dropdown-link">
                Items
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NavBar;
