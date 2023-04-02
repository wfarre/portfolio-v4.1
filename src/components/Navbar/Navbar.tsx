import React from "react";
import "./assets/Navbar.scss";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="nav">
      <div className="nav__navbar">
        <ul className="navbar">
          <li className="navbar__item">
            <a className="navbar__item__link" href="#">
              <span className="capital-letter">H</span>ome
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__item__link" href="#">
              <span className="capital-letter">A</span>bout
            </a>
          </li>

          <li className="navbar__item">
            <a className="navbar__item__link" href="#">
              <span className="capital-letter">P</span>orfolio
            </a>
          </li>

          <li className="navbar__item">
            <a className="navbar__item__link" href="#">
              <span className="capital-letter">C</span>ontact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
