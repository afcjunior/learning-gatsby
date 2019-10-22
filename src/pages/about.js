import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

function About(props) {
  return (
    <div>
      <h1>About</h1>
      <p>This blog is just a project I'm using to learn gatsby from scratch.</p>
      <p>
        Want to get in touch? <Link to="/contact">Contact me</Link>.
      </p>
    </div>
  )
}

About.propTypes = {}

export default About
