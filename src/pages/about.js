import React from "react"
import Layout from "../components/Layout/Layout"
import { Link } from "gatsby"
import PropTypes from "prop-types"

function AboutPage(props) {
  return (
    <Layout>
      <h1>About</h1>
      <p>This blog is just a project I'm using to learn gatsby from scratch.</p>
      <p>
        Want to get in touch? <Link to="/contact">Contact me</Link>.
      </p>
    </Layout>
  )
}

AboutPage.propTypes = {}

export default AboutPage
