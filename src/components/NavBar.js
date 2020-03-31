import React from "react"

import styled from "styled-components"
import { Link, animateScroll as scroll } from "react-scroll"

const Nav = styled.div`
  width: 100%;
  height: 40px;
  background-color: #212121;
  color: #fff;
  position: fixed;
`

const LinkStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const LinkStyle = styled.div`
  font-size: 1.5em;
  padding: 10px;
`

const NavBar = ({ sticky }) => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  return (
    <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
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
    </nav>
  )
}

export default NavBar
