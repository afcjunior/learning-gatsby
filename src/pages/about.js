import React from "react"
import Layout from "../components/Layout/Layout"
import { Link } from "gatsby"
import PropTypes from "prop-types"

function AboutPage(props) {
  return (
    <Layout>
      <h1>Sobre</h1>
      <p>Este site é apenas um projeto para eu estudar gatsby.</p>
      <p>
        Quer entrar em contato? <Link to="/contact">Clica aqui</Link>.
      </p>
    </Layout>
  )
}

AboutPage.propTypes = {}

export default AboutPage
