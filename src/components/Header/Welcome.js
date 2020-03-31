import React from "react"
import "./Welcome.css"
import About from "./About"

const Welcome = ({ stickyRef }) => (
  <main>
    <section className="welcome">
      <div ref={stickyRef}>
        <p>Even if you scroll, i will stick with you</p>
        <button className="welcome__cta-primary">Contact us</button>
      </div>
    </section>
    <About />
    <About />
    <About />
  </main>
)

export default Welcome
