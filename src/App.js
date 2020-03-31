import React, { Fragment, useEffect, useRef, useState } from "react"
import Welcome from "./components/Header/Welcome"
import Navbar from "./components/Header/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"

import "typeface-open-sans"
import "typeface-roboto"

import "./App.css"

function App() {
  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [])

  const [isSticky, setSticky] = useState(false)

  const stickyRef = useRef(null)
  const handleScroll = () => {
    window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false)
  }

  // This function handle the scroll performance issue
  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut
    return () => {
      let context = this,
        args = arguments
      const later = () => {
        timeOut = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeOut
      clearTimeout(timeOut)
      timeOut = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  window.addEventListener("scroll", debounce(handleScroll))

  return (
    <div className="container">
      <div id="home" className="frontpage">
        <Home />
      </div>
      <Navbar sticky={isSticky} />
      <content id="about" className="about">
        <About stickyRef={stickyRef} />
      </content>
      <content id="portfolio" className="about">
        <Portfolio />
      </content>
    </div>
  )
}

export default App
