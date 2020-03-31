import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import "./Navbar.css"

const Navbar = ({ sticky }) => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder"></div>
    <ul className="navbar--link">
      <li className="navbar--link-item">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </Link>
      </li>
      <li className="navbar--link-item">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </Link>
      </li>
      <li className="navbar--link-item">
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Portfolio
        </Link>
      </li>
      <li className="navbar--link-item">
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
