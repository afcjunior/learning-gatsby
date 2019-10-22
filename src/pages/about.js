import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { Link } from "gatsby"
import PropTypes from "prop-types"

function AboutPage(props) {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <p>This blog is just a project I'm using to learn gatsby from scratch.</p>
      <p>
        Want to get in touch? <Link to="/contact">Contact me</Link>.
      </p>
      <Footer />
    </div>
  )
}

AboutPage.propTypes = {}

export default AboutPage
