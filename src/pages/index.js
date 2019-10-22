import React from "react"
import Layout from "../components/Layout/Layout"

import { Link } from "gatsby"
import PropTypes from "prop-types"

function IndexPage(props) {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>Olá! Meu nome é Adalberto, e este é meu blog.</h2>
      <p>
        Want to get in touch? <Link to="/contact">Contact me</Link>.
      </p>
    </Layout>
  )
}

IndexPage.propTypes = {}

export default IndexPage
