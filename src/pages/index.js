import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { Link } from "gatsby"
import PropTypes from "prop-types"

function IndexPage(props) {
  return (
    <div>
      <Header />
      <h1>Welcome</h1>
      <h2>Olá! Meu nome é Adalberto, e este é meu blog.</h2>
      <p>
        Want to get in touch? <Link to="/contact">Contact me</Link>.
      </p>
      <Footer />
    </div>
  )
}

IndexPage.propTypes = {}

export default IndexPage
