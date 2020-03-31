import React from "react"

import styled from "styled-components"
import { FaNode, FaReact, FaJS } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import "./Icons.css"

import ReactIcon from "./IconImg/React.png"
import JSIcon from "./IconImg/JS.png"
import HTML5Icon from "./IconImg/HTML5.png"
import CSSIcon from "./IconImg/CSS.png"
import MongoDBIcon from "./IconImg/MongoDB.png"
import SQLIcon from "./IconImg/SQL.png"
import FirebaseIcon from "./IconImg/Firebase.png"
import NodeIcon from "./IconImg/Node.png"
import JavaIcon from "./IconImg/Java.png"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px 10px 10px 10px;
  width: 100%;
  color: ${props => props.color};
  margin-right: auto;
`

const Icons = () => {
  return (
    <Container>
      <img src={JSIcon} alt="JavaScript" />
      <a href="https://reactjs.org/">
        <img src={ReactIcon} alt="React" />
      </a>
      <a href="https://nodejs.org/">
        <img src={NodeIcon} alt="Node.js" />
      </a>
      <a href="https://www.java.com/">
        <img src={JavaIcon} alt="Java" />
      </a>
      <img src={HTML5Icon} alt="HTML5" />
      <img src={CSSIcon} alt="CSS3" />
      <a href="https://firebase.google.com/">
        <img src={FirebaseIcon} alt="Firebase" />
      </a>
      <img src={SQLIcon} alt="SQL" />
      <a href="https://www.mongodb.com/">
        <img className="mongo" src={MongoDBIcon} height="3vh" alt="MongoDB" />
      </a>
    </Container>
  )
}

export default Icons
