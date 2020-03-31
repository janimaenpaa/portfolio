import React from "react"
import styled from "styled-components"
import { Link, animateScroll as scroll } from "react-scroll"

import { FaLinkedin, FaGithub } from "react-icons/fa"
import "typeface-roboto"

const Wrapper = styled.div`
  font-family: Roboto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Hello = styled.div`
  color: #cacaca;
  align-items: stretch;
  font-size: 4vw;
  font-weight: bold;
  @media only screen and (max-width: 768px) {
    font-size: 6vw;
  }
`
const Name = styled.span`
  color: #34d6fc;
`

const Body = styled.div`
  color: #ffffff;
  align-items: stretch;
  font-size: 3.5vw;
  @media only screen and (max-width: 768px) {
    font-size: 5.5vw;
  }
`

const IconContainer = styled.div`
  display: flex;
  margin-top: 30px;
`

const IconLink = styled.a`
  padding-left: 20px;
  padding-right: 20px;
  :link {
    color: #fff;
    opacity: 0.4;
  }
  :visited {
    color: #fff;
    opacity: 0.4;
  }
  :hover {
    color: #fff;
    opacity: 1;
  }
`

const Button = styled.div`
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
  padding: 14px;
  border-radius: 10px;
  background-color: #f5f5f5;
  margin-bottom: auto;
  text-decoration: none;
  cursor: pointer;
  :hover {
    background-color: #34d6fc;
    color: #fff;
  }
`

const Home = () => {
  return (
    <Wrapper>
      <Hello>
        Hello, my name is <Name>Jani Mäenpää</Name>
      </Hello>
      <Body>I'm a Full-Stack Developer</Body>
      <IconContainer>
        <IconLink href="https://github.com/janimaenpaa/">
          <FaGithub size={64} />
        </IconLink>

        <IconLink href="https://www.linkedin.com/in/janimaenpaa/">
          <FaLinkedin size={64} />
        </IconLink>
      </IconContainer>
      <Button>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          SEE MY WORK
        </Link>
      </Button>
    </Wrapper>
  )
}

export default Home
