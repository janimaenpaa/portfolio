import React from "react"

import styled from "styled-components"

import profileImage from "../images/Jani.png"
import Icons from "../components/Icons"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 4vh;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const Column = styled.div`
  padding: 10px;
  text-align: left;
  width: 40%;
  @media only screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
  }
`

const Heading = styled.div`
  text-align: center;
  font-weight: bold;
`

const Content = styled.p`
  font-family: Open-Sans;
  font-size: 1.5vw;
  color: #595959;
  @media only screen and (max-width: 800px) {
    font-size: 3vw;
  }
  @media only screen and (max-width: 480px) {
    font-size: 5vw;
  }
`
const ProfileImage = styled.div`
  background-image: url(${profileImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 20rem;
  height: 20rem;
  margin: auto auto 0.2em auto;
  @media only screen and (max-width: 800px) {
    margin-top: 1rem;
  }
  @media only screen and (max-width: 500px) {
    margin-top: 1rem;
  }
`

const About = ({ stickyRef }) => {
  return (
    <Wrapper ref={stickyRef}>
      <Column>
        <ProfileImage />
        <Heading>Who?</Heading>
        <Content>
          I'm a business information technology student with a focus on React
          and full-stack web development. I have a keen interest of learning
          something new everyday.
        </Content>
      </Column>
      <Column>
        <Heading>Skills</Heading>
        <Icons />
      </Column>
    </Wrapper>
  )
}

export default About
