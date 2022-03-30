import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import "./Header.css";

export default function Header() {
  const [active, setActive] = useState(false);

  function showMenu() {
    setActive(!active);
  }

  return (
    <div className="header">
      <div className="menu-icon">
        <GiHamburgerMenu className="menu" onClick={showMenu} />
      </div>
      <nav className={active ? "slider active" : "slider"}>
        <ul>
          <div className="closed">
            <GrClose className="close" onClick={showMenu} />
          </div>
          <li>
            <Link to="/daily">Daily</Link>
          </li>
          <li>
            <Link to="/sport">Sport</Link>
          </li>
          <li>
            <Link to="/to-travel">To Travel</Link>
          </li>
          <li>
            <Link to="/medical">Medical</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
