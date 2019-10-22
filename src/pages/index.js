import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

function IndexPage(props) {
  return (
    <div>
      <h1>From the Front</h1>
      <h2>Olá! Meu nome é Adalberto, e este é meu blog.</h2>
      <p>
        Want to get in touch? <Link to="/contact">Contact me</Link>.
      </p>
    </div>
  )
}

IndexPage.propTypes = {}

export default IndexPage
